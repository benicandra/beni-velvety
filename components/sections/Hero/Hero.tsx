import Image from "next/image";
import Header from "@/components/sections/Header/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/app/assets/hero-background.webp";
import heroImage from "@/app/assets/hero-image.webp";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex">
      <Header />

      <div className="w-1/2 h-full bg-[#8B9D8B]" />

      <div className="w-1/2 h-full relative">
        <Image
          src={heroBackground}
          alt="Leaves background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 md:px-6 relative h-full flex items-center pointer-events-none">
          <div className="absolute left-[35%] md:left-[37%] right-0 z-10 pointer-events-auto">
            <h1 className="text-5xl md:text-7xl lg:text-[108px] leading-[1.05] text-gray-0 font-heading tracking-tight">
              Let nature take
              <br />
              care of your body
              <br />
              and soul
            </h1>

            <div className="mt-12 items-start">
              <Button variant="hero" size="hero">
                Shop now
                <ArrowRight
                  className="w-5 h-5 group-hover/button:translate-x-1 transition-transform"
                  strokeWidth={1.5}
                />
              </Button>
            </div>
          </div>

          <div className="absolute right-40 bottom-[-15%] md:bottom-[-20%] z-20 pointer-events-none">
            <Image
              src={heroImage}
              alt="Velvety Serum"
              className="h-[60vh] md:h-[130vh] w-auto max-w-none -rotate-8 origin-bottom object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5 z-30 pointer-events-auto">
            <button
              className="text-gray-0 hover:opacity-70 transition-opacity"
              aria-label="Next Slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <div className="flex flex-col gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-0/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-0" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-0/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-0/40" />
            </div>
            <button
              className="text-gray-0 hover:opacity-70 transition-opacity"
              aria-label="Previous Slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
