import Image from "next/image";

import IngredientsImage from "@/app/assets/inggredients-image.webp";

import Organic from "@/app/assets/icons/organic.svg";
import FitSkin from "@/app/assets/icons/fits-skin.svg";
import EasyUse from "@/app/assets/icons/easy-use.svg";

import { IngredientCard } from "./InggredientCard";

export default function Ingredients() {
  return (
    <section>
      <div>
        <div className="flex gap-2 pt-16 pb-12 px-4">
          <h2 className="text-[40px] text-gray-100">
            Inspired by traditional knowledge and nature
          </h2>
        </div>
        <div className="flex -mt-30">
          <Image src={IngredientsImage} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-8 py-14 px-4 bg-primary-surface">
        <IngredientCard
          Icon={Organic}
          title="100% Organic"
          description="We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms."
        />
        <IngredientCard
          Icon={FitSkin}
          title="Fits your skin"
          description="Its all natural and processed based on traditional knowledge with modern technology."
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
