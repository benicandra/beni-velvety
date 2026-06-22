import Chicori from "@/app/assets/products/chicori.webp";
import Notorious from "@/app/assets/products/notorious.webp";
import Holocena from "@/app/assets/products/holocena.webp";

import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

export default function Featured() {
  return (
    <section className="flex flex-col gap-12 py-16 bg-gray-0">
      <SectionHeader
        eyebrow="Our featured products"
        title="Facial and skincare, natural and certified organic"
        className="px-4 text-center"
        titleClassName="tracking-wide"
      />
      <div className="flex flex-col lg:flex-row border border-primary-border">
        <ProductCard
          imageSrc={Chicori}
          title="CHICORI"
          price={20}
          rating={4.0}
        />
        <ProductCard
          imageSrc={Notorious}
          title="NOTORIOUS"
          price={23}
          rating={5.0}
          className="border border-primary-border"
        />
        <ProductCard
          imageSrc={Holocena}
          title="HOLOCENA"
          price={20}
          rating={5.0}
        />
      </div>
    </section>
  );
}
