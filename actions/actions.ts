"use server";

import {
  imageSchema,
  productSchema,
  profileSchema,
  validateWithZodSchema,
} from "@/utils/Schema";

import { renderError } from "@/utils/renderError";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prisma from "@/utils/db";
import { uploadFile } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

import { stripe } from "@/lib/stripe";
import { headers } from "next/headers";

export const getAuthUser = async () => {
  // code body
  const user = await currentUser();

  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

export const getAuthAdmin = async () => {
  // code body
  const user = await currentUser();

  if (!user) {
    throw new Error("You must logged!!!");
  }
  if (user.privateMetadata.role !== "admin") {
    throw new Error("You are not admin");
  }
  return user;
};

export const CreateProfileAction = async (
  prevState: any,
  formdata: FormData
) => {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Please Login!!!");
    const rawData = Object.fromEntries(formdata);
    const validated = validateWithZodSchema(profileSchema, rawData);

    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        ...validated,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    });

    // return { message: "create profile success" };
  } catch (err: any) {
    return renderError(err);
  }
  redirect("/");
};

export const CreateProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();
    const admin = await getAuthAdmin();
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // Step 1 Validate Data

    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    const validateField = validateWithZodSchema(productSchema, rawData);

    // Step 2 Upload Image to Supabase
    const fullPath = await uploadFile(validatedFile.image);

    // Step 3 Insert to DB
    await prisma.product.create({
      data: {
        ...validateField,
        image: fullPath,
        price: Number(validateField.price),
      },
    });
    return { message: "Create Product Success!!!" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchProducts = async () => {
  //search
  const product = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return product;
};

export const fetchOneProducts = async ({
  productId,
}: {
  productId: string;
}) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  return product;
};

export const fetchFavoriteID = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  const favorite = await prisma.favorite.findFirst({
    where: {
      productId: productId,
      userId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  favoriteId: string | null;
  productId: string;
  pathname: string;
}) => {
  const { favoriteId, productId, pathname } = prevState;
  const user = await getAuthUser();

  try {
    if (favoriteId) {
      await prisma.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await prisma.favorite.create({
        data: {
          productId: productId,
          userId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return {
      message: favoriteId ? "Removed Success!!!" : "Add Success!!",
    };
  } catch (error) {
    return renderError(error);
  }
};

// { productId }: { productId: string }
export const fetchFavorite = async () => {
  const user = await getAuthUser();
  const favorites = await prisma.favorite.findMany({
    where: {
      // productId: productId,
      userId: user.id,
    },
    select: {
      product: {
        select: {
          id: true,
          name: true,
          description: true,
          category: true,
          image: true,
          price: true,
        },
      },
    },
  });
  return favorites.map((item) => item.product);
};

export const isadmin = async () => {
  const admin = await currentUser();
  try {
    if (admin?.privateMetadata.role !== "admin") redirect("/");
  } catch (error) {
    console.log(renderError(error));
    return redirect("/");
  }
};

export async function createCheckoutSession(productId: string) {
  const origin = (await headers()).get("origin") || "http://localhost:3000";

  try {
    // ดึงข้อมูลสินค้าจากฐานข้อมูล
    const product = await fetchOneProducts({ productId });
    if (!product) throw new Error("Product not found");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["promptpay","card"],
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price * 100,
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });

    return session.url;
  } catch (error) {
    console.error("Stripe session error:", error);
    return null;
  }
}
