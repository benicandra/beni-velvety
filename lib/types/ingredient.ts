import type { ComponentType, SVGProps } from "react";

export interface Ingredient {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
