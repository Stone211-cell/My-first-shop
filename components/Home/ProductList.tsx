import { ProductCardProps } from "@/utils/types";
import Productcard from "../card/ProductCard";

const ProductList = ({ products }: { products: ProductCardProps[] }) => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-6 px-10">
      {products.map((item) => {
        return <Productcard key={item.id} products={item} />;
      })}
    </section>
  );
};
export default ProductList;

//  [ ข้อมูลสินค้า - ชื่อ
//   {
//     id: 'd2588060-0a30-4045-8022-2ebedff3fc6c',
//     name: 'productbucket',
//     description: 'const bucket = "product-bucket";',
//     category: 'freefrie',
//     image: 'https://jdyhahryxyldwjcjyiib.supabase.co/storage/v1/object/public/productbucket/1748260281890-tagmeta.png',
//     price: 1,
//     createdAt: 2025-05-26T11:51:27.223Z,
//     updatedAt: 2025-05-26T11:51:27.223Z
//   }
// ]
