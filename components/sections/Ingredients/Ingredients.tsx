import Image from "next/image";

import IngredientsImage from "@/app/assets/inggredients-image.webp";

import Organic from "@/app/assets/icons/organic.svg";
import FitSkin from "@/app/assets/icons/fits-skin.svg";
import EasyUse from "@/app/assets/icons/easy-use.svg";

import { IngredientCard } from "./InggredientCard";

export default function Ingredients() {
  return (
    <section className="relative flex flex-col lg:flex-row lg:items-stretch">
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

      <div className="relative z-0 flex flex-col gap-8 bg-primary-surface px-4 py-14 lg:w-1/2 lg:justify-center lg:gap-12 lg:px-[4%] lg:py-24">
        <IngredientCard
          Icon={Organic}
          title="100% Organic"
          description="We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms."
        />
        <IngredientCard
          Icon={FitSkin}
          title="Fits your skin"
          description="I'ts all natural and processed based on traditional knowledge with modern technology."
        />
        <IngredientCard
          Icon={EasyUse}
          title="Easy to use"
          description="Packed with a unique design as well as usefull that can help you perform routine skin care."
        />
      </div>
    </section>
  );
}
