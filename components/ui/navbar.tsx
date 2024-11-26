"use client";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu.list";
import ItemsMenuMobile from "./items-menu-mobile";
import ToogleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useWishlist();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max.w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Gus
        <span className="font-bold ">Dev</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="sm:hidden flex">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7"></div>
      {cart.items.length === 0 ? (
        <ShoppingCart
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => router.push("/cart")}
        />
      ) : (
        <div className="flex gap-1" onClick={() => router.push("/cart")}>
          <BaggageClaim strokeWidth={1.5} className="cursor-pointer" />
          <span className="">{cart.items.length}</span>
        </div>
      )}

      <Heart
        strokeWidth={1}
        className={`cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
        onClick={() => router.push("/wishlist")}
      />
      <User
        strokeWidth={1}
        className="cursor-pointer"
        onClick={() => router.push("/login")}
      ></User>
      <ToogleTheme />
    </div>
  );
};

export default Navbar;
