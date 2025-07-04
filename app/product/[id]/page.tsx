import { fetchOneProducts } from "@/actions/actions";
import Image from "next/image";

const Productpage = async ({ params }: { params: { id: string } }) => {
  const products = await fetchOneProducts({ productId: params.id });
  console.log(products?.id);
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{products?.name}</h1>
      <Image
        src={products?.image ?? "/default.jpg"}
        alt={products?.name.substring(0, 10) ?? "shop"}
        width={500} // กำหนดขนาดที่เหมาะสม
        height={300}
        className="mt-4 w-full h-auto object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-4">{products?.description}</p>
      <p className="mt-2 text-green-600 font-semibold">
        ราคา: {products?.price} บาท
      </p>
    </div>
  );
};
export default Productpage;
