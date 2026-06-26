import type { StaticImageData } from "next/image";

export interface Product {
  id: string;
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
}
