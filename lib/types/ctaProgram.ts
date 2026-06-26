import type { ComponentType, SVGProps } from "react";

export interface CTAProgram {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  eyebrow: string;
  title: string;
  buttonLabel: string;
}
