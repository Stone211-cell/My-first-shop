"use client";

import { toggleFavoriteAction } from "@/actions/actions";
import FormContainer from "../Form/FormContainer";


import {FavoriteBtn } from "../Form/SubmitBtn"

import { usePathname } from "next/navigation";

const FavoriteTogglefrom = ({
  favoriteId,
  productId,
}: {
  favoriteId: string | null;
  productId: string;
}) => {
  const pathname = usePathname();

  const toggleAction = toggleFavoriteAction.bind(null, {
    favoriteId,
    productId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <FavoriteBtn  isfavorite={favoriteId ? true : false}/>
    </FormContainer>
  );
};
export default FavoriteTogglefrom;
