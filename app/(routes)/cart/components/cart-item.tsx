import { useCart } from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import ProductTasteOrigin from "@/components/ui/shared/product-taste-origin";
import ProductImageMinuature from "@/components/ui/shared/product-image-miniature";

interface CartItemsProps {
  product: ProductType;
}

const CartItem = (props: CartItemsProps) => {
  const { product } = props;

  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border">
      <ProductImageMinuature slug={product.slug} url={product.images[0].url} />
      <div className="flex justify-between px-6">
        <div>
          <h2 className="text-lg font-bold"> {product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)} </p>
          <ProductTasteOrigin origin={product.origin} taste={product.taste} />
        </div>
        <div>
          <button
            className={cn(
              "rounded-full transition duration-300 hover:fill-black flex items-center justify-center border shadow-md p-1 hover:scale-110"
            )}
          >
            <X size={20} onClick={() => removeItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
