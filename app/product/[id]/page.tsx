import { fetchOneProducts } from "@/actions/actions";
import { ProductCardProps } from "@/utils/types";

const Productpage = async({ params }: { params: { id: string } }) => {
  const products = await fetchOneProducts({ productId: params.id });
  console.log(products?.id )
  return (
     <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{products?.name}</h1>
      <img src={products?.image} alt={products?.name} className="mt-4 w-full h-auto" />
      <p className="mt-4">{products?.description}</p>
      <p className="mt-2 text-green-600 font-semibold">ราคา: {products?.price} บาท</p>
    </div>
  )
}
export default Productpage