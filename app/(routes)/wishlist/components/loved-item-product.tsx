import { ProductType } from "@/types/product";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { useRouter } from "next/navigation";
import ProductImageMinuature from "@/components/ui/shared/product-image-miniature";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductTasteOrigin from "@/components/ui/shared/product-taste-origin";

interface LovedItemProductProps {
  product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  const router = useRouter();

  const { removeItem } = useWishlist();
  const { addItem } = useCart();
  const addTocheckOut = () => {
    addItem(product);
    removeItem(product.id);
  };
  return (
    <li className="flex p-6 border-b">
      <div
        className="w-full"
        onClick={() => router.push(`/product/${product.slug}`)}
      >
        <ProductImageMinuature
          slug={product.slug}
          url={product.images[0].url}
        />
      </div>
      <div className="flex jbustify-between px-6 flex-1">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)} </p>
          <ProductTasteOrigin origin={product.origin} taste={product.taste} />
          <Button
            onClick={() => addTocheckOut(product)}
            className="mt-5 rounded-full"
          >
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full shadow-md p-1 bg-white hover:scale-100 transition flex items-center justify-center"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemProduct;
