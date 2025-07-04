import { fetchProducts } from "@/actions/actions"
import ProductList from "./ProductList"
import { ProductCardProps } from "@/utils/types"

const ProductContainer = async () => {
    const products:ProductCardProps[] = await fetchProducts()
  return (
    <div>
        <ProductList products ={products}/>
    </div>
  )
}
export default ProductContainer