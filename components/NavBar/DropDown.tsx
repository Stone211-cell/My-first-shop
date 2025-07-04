import DropList from "./DropList";
import { currentUser } from "@clerk/nextjs/server";

const DropDown = async () => {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.role === "admin";
  return (
    <div className="w-full bg-blue-300 p-5 border border-black-1 ">
      <div className="  flex  justify-between  px-5">
        <div>LOGO</div>

        <div className="flex">
          <DropList />
          {isAdmin && <div>Admin Zone</div>}
        </div>
      </div>
    </div>
  );
};
export default DropDown;
