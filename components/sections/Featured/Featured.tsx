import Chicori from "@/app/assets/products/chicori.webp";
import Notorious from "@/app/assets/products/notorious.webp";
import Holocena from "@/app/assets/products/holocena.webp";

import { FeaturedCard } from "./FeaturedCard";

export default function Featured() {
  return (
    <section className="flex flex-col gap-12 py-16 bg-gray-0">
      <div className="flex-col gap-4 px-4 text-center">
        <h6 className="text-2xl text-gray-40">Our featured products</h6>
        <h2 className="text-[40px] text-gray-100 tracking-wide">
          Facial and skincare, natural and certified organic
        </h2>
      </div>
      <div className="flex-col border border-primary-border">
        <FeaturedCard
          imageSrc={Chicori}
          title="CHICORI"
          price={20}
          rating={4.0}
        />
        <FeaturedCard
          imageSrc={Notorious}
          title="NOTORIOUS"
          price={23}
          rating={5.0}
          className="border border-primary-border"
        />
        <FeaturedCard
          imageSrc={Holocena}
          title="HOLOCENA"
          price={20}
          rating={5.0}
        />
      </div>
    </section>
  );
}
