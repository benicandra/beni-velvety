"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";
import { ProductCard } from "@/components/shared/ProductCard/ProductCard";
import { Button } from "@/components/ui/button";

import Classwing from "@/app/assets/products/classwing.webp";
import Holocena from "@/app/assets/products/holocena.webp";
import Inamorata from "@/app/assets/products/inamorata.webp";
import Lightcool from "@/app/assets/products/lightcool.webp";

export default function AllProducts() {
  const [activeCategory, setActiveCategory] = useState("All needs");

  const categories = [
    "All needs",
    "Protect",
    "Regenerates",
    "Revitalizes",
    "Feeds",
    "Regulates",
    "Purifies",
    "Makeup Removal",
    "Exfoliate",
    "Antioxidant",
    "Soothes",
    "Smoothes skin texture",
    "Tones",
    "Anti-waste",
    "Hydrate",
    "Strengthens",
    "Regenerates after UV exposure Strengthens",
  ];

  return (
    <section className="hidden lg:flex flex-col lg:flex-row gap-16 px-4 lg:px-20 py-24 bg-gray-0">
      <div className="flex flex-col lg:w-[40%] gap-12">
        <SectionHeader
          eyebrow="All Products"
          title="Mild skincare & facial routine"
          titleClassName="font-heading font-light leading-[1.1] tracking-wide"
        />

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                activeCategory === category ? "pillActive" : "pillInactive"
              }
              size="pill"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:w-[60%] gap-8">
        <div className="grid md:grid-cols-2 gap-6">
          <ProductCard
            imageSrc={Classwing}
            title="CLASSWING"
            price={20}
            rating={5.0}
            className="border border-primary-border"
          />
          <ProductCard
            imageSrc={Holocena}
            title="HOLOCANE"
            price={23}
            rating={5.0}
            className="border border-primary-border"
          />
          <ProductCard
            imageSrc={Inamorata}
            title="INAMORATA"
            price={12}
            rating={4.5}
            className="border border-primary-border"
          />
          <ProductCard
            imageSrc={Lightcool}
            title="LIGHTCOOL"
            price={22.5}
            rating={5.0}
            className="border border-primary-border"
          />
        </div>

        <div className="flex justify-start mt-4">
          <Button
            variant="hero"
            size="hero"
            className="bg-transparent border border-primary-border hover:bg-primary-surface/50 text-primary"
            withArrow
          >
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
}
