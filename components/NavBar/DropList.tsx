"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";

import { SignedOut, SignedIn  } from "@clerk/nextjs";

import { List, PayList,  } from "@/utils/menulist";

import SignUpBtn from "./SignUpBtn";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";




const DropList = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger>
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            size="2x"
            color="black"
            className="cursor-pointer border-2 border-black rounded px-1.5 inline-block"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>เมนู</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {List.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />

          {PayList.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.href}> {item.label}</Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator />

          {/* After Login */}
          <SignedIn>
            <SignOutBtn msg="SignOut" />
          </SignedIn>

          {/* before Login */}
          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInBtn msg="SignIn" />
              <SignUpBtn msg="SignUp" />
            </div>
          </SignedOut>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropList;

// {/* computer responsive */}
// <div className=" hidden  md:flex gap-4 ">
//   {List.map((item, index) => (
//     <Link
//       href={item.href}
//       key={index}
//       className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 hover:scale-105 transition-all duration-150"
//     >
//       {" "}
//       {item.label}
//     </Link>
//   ))}

//   <div>
//     <DropdownMenu>
//       <DropdownMenuTrigger className="px-3 py-2 rounded-md text-white bg-red-500 hover:bg-red-700 hover:scale-105 transition-all duration-150">
//         เติมเงิน
//       </DropdownMenuTrigger>

//       <DropdownMenuContent>
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         {PayList.map((item, index) => (
//           <DropdownMenuItem key={index} asChild>
//             <Link href={item.href} className="">
//               {" "}
//               {item.label}
//             </Link>
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   </div>

//     {/* After Login */}
//     <SignedIn>
//       <SignOutBtn msg="SignOut" />
//     </SignedIn>

//     {/* Before Login */}
//     <SignedOut>
//       <div className="flex items-center gap-2">
//         <SignInBtn msg="SignIn" />
//         <SignUpBtn msg="SignUp" />
//       </div>
//     </SignedOut>

// </div>
