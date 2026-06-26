import type { Product } from "@/lib/types";

import Chicori from "@/app/assets/products/chicori.webp";
import Notorious from "@/app/assets/products/notorious.webp";
import Holocena from "@/app/assets/products/holocena.webp";
import Classwing from "@/app/assets/products/classwing.webp";
import Inamorata from "@/app/assets/products/inamorata.webp";
import Lightcool from "@/app/assets/products/lightcool.webp";

export const featuredProducts: Product[] = [
  {
    id: "product-chicori",
    image: Chicori,
    title: "CHICORI",
    price: 20,
    rating: 4.0,
  },
  {
    id: "product-notorious",
    image: Notorious,
    title: "NOTORIOUS",
    price: 23,
    rating: 5.0,
  },
  {
    id: "product-holocena",
    image: Holocena,
    title: "HOLOCENA",
    price: 20,
    rating: 5.0,
  },
];

export const moreProducts: Product[] = [
  {
    id: "product-classwing",
    image: Classwing,
    title: "CLASSWING",
    price: 20,
    rating: 5.0,
  },
  {
    id: "product-holocena",
    image: Holocena,
    title: "HOLOCENA",
    price: 20,
    rating: 5.0,
  },
  {
    id: "product-inamorata",
    image: Inamorata,
    title: "INAMORATA",
    price: 12,
    rating: 4.5,
  },
  {
    id: "product-lightcool",
    image: Lightcool,
    title: "LIGHTCOOL",
    price: 22.5,
    rating: 5.0,
  },
];
