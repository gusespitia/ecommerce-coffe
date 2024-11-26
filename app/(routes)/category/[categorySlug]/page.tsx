"use client";


import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { useParams } from "next/navigation";
import { ResponseType } from "@/types/response";
import { Separator } from "@/components/ui/separator";
import FiltersControlsCategory from "./components/filters-controls";
import SkeletonSchema from "@/components/ui/skeletonSchema";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const categorySlug = params.categorySlug ?? 'capsula';
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigen, setFilterOrigen] = useState("");
  const [filterTaste, setFilterTaste] = useState("");

  // Función para filtrar productos por `origin` y `taste`
  const filterProducts = () => {
    if (!result) return [];

    return result.filter((product: ProductType) => {
      const matchesOrigin =
        filterOrigen === "" || product.origin === filterOrigen;
      const matchesTaste =
        filterTaste === "" || product.taste === filterTaste;

      return matchesOrigin && matchesTaste;
    });
  };

  const filteredProducts = !loading && result !== null ? filterProducts() : [];

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-16 sm:px-24">
      {/* Título de la Categoría */}
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">
          Cáfe {result[0].category.categoryName}
        </h1>
      )}

      <Separator />

      <div className="sm:flex sm:justify-between gap-4">
        {/* Controles de Filtro */}
        <FiltersControlsCategory
          setFilterOrigen={setFilterOrigen}
          setFilterTaste={setFilterTaste}
        />

        {/* Productos Filtrados */}
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}

          {!loading && filteredProducts.length > 0 ? (
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            !loading && (
              <p className="text-center font-sans font-bold text-lg text-red-800">
                No se encontraron Productos!
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
