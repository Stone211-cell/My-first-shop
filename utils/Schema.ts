import { z, ZodSchema } from "zod";

export const validateWithZodSchema = <T>(
  Schema: ZodSchema<T>,
  data: unknown
): T => {
  const result = Schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
};

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 ตัวอักษร" }),
  lastName: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 ตัวอักษร" }),
  userName: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 ตัวอักษร" }),
});

const validateimage = () => {
  const maxFileSize = 1024 * 1024;
  return z.instanceof(File).refine((file) => {
    return file.size <= maxFileSize;
  }, "file size must be less than 1MB");
};

export const imageSchema = z.object({
  image: validateimage(),
});

export const productSchema = z.object({
  name: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(30, { message: "ชื่อต้องน้อยกว่า 30 ตัวอักษร" }),
  description: z
    .string()
    .min(2, { message: "ชื่อต้องมากกว่า 2 ตัวอักษร" })
    .max(200, { message: "รายละเอียดต้องน้อยกว่า 200 ตัวอักษร" }),
  category: z.string(),
  price: z.coerce
    .number({ invalid_type_error: "กรุณากรอกเฉพาะตัวเลข" })
    .int({ message: "กรุณากรอกจำนวนเต็ม" })
    .min(0, { message: "ราคาต้องไม่น้อยกว่า 0" }),
});
