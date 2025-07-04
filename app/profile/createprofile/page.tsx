

import { CreateProfileAction } from "@/actions/actions";
import FormContainer from "@/components/Form/FormContainer";
import Inputpage from "@/components/Form/Input";
import { SubmitBtn } from "@/components/Form/SubmitBtn";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";




const createprofilepage = async () => {
  const user = await currentUser()
  if (user?.privateMetadata.hasProfile) redirect("/");
  return (
    <div >
      
      <div className="border p-8">
        <h1 className="text-xl">New User</h1>
        <FormContainer action={CreateProfileAction}>
          <div>

          <Inputpage name="firstName" type="text" label="ชื่อจริง" placeholder="ชื่อจริง"/>
          <Inputpage name="lastName" type="text" label="นามสกุล" placeholder="นามสกุล"/>
          <Inputpage name="userName" type="text" label="ชื่อ" placeholder="placeholder"/>
          </div>
        <SubmitBtn  text="create profile" size='lg' />
        </FormContainer>
      </div>
    </div>
  );
};
export default createprofilepage;
