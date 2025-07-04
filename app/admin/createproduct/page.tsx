import Inputpage from "@/components/Form/Input";
import InputTextarea from "@/components/Form/InputTextarea";
import { CreateProductAction, isadmin } from "@/actions/actions";
import { SubmitBtn } from "@/components/Form/SubmitBtn";
import FormContainer from "@/components/Form/FormContainer";
import CategoryInput from "@/components/Form/CategoryInput";
import ImageInput from "@/components/Form/ImageInput";
import { redirect } from "next/navigation";
const createproduct = async () => {
  const chekadmin =  await isadmin();
  if (chekadmin) redirect("/");
  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">สร้างโพสต์ใหม่</h2>
      <FormContainer action={CreateProductAction}>
        <div className="py-8">
          <Inputpage
            name="name"
            type="text"
            label="หัวเรื่อง (Title)"
            className="font-medium"
            placeholder="placeholder"
          />
          <InputTextarea
            name="description"
            label="เนื้อหา (Content)"
            placeholder="เนื้อหา (Content)"
          />
          <CategoryInput />
          <ImageInput />
          <Inputpage
            name="price"
            type="text"
            label="ราคา (price)"
            className="font-medium"
            placeholder="placeholder"
          />
        </div>
        <SubmitBtn
          className="bg-blue-600  text-white w-full"
          text="create profile"
        />
      </FormContainer>
    </div>
  );
};
export default createproduct;
