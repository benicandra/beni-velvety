import Image from "next/image";

import heroBackground from "@/app/assets/hero-background.webp";
import heroImage from "@/app/assets/hero-image.webp";

import { Button } from "@/components/ui/button";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <Image
        src={heroBackground}
        alt=""
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 flex flex-col pt-24 pb-8 px-4">
        <div className="flex flex-col gap-8 items-center text-center">
          <h1 className="text-5xl text-gray-0">
            Let nature take care of your body and soul
          </h1>

          <Button variant="hero" size="hero">
            Shop now
            <ArrowRight className="text-primary w-[30px] h-[18px]" />
          </Button>
        </div>
        <div className="flex items-center gap-0 flex-col-reverse -mt-10">
          <div className="flex gap-2">
            <button
              type="button"
              className="w-1 h-1 rotate-45 border bg-white"
            />
            <button
              type="button"
              className="w-1 h-1 rotate-45 border bg-white"
            />
            <button
              type="button"
              className="w-1 h-1 rotate-45 border bg-white"
            />
            <button
              type="button"
              className="w-1 h-1 rotate-45 border bg-white"
            />
          </div>
          <div className="flex justify-center w-full shrink-0">
            <Image
              src={heroImage}
              alt=""
              className="h-[60vh] w-auto max-w-none -rotate-8"
              preload
            />
          </div>
        </div>
      </div>
    </section>
  );
}
