import Image from "next/image";
import { MoveRight, MoveLeft } from "lucide-react";

import heroBackground from "@/app/assets/hero-background.webp";
import heroImage from "@/app/assets/hero-image.webp";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden flex flex-col lg:flex-row">
      {/* Background Image: Full on mobile, Right 50% on desktop */}
      <div className="absolute inset-0 lg:left-[45%] lg:w-[55%] -z-20">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Solid Background: Hidden on mobile, Left 45% on desktop */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-gray-40 -z-10" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full pt-24 pb-8 lg:pt-0 lg:pb-0 min-h-dvh">
        
        {/* Mobile Typography & Button (Hidden on Desktop) */}
        <div className="flex flex-col gap-8 items-center text-center px-4 lg:hidden">
          <h1 className="text-5xl font-heading font-light text-gray-0">
            Let nature take care of your body and soul
          </h1>

          <Button variant="hero" size="hero" withArrow>
            Shop now
          </Button>
        </div>

        {/* Product Image & Slider Navigation */}
        <div className="flex items-center justify-center lg:justify-start flex-col-reverse lg:flex-row w-full lg:w-[45%] mt-auto lg:mt-0 lg:pl-12 relative z-10 -mt-10 lg:-mt-0">
          
          {/* Slider Navigation (Dots & Arrows) */}
          <div className="flex lg:flex-col items-center gap-3 mt-8 lg:mt-0 lg:absolute lg:left-12 lg:top-1/2 lg:-translate-y-1/2 z-20">
            <button className="hidden lg:flex w-8 h-8 items-center justify-center text-gray-0 hover:opacity-70 transition-opacity">
              <MoveRight strokeWidth={1} className="w-6 h-6" />
            </button>
            <div className="flex lg:flex-col gap-2.5 my-2">
              <button type="button" className="w-1.5 h-1.5 rotate-45 bg-gray-0" />
              <button type="button" className="w-1 h-1 rotate-45 border border-gray-0" />
              <button type="button" className="w-1 h-1 rotate-45 border border-gray-0" />
              <button type="button" className="w-1 h-1 rotate-45 border border-gray-0" />
            </div>
            <button className="hidden lg:flex w-8 h-8 items-center justify-center text-gray-0 hover:opacity-70 transition-opacity">
              <MoveLeft strokeWidth={1} className="w-6 h-6" />
            </button>
          </div>

          {/* Bottle Image */}
          <div className="flex justify-center w-full lg:w-auto shrink-0 lg:pl-20">
            <Image
              src={heroImage}
              alt="Velvety Glasswing Serum"
              className="h-[60vh] lg:h-[80vh] w-auto max-w-none -rotate-8 lg:-rotate-6"
              priority
            />
          </div>
        </div>

        {/* Desktop Huge Typography & Button */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-20">
          <div className="flex flex-col gap-12 pointer-events-auto max-w-[1000px] w-full px-8 text-center lg:text-left mt-20">
            <h1 className="text-[80px] xl:text-[100px] leading-[1.05] font-heading font-light text-gray-0 text-center tracking-wide drop-shadow-sm">
              Let nature take<br/>care of your body<br/>and soul
            </h1>
            <div className="flex justify-center">
              <Button variant="hero" size="hero" className="px-10 py-6 text-lg hover:opacity-90" withArrow>
                Shop now
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
