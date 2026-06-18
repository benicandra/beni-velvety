import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";

import Classwing from "@/app/assets/products/classwing.webp";
import Holocena from "@/app/assets/products/holocena.webp";
import Inamorata from "@/app/assets/products/inamorata.webp";
import Lightcool from "@/app/assets/products/lightcool.webp";

export default function Product() {
  return (
    <section className="flex flex-col gap-10 py-16 px-4 border border-primary-border overflow-hidden">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h6 className="text-2xl text-gray-40">More Products</h6>
          <h2 className="text-[40px] text-gray-100">
            Gentle skincare & facial for every day
          </h2>
        </div>
        <div className="flex gap-3">
          <Button variant="pillActive" size="pill">
            All needs
          </Button>
          <Button variant="pillInactive" size="pill">
            Protect
          </Button>
          <Button variant="pillInactive" size="pill">
            Regenerate
          </Button>
          <Button variant="pillInactive" size="pill">
            Regenerate
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <ProductCard
          imageSrc={Classwing}
          title="CLASSWING  "
          price={20}
          rating={5.0}
          className="border border-primary-border"
        />
        <ProductCard
          imageSrc={Holocena}
          title="HOLOCANE"
          price={20}
          rating={5.0}
          className="border border-primary-border"
        />
        <ProductCard
          imageSrc={Inamorata}
          title="INAMORATA"
          price={12}
          rating={4.5}
          className="border border-primary-border"
          imageClassName="-top-15"
        />
        <ProductCard
          imageSrc={Lightcool}
          title="LIGHTCOOL"
          price={22.5}
          rating={5.0}
          className="border border-primary-border"
        />
      </div>
      <Button
        variant="hero"
        className="w-min border border-gray-100 px-8 py-6 bg-gray-0"
      >
        Shop now
        <ArrowRight className="text-primary w-[30px] h-[18px]" />
      </Button>
    </section>
  );
}
