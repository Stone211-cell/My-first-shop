import { fetchFavorite } from "@/actions/actions"
import ProductList from "@/components/Home/ProductList"

const favoritepage = async() => {
    const favorites = await fetchFavorite()
    console.log(favorites)
  return (
    <ProductList products={favorites}/>
  )
}
export default favoritepage