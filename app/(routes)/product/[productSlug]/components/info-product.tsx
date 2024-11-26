import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";
import { useWishlist } from "@/hooks/use-wishlist";
import ProductTasteOrigin from "@/components/ui/shared/product-taste-origin";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLovedItem } = useWishlist();

  return (
    <div className="">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <ProductTasteOrigin origin={product.origin} taste={product.taste} />
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{formatPrice(product.price)} </p>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => addItem(product)}>
          Comprar
        </Button>
        <Heart
          width={30}
          height={30}
          strokeWidth={1}
          onClick={() => addLovedItem(product)}
          className="cursor-pointer transition duration-300 hover:fill-black"
        />
      </div>
    </div>
  );
};

export default InfoProduct;
