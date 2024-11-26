"use client";

import { useGetProductBySlug } from "@/api/getproductBySlug";
import { useParams } from "next/navigation";
import { ResponseType } from "@/types/response";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
  const params = useParams();
  const { productSlug } = params;
  const { result, loading }: ResponseType = useGetProductBySlug(
    productSlug as string
  );
  if (!productSlug) {
    // handle the case where productSlug is undefined or null
    return <div>Product slug not found</div>;
  }
  if (result === null) {
    return <SkeletonProduct />;
  }
  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-32 sm:px-24">
      <div className="grid sm:grid-cols-2">
        <div className="r">
          <CarouselProduct images={result[0].images} />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}
