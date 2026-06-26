import { featuredProducts } from "@/lib/data";
import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

export default function Featured() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-12 py-16 bg-gray-0 px-4 lg:px-0">
      <SectionHeader
        eyebrow="Our featured products"
        title="Facial and skincare, natural and certified organic"
        className="px-4 lg:px-70 text-center"
        titleClassName="tracking-wide"
      />
      <div className="flex flex-col lg:flex-row border border-primary-border">
        {featuredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            className={index === 1 ? "border border-primary-border" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
