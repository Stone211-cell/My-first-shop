type MenuItem = {
  href: string;
  label: string;
};

export const List: MenuItem[] = [
  { href: "/", label: "หน้าหลัก" },
  { href: "/aboutUs", label: "เกี่ยวกับเรา" },
  { href: `/favorite`, label: "ชื่นชอบ" },
  // { href: "/admin/createproduct", label: "เพิ่มสินค้า" },
];

export const PayList: MenuItem[] = [
  { href: "/topup/pay", label: "เติมเงิน" },
  { href: "/topup/payOut", label: "ถอนเงิน" },
];

export const AdminList: MenuItem[] = [

  { href: "/admin/createproduct", label: "เพิ่มสินค้า" },

];