import ProductContainer from "@/components/Home/ProductContainer";

const page = () => {
  return (
    <div>
      <div>
        <ProductContainer />
      </div>
      <div>
        <h1>สินค้าแนะนำ</h1>
        <ProductContainer />
      </div>
    </div>
  );
};
export default page;
