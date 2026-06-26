import Image from "next/image";

import StarFull from "@/app/assets/icons/star-full.svg";
import RightArrow from "@/app/assets/icons/arrow-right.svg";
import { testimonials } from "@/lib/data";

export default function Testimonial() {
  const testimonial = testimonials[0];

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col lg:flex-row gap-12 py-16 px-4 lg:px-20">
      <div className="relative aspect-345/538 w-full max-w-[345px] overflow-hidden rounded-[50%] bg-primary-surface">
        <Image
          src={testimonial.image}
          alt="Holocena"
          className="absolute left-1/2 top-[50%] h-[90%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col gap-8 lg:justify-between lg:py-12">
        <h6 className="text-2xl text-gray-40">Product Testimonials</h6>
        <div className="flex flex-col gap-8">
          <div className="flex gap-3.5">
            {Array.from({ length: testimonial.rating }).map((_, index) => (
              <StarFull
                key={index}
                className="w-[35px] h-[35px] text-gray-40"
              />
            ))}
          </div>
          <h3 className="text-[32px] lg:text-[40px] text-gray-100 font-normal tracking-wide leading-snug">
            &ldquo;{testimonial.quote}&rdquo;
          </h3>
          <p className="text-xl text-gray-40 italic">- {testimonial.source}</p>
        </div>
      </div>
      <div className="flex lg:flex-col gap-6 justify-center items-center">
        <RightArrow className="text-gray-100 w-[30px] h-auto -rotate-180 lg:rotate-0" />
        <div className="flex lg:flex-col gap-2">
          <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
          <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
          <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
          <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
        </div>
        <RightArrow className="text-gray-100 w-[30px] h-auto lg:-rotate-180" />
      </div>
    </section>
  );
}
