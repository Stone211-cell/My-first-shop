'use client'


import { SignUpButton } from '@clerk/nextjs'
import { Button } from "../ui/button";


const SignUpBtn = ({msg}:{msg?:string}) => {
  return (
    <div>   
        <SignUpButton  mode="modal"> 
           <Button
          >
            {msg}
          </Button>
        </SignUpButton></div>
  )
}
export default SignUpBtn