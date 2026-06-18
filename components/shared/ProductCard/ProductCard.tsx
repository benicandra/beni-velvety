import Image, { StaticImageData } from "next/image";
import StarFull from "@/app/assets/icons/star-full.svg";
import Star from "@/app/assets/icons/star.svg";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  imageSrc: StaticImageData;
  title: string;
  price: number | string;
  rating: number;
  className?: string;
  imageClassName?: string;
}

export const ProductCard = ({
  imageSrc,
  title,
  price,
  rating,
  className,
  imageClassName,
}: ProductCardProps) => {
  return (
    <div className={cn("flex flex-col p-5 gap-6", className)}>
      <div className="bg-primary-surface">
        <Image
          className={cn(
            "relative w-[279.88px] h-[314px] left-[27.56px] object-cover",
            imageClassName
          )}
          src={imageSrc}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2.5">
          <h6 className="text-2xl text-primary">{title}</h6>
          <p className="text-[22px] text-primary font-bold">${price}</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) =>
              index < Math.floor(rating) ? (
                <StarFull
                  key={index}
                  className="w-[18.4px] h-[17.5px] text-gray-80"
                />
              ) : (
                <Star
                  key={index}
                  className="w-[18.4px] h-[17.5px] text-gray-80"
                />
              ),
            )}
          </div>
          <p>{rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};
