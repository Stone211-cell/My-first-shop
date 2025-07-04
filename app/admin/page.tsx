import { AdminList } from "@/utils/menulist";
import Link from "next/link";

const page = () => {
  return (
    <div>
      {" "}
      {AdminList.map((item, index) => (
        <div key={index}>
          <Link href={item.href}> {item.label}</Link>
        </div>
      ))}
    </div>
  );
};
export default page;
