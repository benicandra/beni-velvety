import Image from "next/image";

import ServicesImage from "@/app/assets/image-services.webp";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";

export default function Services() {
  return (
    <section className="flex flex-col gap-12 py-16 px-4">
      <Image src={ServicesImage} alt="" />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h6 className="text-2xl text-gray-40">Try Our Service</h6>
          <h2 className="text-[40px] text-gray-100">
            Your skin diagnosis in 3 minutes
          </h2>
        </div>
        <Button
          variant="hero"
          className="w-min border border-gray-100 px-8 py-6 bg-gray-0"
        >
          Start my diagnosis
          <ArrowRight className="text-primary w-[30px] h-[18px]" />
        </Button>
      </div>
    </section>
  );
}
