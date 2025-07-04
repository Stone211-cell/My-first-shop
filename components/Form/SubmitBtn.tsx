"use client";
import { useFormStatus } from "react-dom";
import { Heart, RotateCw } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Button } from "../ui/button";

type btnSize = "default" | "lg" | "sm";
// const roitai:string = 'tam'
type SubmitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};

export const SubmitBtn = (props: SubmitButtonProps) => {
  // code
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      size={props.size}
      className={props.className}
    >
      {pending ? (
        <>
          <span>
          <RotateCw className="animate-spin" />
          </span>
        </>
      ) : (
        <p>{props.text}</p>
      )}
    </Button>
  );
};

export const FavoriteBtn = ({ isfavorite }: { isfavorite: boolean }) => {
  // code
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit" size="icon" >
      {pending ? (
        <RotateCcw className="animate-spin" />
      ) : isfavorite ? (
        <Heart fill="white"/>
      ) : (
        <Heart />
      )}
    </Button>
  );
};

// export const SignInCardButton = () => {
//   return (
//     <SignInButton mode="modal">
//       <Button size="icon" variant="outline">
//         <Heart />
//       </Button>
//     </SignInButton>
//   );
// };
