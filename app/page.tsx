import CarouselTextBanner from "@/components/ui/carousel-text-banner";
import FeaturesProducts from "@/components/ui/feautures-products";
import BannerDiscount from "@/components/ui/banner-discount";
import ChooseCategory from "@/components/ui/choose-category";
import BannerProduct from "@/components/ui/banner-products";

export default function Home() {
  return (
    <main className="">
      <CarouselTextBanner />
      <FeaturesProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProduct />
    </main>
  );
}
