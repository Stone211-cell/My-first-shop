"use client";

import { useActionState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";
import { actionFunction } from "@/utils/types";

const initialState = {
  message: "",
};



const FormContainer = ({ action, children }: {action:actionFunction, children: React.ReactNode }) => {
  const [state, formAction, pending] = useActionState(action, initialState);
  useEffect(() => {
    if(state.message){
        toast(state.message)
    }
  }, [state]);
  return (
    <form className="space-y-4" action={formAction}>
      {children}
    </form>
  );
};
export default FormContainer;
