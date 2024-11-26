import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductProps {
  images: Array<{ id: number; url: string }> | { id: number; url: string };
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;

  // Convierte en array si es un solo objeto
  const imageArray = Array.isArray(images) ? images : [images];

  return (
    <div className="">
      <Carousel>
        <CarouselContent>
          {imageArray.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="Image Product"
                width={500}
                height={500}
                className="rounded-lg min-h-24 min-w-[300px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
       {imageArray.length > 1 && (
        <div>
            <CarouselPrevious />
            <CarouselNext />
        </div>
       )}
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
