import type { Partner } from "@/lib/types";

import Vogue from "@/app/assets/partners/vogue.svg";
import Forbes from "@/app/assets/partners/forbes.svg";
import Thought from "@/app/assets/partners/thought.svg";
import Women from "@/app/assets/partners/women.svg";
import Wwd from "@/app/assets/partners/wwd.svg";

export const partners: Partner[] = [
  {
    id: "partner-vogue",
    logo: Vogue,
    className: "text-primary-border w-[136px] lg:w-[217px] h-auto",
  },
  {
    id: "partner-forbes",
    logo: Forbes,
    className: "text-primary-border w-[150px] lg:w-[235px] h-auto",
  },
  {
    id: "partner-thought",
    logo: Thought,
    className: "text-primary-border w-[141px] lg:w-[179px] h-auto",
  },
  {
    id: "partner-women",
    logo: Women,
    className: "text-primary-border w-[170px] lg:w-[272px] h-auto",
  },
  {
    id: "partner-wwd",
    logo: Wwd,
    className: "text-primary-border w-[146px] lg:w-[192px] h-auto",
  },
];
