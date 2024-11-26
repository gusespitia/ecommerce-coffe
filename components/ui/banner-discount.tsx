import Link from "next/link";
import { buttonVariants } from "./button";

const BannerDiscount = () => {
  return (
    <div className="sm:p-20 text-center p-5">
      <h2 className="uppercase text-2xl font-black text-primary">
        Consigue hasta un 20% de descuento
      </h2>
      <h3 className="mt-3 font-semibold">
        -20% al gastar 100€ o -25% al gastar 150€
      </h3>
      <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
        <Link href={"/"} className={buttonVariants()}>
          Comprar
        </Link>
        <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
          Mas información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
