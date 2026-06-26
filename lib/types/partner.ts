import type { ComponentType, SVGProps } from "react";

export interface Partner {
  id: string;
  logo: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}
