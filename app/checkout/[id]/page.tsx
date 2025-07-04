import { fetchOneProducts } from "@/actions/actions"
import Productpage from "@/app/product/[id]/page"
import CheckoutForm from "@/components/CheckStripe/CheckOutFrom"

export default async function CheckoutPage({ params }: { params: { id: string } }) {
  const product = await fetchOneProducts({ productId: params.id  })

  if (!product) return <div>ไม่พบสินค้า</div>

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl text-green-400 font-bold mb-4">ยืนยันการซื้อ</h1>
      <Productpage params={product}/>

      <CheckoutForm params={product} />
    </div>
  )
}
