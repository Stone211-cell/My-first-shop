import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { categories } from "@/utils/categories";

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  return (
    <div>
      <Select name="category" defaultValue={defaultValue || categories[0].label} required>
        <SelectTrigger className="w-[180px] mt-3">
          <SelectValue placeholder="หมวดหมู่สินค้า" />
        </SelectTrigger>
        <SelectContent className="bg-white ">
          {categories.map((item) => {
            return (
              <SelectItem value={item.label} key={item.label}>
                <span className="capitalize flex items-center gap-4">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default CategoryInput;
