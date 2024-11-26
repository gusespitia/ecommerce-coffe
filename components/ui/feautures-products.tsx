/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "./carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./card";
import Image from "next/image";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

const FeaturesProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem, items } = useCart();
  console.log(items);

  return (
    <div className="max-w-6xl mx-auto py-4 sm:py-16 sm:px-24">
      <h3 className="text-3xl sm:pb-8 px-6">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="ml-2 md:ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { id, slug, images, productName, taste, origin } = product;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 shadow-none">
                      <CardContent className="flex items-center relative px-6 justify-center py-2">
                        {images && images.length > 0 && (
                          <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                            alt={productName || "Image Product"}
                            width={300}
                            height={300}
                          />
                        )}
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onlClick={() => router.push(`/product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600 hover:text-blue-600"
                            />
                            <IconButton
                              onlClick={() => addItem(product)}
                              icon={<ShoppingCart />}
                              className="text-gray-600 hover:text-blue-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8">
                        <h3 className="font-bold text-lg">{productName} </h3>
                        <div className="flex justify-between gap-3 items-center">
                          <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                            {taste}
                          </p>
                          <p className="px-2 py-1 text-white bg-yellow-900 rounded-full dark:bg-white dark:text-black w-fit">
                            {origin}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturesProducts;
