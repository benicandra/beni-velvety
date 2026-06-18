import Image from "next/image";

import Holocena from "@/app/assets/products/holocena.webp";
import StarFull from "@/app/assets/icons/star-full.svg";
import RightArrow from "@/app/assets/icons/arrow-right.svg";

export default function Testimonial() {
  return (
    <section className="flex flex-col gap-12 py-16 px-4">
      <div className="relative aspect-345/538 w-full max-w-[345px] overflow-hidden rounded-[50%] bg-primary-surface">
        <Image
          src={Holocena}
          alt="Holocena"
          className="absolute left-1/2 top-[40%] h-[138%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h6 className="text-2xl text-gray-40">Product Testimonials</h6>
        <div className="flex flex-col gap-8">
          <div className="flex gap-3.5">
            <StarFull className="w-[35px] h-[35px] text-gray-40" />
            <StarFull className="w-[35px] h-[35px] text-gray-40" />
            <StarFull className="w-[35px] h-[35px] text-gray-40" />
            <StarFull className="w-[35px] h-[35px] text-gray-40" />
            <StarFull className="w-[35px] h-[35px] text-gray-40" />
          </div>
          <h3 className="text-[32px] text-gray-100 font-normal tracking-wide leading-snug">
            &ldquo;I&apos;ve been feeling pretty stressed with my skin lately,
            so I picked up a set of HOLOCENA skincare. Oh my goodness!. It was
            AMAZING. My skin felt so soft and moisturized&rdquo;
          </h3>
          <p className="text-xl text-gray-40 italic">- Customer Review</p>
          <div className="flex gap-6 justify-center items-center">
            <RightArrow className="text-gray-100 w-[30px] h-auto -rotate-180" />
            <div className="flex gap-2">
              <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
              <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
              <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
              <button type="button" className="w-1 h-1 rotate-45 bg-primary" />
            </div>
            <RightArrow className="text-gray-100 w-[30px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
