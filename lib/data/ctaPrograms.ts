import type { CTAProgram } from "@/lib/types";

import LoyalProgram from "@/app/assets/CTAProgram/loyal-program.svg";
import BeautyShared from "@/app/assets/CTAProgram/beauty-shared.svg";
import GoodWeather from "@/app/assets/CTAProgram/good-weather.svg";

export const ctaPrograms: CTAProgram[] = [
  {
    id: "cta-loyalty-program",
    icon: LoyalProgram,
    eyebrow: "Loyalty Program",
    title: "Sponsor those you love!",
    buttonLabel: "Join the program",
  },
  {
    id: "cta-beauty-shared",
    icon: BeautyShared,
    eyebrow: "Organic beauty is shared,",
    title: "Sponsor those you love!",
    buttonLabel: "Refer a Friend",
  },
  {
    id: "cta-good-weather",
    icon: GoodWeather,
    eyebrow: "Treat yourself to good weather",
    title: "at Maison Absolution",
    buttonLabel: "Try Our Treatments",
  },
];
