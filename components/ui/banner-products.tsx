import Link from "next/link";
import { buttonVariants } from "./button";

const BannerProduct = () => {
  return (
    <>
      <div className="mt-4 text-center">
        <p>Súmergete en una experiencia única</p>
        <h4 className="font-extrabold text-5xl mt-2 f">CaféExquisito</h4>
        <p className="my-2 text-lg">Despierta el gusto de tu paladar</p>
        <Link href={"/"} className={buttonVariants()}>
          Comprar
        </Link>
      </div>
      <div className="bg-cover h-[350px] lg:h-[600px] bg-[url('/slider-image.jpg')] bg-center mt-5"></div>
    </>
  );
};

export default BannerProduct;
