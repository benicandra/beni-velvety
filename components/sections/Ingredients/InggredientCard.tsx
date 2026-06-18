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
    <div className="flex flex-col gap-5">
      <Icon className="text-gray-40 w-[74px] h-[74px]" />
      <div className="flex-col gap-2">
        <h6 className="text-2xl text-gray-100">{title}</h6>
        <p className="text-xl text-gray-80">{description}</p>
      </div>
    </div>
  );
};
