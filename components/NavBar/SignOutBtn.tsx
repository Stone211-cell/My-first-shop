'use client'



import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignOutBtn = ({msg}:{msg?:string}) => {
  return (
    <SignOutButton redirectUrl="/" >
      <Button 
        onClick={() =>
          toast("Logout", {
            description: "Yes this is Logout",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
        className=""
      >
        {msg}
      </Button>
    </SignOutButton>
  );
};
export default SignOutBtn;

