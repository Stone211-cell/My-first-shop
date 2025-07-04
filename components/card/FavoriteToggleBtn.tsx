import { HeartPlus } from "lucide-react";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs/server";
import { SignInButton } from "@clerk/nextjs";
import { fetchFavoriteID } from "@/actions/actions";
import FavoriteTogglefrom from "./FavoriteTogglefrom";

const FavoriteToggleBtn = async ({ productId }: { productId: string }) => {
  const { userId } = await auth();
  if (!userId)
    return (
      <SignInButton mode="modal">
        <Button variant="default">
          <HeartPlus />
        </Button>
      </SignInButton>
    );

    const favoriteId = await fetchFavoriteID({productId})
  return (
    <FavoriteTogglefrom favoriteId={favoriteId} productId={productId}/>

  );
};
export default FavoriteToggleBtn;
