import type { Ingredient } from "@/lib/types";

import Organic from "@/app/assets/icons/organic.svg";
import FitSkin from "@/app/assets/icons/fits-skin.svg";
import EasyUse from "@/app/assets/icons/easy-use.svg";

export const ingredients: Ingredient[] = [
  {
    id: "ingredient-organic",
    icon: Organic,
    title: "100% Organic",
    description:
      "We craft skincare using the most exquisite ingredients from the plant, earth and mineral realms.",
  },
  {
    id: "ingredient-fits-skin",
    icon: FitSkin,
    title: "Fits your skin",
    description:
      "It's all natural and processed based on traditional knowledge with modern technology.",
  },
  {
    id: "ingredient-easy-use",
    icon: EasyUse,
    title: "Easy to use",
    description:
      "Packed with a unique design as well as useful that can help you perform routine skin care.",
  },
];
