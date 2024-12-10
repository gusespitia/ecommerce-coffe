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
  const { result }: ResponseType = useGetProductBySlug(productSlug as string);
  if (!productSlug) {
    // handle the case where productSlug is undefined or null
    return <div>Product slug not found</div>;
  }
  if (result === null) {
    return <SkeletonProduct />;
  }
  return (
    <div className="mx-auto sm:px-24 py-4 sm:py-32 max-w-6xl">
      <div className="grid sm:grid-cols-2">
        <div className="px-4">
          <CarouselProduct images={result[0].images} />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}
