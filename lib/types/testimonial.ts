import type { StaticImageData } from "next/image";

export interface Testimonial {
  id: string;
  image: StaticImageData;
  rating: number;
  quote: string;
  source: string;
}
