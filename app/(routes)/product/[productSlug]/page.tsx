"use client";

import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { useParams } from "next/navigation";
import { ResponseType } from "@/types/response";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
  const params = useParams();
  const categorySlug = params.categorySlug;

  // Asegurarse de que categorySlug no sea undefined antes de llamar a la función.
  if (!categorySlug) {
    return <div>Category slug not found</div>;
  }

  // Llamar a la función solo si categorySlug está definido.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);

  if (loading) {
    return <div>Loading...</div>;
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

