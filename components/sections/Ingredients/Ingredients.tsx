import Image from "next/image";

import IngredientsImage from "@/app/assets/inggredients-image.webp";
import { ingredients } from "@/lib/data";

import { IngredientCard } from "./InggredientCard";

export default function Ingredients() {
  return (
    <section className="relative flex flex-col lg:flex-row lg:items-stretch">
      <div className="absolute inset-y-0 right-0 z-0 hidden w-1/2 bg-primary-surface lg:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row lg:items-stretch">
        <div className="flex flex-col lg:w-1/2 lg:pl-[5%] lg:pr-8 lg:py-24">
          <div className="flex gap-2 pt-16 pb-12 px-4 lg:pt-0 lg:px-0 lg:pb-0">
            <h2 className="text-[40px] text-gray-100 font-heading lg:text-[56px] lg:leading-[1.1] lg:font-light tracking-wide">
              Inspired by traditional
              <br className="hidden lg:block" /> knowledge and nature
            </h2>
          </div>

          <div className="flex -mt-30 lg:hidden">
            <Image src={IngredientsImage} alt="Ingredients" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <div className="pointer-events-auto absolute bottom-[-13%] left-[2%] z-20 w-[48%]">
            <Image
              src={IngredientsImage}
              alt="Ingredients"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-0 flex flex-col gap-8 px-4 py-14 lg:w-1/2 lg:justify-center lg:gap-12 lg:px-[4%] lg:py-24">
          {ingredients.map((ingredient) => (
            <IngredientCard
              key={ingredient.id}
              Icon={ingredient.icon}
              title={ingredient.title}
              description={ingredient.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
