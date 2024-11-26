"use client";

import { UseGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import Link from "next/link";
import Image from "next/image";

const ChooseCategory = () => {
  const { result, loading, error }: ResponseType = UseGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">
        Elige tu categoria favorita
      </h3>

      {loading && <p>Cargando categorías...</p>}
      {error && <p>Error al cargar categorías: {error}</p>}
      {!loading && result && result.length === 0 && (
        <p>No hay categorías disponibles.</p>
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {!loading &&
          result &&
          result.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                alt={category.categoryName}
                width={300}
                height={380}
                className="max-w-[270px] max-h-[380px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                {category.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;