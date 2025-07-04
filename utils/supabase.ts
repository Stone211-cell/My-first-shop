import { createClient } from "@supabase/supabase-js";

const bucket = "productbucket";
const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

// Create Supabase client
const supabase = createClient(url, key);

// Upload file using standard upload
export async function uploadFile(image: File) {
  console.log("📤 Start uploading:", image.name);

  const timeStamp = Date.now();
  const newName = `${timeStamp}-${image.name}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: "3600" });

  if (error) {
    console.error("❌ Upload failed:", error);
  } else {
    console.log("✅ Upload success:", data);
  }
  if (!data) throw new Error("file size must be less than 1MB");
  const publicUrl = supabase.storage.from(bucket).getPublicUrl(newName)
    .data.publicUrl;
  console.log("🌐 Public URL:", publicUrl);
  return publicUrl;
}
