"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

import Classwing from "@/app/assets/products/classwing.webp";
import Holocena from "@/app/assets/products/holocena.webp";
import Inamorata from "@/app/assets/products/inamorata.webp";
import Lightcool from "@/app/assets/products/lightcool.webp";

export default function Product() {
  const [activeCategory, setActiveCategory] = useState("All needs");
  const categories = ["All needs", "Protect", "Regenerate", "Revitalize"];

  return (
    <section className="flex lg:hidden flex-col gap-10 py-16 px-4 border border-primary-border overflow-hidden">
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
        withArrow
      >
        Shop now
      </Button>
    </section>
  );
}
