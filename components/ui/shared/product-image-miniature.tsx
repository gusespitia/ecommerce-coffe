
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductImageMiniatureProps {
  slug: string;
  url: string;
}

const ProductImageMinuature = (props: ProductImageMiniatureProps) => {
  const { slug, url } = props;
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/product/${slug}`)}
      className="cursor-pointer"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
        alt="Product"
        width={300}
        height={300}
        className="w-32 h-24 min-h-20 min-w-28 overflow-hidden rounded-md sm:w-auto sm:h-32"
      />
    </div>
  );
};

export default ProductImageMinuature;
