import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  className,
  titleClassName,
}: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <h6 className="text-2xl text-gray-40">{eyebrow}</h6>
      <h2
        className={cn(
          "text-[40px] lg:text-[56px] text-gray-100",
          titleClassName,
        )}
      >
        {title}
      </h2>
    </div>
  );
};
