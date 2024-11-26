import { Skeleton } from "@/components/ui/skeleton";

type skeletonSchemeProps = {
  grid: number;
};
const SkeletonSchema = (props: skeletonSchemeProps) => {
  return Array.from({ length: props.grid }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col items-center gap-8 mx-auto space-y-3 justify-center w-full h-full animate-pulse"
    >
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  ));
};

export default SkeletonSchema;
