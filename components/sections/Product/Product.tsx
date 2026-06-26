"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";
import { moreProducts } from "@/lib/data";

export default function Product() {
  const [activeCategory, setActiveCategory] = useState("All needs");
  const categories = ["All needs", "Protect", "Regenerate", "Revitalize"];

  return (
    <section className="mx-auto flex max-w-[1440px] lg:hidden flex-col gap-10 py-16 px-4 border border-primary-border overflow-hidden">
      <div className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="More Products"
          title="Gentle skincare & facial for every day"
        />
        <div className="flex gap-3 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "pillActive" : "pillInactive"}
              size="pill"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {moreProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            imageSrc={product.image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            className="border border-primary-border"
            imageClassName={index === 2 ? "-top-15" : undefined}
          />
        ))}
      </div>
      <Button
        variant="hero"
        className="w-min border border-gray-100 px-8 py-6 bg-gray-0"
        withArrow
      >
        Shop now
      </Button>
    </section>
  );
}
