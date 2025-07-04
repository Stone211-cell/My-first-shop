// 'use client'
// import { useRouter } from "next/navigation"

// export default function CheckoutForm({ productId }: { productId: string }) {
//   const router = useRouter()

//   const handleCheckout = async () => {
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       body: JSON.stringify({ productId }),
//     })
//     const data = await res.json()
//     router.push(data.url) // ไปหน้า Stripe
//   }

//   return (
//     <button onClick={handleCheckout} className="mt-4 bg-blue-600 text-white px-4 py-2">
//       ไปชำระเงินผ่าน Stripe
//     </button>
//   )
// }
// import { fetchOneProducts } from "@/actions/actions";
// import { ProductCardProps } from "@/utils/types";

// const Propage = async({ params }: { params: { id: string } }) => {
//   const products = await fetchOneProducts({ productId: params.id });
//   console.log(products?.id )
//   return (
//      <div className="max-w-xl mx-auto p-6">
//       <h1 className="text-2xl font-bold">{products?.name}</h1>
//       <img src={products?.image} alt={products?.name} className="mt-4 w-full h-auto" />
//       <p className="mt-4">{products?.description}</p>
//       <p className="mt-2 text-green-600 font-semibold">ราคา: {products?.price} บาท</p>
//     </div>
//   )
// }
// export default Propage


// "use client";

// import { useAuth } from "@clerk/nextjs";
// import {
//   EmbeddedCheckout,
//   EmbeddedCheckoutProvider,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";


// import { stripe } from "@/lib/stripe"; 

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

// export default function Checkout() {
//   const { getToken } = useAuth();
//   console.log(getToken);

//   const fetchClientSecret = async () => {
//     // const origin = (await headers()).get("origin");

//     // // Create Checkout Sessions from body params.
//     // const session = await stripe.checkout.sessions.create({
//     //   ui_mode: "embedded",
//     //   line_items: [
//     //     {
//     //       // Provide the exact Price ID (for example, price_1234) of
//     //       // the product you want to sell
//     //       price: "price_1Rh75tGhYxy20x1yXYZABC12",
//     //       quantity: 1,
//     //     },
//     //   ],
//     //   mode: "payment",
//     //   return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
//     // });

//     // return session.client_secret;
//   };
//   return (
//     <div id="checkout">
//       <EmbeddedCheckoutProvider stripe={stripePromise} options={{}}>
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   );
// }
