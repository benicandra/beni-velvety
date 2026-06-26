import Image from "next/image";

import heroBackground from "@/app/assets/hero-background.webp";
import heroImage from "@/app/assets/hero-image.webp";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden lg:h-[88dvh] lg:min-h-[736px] lg:max-h-[860px] lg:flex-row lg:overflow-visible">
      <div className="absolute inset-0 -z-20 lg:left-1/2 lg:w-1/2 lg:overflow-hidden">
        <Image
          src={heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-y-0 left-0 -z-10 hidden w-1/2 bg-gray-40 lg:block" />

      <div className="relative z-10 mx-auto flex h-full min-h-dvh w-full max-w-[1440px] flex-col pt-24 pb-8 lg:min-h-0 lg:flex-row lg:pt-0 lg:pb-0">
        <div className="flex flex-col gap-8 items-center text-center px-4 lg:hidden">
          <h1 className="text-5xl font-heading font-light text-gray-0">
            Let nature take care of your body and soul
          </h1>

          <Button variant="hero" size="hero" withArrow>
            Shop now
          </Button>
        </div>

        <div className="relative z-10 -mt-10 mt-auto flex w-full flex-col-reverse items-center justify-center lg:hidden">
          <div className="z-20 mt-8 flex items-center gap-3">
            <div className="flex gap-2.5 my-2">
              <button
                type="button"
                className="w-1.5 h-1.5 rotate-45 bg-gray-0"
              />
              <button
                type="button"
                className="w-1 h-1 rotate-45 border border-gray-0"
              />
              <button
                type="button"
                className="w-1 h-1 rotate-45 border border-gray-0"
              />
              <button
                type="button"
                className="w-1 h-1 rotate-45 border border-gray-0"
              />
            </div>
          </div>

          <div className="flex w-full shrink-0 justify-center">
            <Image
              src={heroImage}
              alt="Velvety Glasswing Serum"
              className="h-[60vh] w-auto max-w-none -rotate-8"
              priority
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <div className="pointer-events-auto absolute left-[4.6rem] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3">
            <button className="flex h-8 w-8 items-center justify-center text-gray-0 transition-opacity hover:opacity-70">
              <ArrowRight className="h-[18px] w-[31px] fill-current" />
            </button>
            <div className="my-2 flex flex-col gap-2.5">
              <button
                type="button"
                className="h-1.5 w-1.5 rotate-45 bg-gray-0"
              />
              <button
                type="button"
                className="h-1 w-1 rotate-45 border border-gray-0"
              />
              <button
                type="button"
                className="h-1 w-1 rotate-45 border border-gray-0"
              />
              <button
                type="button"
                className="h-1 w-1 rotate-45 border border-gray-0"
              />
            </div>
            <button className="flex h-8 w-8 items-center justify-center text-gray-0 transition-opacity hover:opacity-70">
              <ArrowRight className="h-[18px] w-[31px] rotate-180 fill-current" />
            </button>
          </div>

          <div className="pointer-events-auto absolute left-[22%] top-[2%] z-20 -translate-x-1/2">
            <Image
              src={heroImage}
              alt="Velvety Glasswing Serum"
              className="h-[105dvh] max-h-[900px] min-h-[780px] w-auto max-w-none -rotate-[7deg]"
              priority
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          <div className="pointer-events-auto absolute left-[38%] top-[18%] flex w-[min(58%,860px)] flex-col gap-16 text-left">
            <h1 className="font-heading text-[clamp(4.75rem,7vw,6.625rem)] font-light leading-[1.12] tracking-wide text-gray-0 drop-shadow-sm">
              Let nature take
              <br />
              care of your body
              <br />
              and soul
            </h1>
            <div className="flex justify-start">
              <Button
                variant="hero"
                size="hero"
                className="h-[72px] w-[356px] gap-7 px-0 py-0 text-[22px] hover:opacity-90"
                withArrow
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
