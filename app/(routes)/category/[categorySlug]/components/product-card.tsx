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
      className="relative border-gray-200 hover:border-gray-300 dark:hover:border-gray-500 dark:border-gray-700 shadow-sm hover:shadow-lg p-2 border rounded-lg transition-all duration-150"
    >
      {/* Etiquetas Superiores */}
      <div className="top-4 z-[1] absolute flex justify-between items-center gap-3 px-2">
    
        <p className="bg-yellow-900 dark:bg-white px-2 py-1 rounded-full w-fit font-semibold text-white text-xs dark:text-black">
          {product.origin}
        </p>
        <p
          className="bg-black dark:bg-white px-2 py-1 rounded-full w-fit text-white text-xs dark:text-black"
        >
          {product.taste}
        </p>
      </div>

      {/* Carrusel de Imágenes */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="rounded-lg w-full max-w-full"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem className="relative group" key={image.id}>
              <Image
                src={`${image.url}`}
                alt={product.productName || "Imagen del producto"}
                width={400}
                height={300}   
                style={{ width: 'auto', height: 'auto' }}            
                className="rounded-lg w-full h-48 object-cover"
              />
              {/* Controles al Hover */}
              <div className="bottom-4 sm:left-10 absolute flex gap-2 sm:opacity-100 md:opacity-0 group-hover:opacity-100 mx-auto px-4 w-full transition-opacity duration-200">
                <IconButton
                  onClick={() => router.push(`/product/${product.slug}`)}
                  icon={<Expand size={20} className="text-gray-700 dark:text-gray-300" />}
                  className="border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 border"
                />
                <IconButton
                  onClick={() => router.push(`/product/${product.slug}`)}
                  icon={<ShoppingCart size={20} className="text-gray-700 dark:text-gray-300" />}
                  className="border-gray-200 dark:border-gray-700 bg-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 border"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Información del Producto */}
      <div className="mt-4 text-center">
        <p className="font-medium text-gray-800 text-lg dark:text-gray-100 truncate">
          {product.productName}
        </p>
        <p className="font-semibold text-gray-600 text-sm dark:text-gray-400">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
