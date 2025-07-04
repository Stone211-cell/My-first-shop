"use client";


import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignInBtn = ({msg}:{msg?:string}) => {
  return (
    <SignInButton mode="modal">
      <Button variant='default'>
        {msg}
      </Button>
    </SignInButton>
  );
};
export default SignInBtn;
