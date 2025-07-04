import { ProductCardProps } from "@/utils/types";
import Image from "next/image";
import { Button } from "../ui/button";
import FavoriteToggleBtn from "./FavoriteToggleBtn";

import Link from "next/link";

const Productcard = async ({ products }: { products: ProductCardProps }) => {
  return (
    <article className=" group relative">
      <Link
        href={`/product/${products.id}`}
        className="text-blue-600 hover:underline"
      >
        <div className="relative h-[300px] rounded-md">
          <Image
            src={products.image}
            sizes="(max-width:768px) 100vw,50vw"
            alt={products.name.substring(0, 10)}
            fill
            className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <h3 className="text-sm text-blue-800 font-semibold ">
            {products.name}
          </h3>
          <p>{products.category}</p>
        </div>

        <p className="text-sm font-semibold my-1">
          {products.description.substring(0, 50)}
        </p>
      </Link>

      <Button>
        <p>
          <span className="pr-1">ราคา</span>
          {products.price}
        </p>
      </Button>

      <Link href={`/checkout/${products.id}`}>
        <Button className="bg-green-600 text-white mt-2">ซื้อสินค้า</Button>
      </Link>

      <div className="absolute top-1 right-2">
        <FavoriteToggleBtn productId={products.id} />
      </div>
    </article>
  );
};
export default Productcard;
