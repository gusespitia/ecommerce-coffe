import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ProductType } from "@/types/product";
import Link from "next/link";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const router = useRouter();
  const { product } = props;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="relative p-2 transition-all duration-150 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-500"
    >
      {/* Etiquetas Superiores */}
      <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
    
        <p className="text-xs font-semibold px-2 py-1 bg-yellow-900 text-white rounded-full dark:bg-white dark:text-black w-fit">
          {product.origin}
        </p>
        <p
          className="px-2 py-1 text-xs text-white bg-black rounded-full
                 dark:bg-white dark:text-black w-fit"
        >
          {product.taste}
        </p>
      </div>

      {/* Carrusel de Imágenes */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-full rounded-lg"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem className="group relative" key={image.id}>
              <Image
                src={`${image.url}`}
                alt={product.productName || "Imagen del producto"}
                width={400}
                height={300}   
                style={{ width: 'auto', height: 'auto' }}            
                className="rounded-lg object-cover h-48 w-full"
              />
              {/* Controles al Hover */}
              <div className="absolute flex justify-center w-full gap-4 px-4 transition-opacity duration-200 opacity-0 bottom-4 group-hover:opacity-100">
                <IconButton
                  onClick={() => router.push(`/product/${product.slug}`)}
                  icon={<Expand size={20} className="text-gray-700 dark:text-gray-300" />}
                  className="bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                />
                <IconButton
                  onClick={() => router.push(`/product/${product.slug}`)}
                  icon={<ShoppingCart size={20} className="text-gray-700 dark:text-gray-300" />}
                  className="bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Información del Producto */}
      <div className="mt-4 text-center">
        <p className="text-lg font-medium text-gray-800 dark:text-gray-100 truncate">
          {product.productName}
        </p>
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
