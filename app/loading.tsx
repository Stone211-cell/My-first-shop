import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
 return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-5 px-5">
      <Skeletoncard />
      <Skeletoncard />
      <Skeletoncard />
      <Skeletoncard />
      <Skeletoncard />
      <Skeletoncard />
      <Skeletoncard />
    </div>
  );
};

export const Skeletoncard = () => {
  return (
    <div>
      <Skeleton className=" h-[300px] rounded-md]  rounded-xl bg-gray-200 mb-4" />
      <Skeleton className=" h-[300px] rounded-md]  rounded-xl bg-gray-200 mb-4" />
      <Skeleton className=" h-[300px] rounded-md]  rounded-xl bg-gray-200 mb-4" />

    </div>
  );
};
export default loading;
