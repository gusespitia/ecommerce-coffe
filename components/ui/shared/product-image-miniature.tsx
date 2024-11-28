
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
        src={`${url}`}
        alt="Product"
        width={300}       
        height={300}
        style={{ width: 'auto', height: 'auto' }}
        className="w-32 h-24 min-h-20 min-w-28 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover"
      />
    </div>
  );
};

export default ProductImageMinuature;
