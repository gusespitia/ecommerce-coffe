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
import ProductTasteOrigin from "./shared/product-taste-origin";

const FeaturesProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem, items } = useCart();
 

  return (
    <div className="mx-auto sm:px-24 py-4 sm:py-16 max-w-6xl">
      <h3 className="px-6 sm:pb-8 text-3xl">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="ml-2 md:ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result !== null &&
            result.map((product: ProductType) => {
              const { id, slug, images, productName, taste, origin } = product;

              return (
                <CarouselItem
                  key={id}
                  className="group md:basis-1/2 lg:basis-1/3"
                >
                  <div className="mx-auto p-2">
                    <Card className="border-gray-200 shadow-none py-4 border">
                      <CardContent className="relative flex justify-center items-center px-6 py-2">
                        {images && images.length > 0 && (
                         <Image
                         src={`${images[0].url}`}
                         alt={productName || "Image Product"}                         
                         width={300}
                         height={300}
                         style={{ width: 'auto', height: 'auto' }}
                       />
                       
                        )}
                        <div className="bottom-5 absolute opacity-0 group-hover:opacity-100 px-6 w-full transition duration-200">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => router.push(`/product/${slug}`)}
                              icon={<Expand size={20} />}
                              className="text-gray-600 hover:text-blue-600"
                            />
                            <IconButton
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart />}
                              className="text-gray-600 hover:text-blue-600"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="justify-between items-center gap-2 grid grid-cols-2 mx-auto px-4">
                        <h3 className="font-bold text-sm m">{productName} </h3>
                        <div className="flex justify-between items-center gap-2">
                        <ProductTasteOrigin origin={product.origin} taste={product.taste} />
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="sm:flex hidden" />
        <CarouselNext className="sm:flex hidden" />
      </Carousel>
    </div>
  );
};

export default FeaturesProducts;
