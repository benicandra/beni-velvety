import type React from "react";

import { Button } from "@/components/ui/button";

export interface CTAProgramCardProps {
  Icon: React.ElementType;
  eyebrow: string;
  title: string;
  buttonLabel: string;
}

export const CTAProgramCard = ({
  Icon,
  eyebrow,
  title,
  buttonLabel,
}: CTAProgramCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-6 items-center">
      <div className="p-5.5">
        <Icon className="text-gray-80 w-[52px] h-auto" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center gap-1">
          <p className="text-xl text-gray-40">{eyebrow}</p>
          <h5 className="text-2xl text-gray-100">{title}</h5>
        </div>
      </div>
      <Button
        variant="hero"
        className="w-min px-8 py-6 bg-gray-0 text-xl lg:border lg:border-gray-100"
        withArrow
      >
        {buttonLabel}
      </Button>
    </div>
  );
};
