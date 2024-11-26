"use client";
import { useWishlist } from "@/hooks/use-wishlist";
import LovedItemProduct from "./components/loved-item-product";

export default function Page() {
  const { lovedItems } = useWishlist();
  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-32 sm:px-24">
      <h1 className="mb-5 text-3xl font-bold sm:text-2xl">Your Wishlist</h1>
      <div className="grid sm:grid-cols-2">
        <div>
          {lovedItems.length === 0 && (
            <p>No hay productos en la lista de deseos</p>
          )}
          <ul className="">
            {lovedItems.map((item) => (
             <LovedItemProduct key={item.id} product={item} />
           
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
