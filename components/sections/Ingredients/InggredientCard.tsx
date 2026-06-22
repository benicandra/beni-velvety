import React from "react";

export interface IngredientsCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

export const IngredientCard = ({
  Icon,
  title,
  description,
}: IngredientsCardProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-6 lg:items-start">
      <div className="shrink-0">
        <Icon className="text-gray-40 w-[74px] h-[74px]" />
      </div>
      <div className="flex flex-col gap-2">
        <h6 className="text-2xl text-gray-100">{title}</h6>
        <p className="text-xl text-gray-80">{description}</p>
      </div>
    </div>
  );
};
