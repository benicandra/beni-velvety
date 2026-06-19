import Image from "next/image";

import ServicesImage from "@/app/assets/image-services.webp";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

export default function Services() {
  return (
    <section className="flex flex-col gap-12 py-16 px-4">
      <Image src={ServicesImage} alt="" />
      <div className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="Try Our Service"
          title="Your skin diagnosis in 3 minutes"
        />
        <Button
          variant="hero"
          className="w-min border border-gray-100 px-8 py-6 bg-gray-0"
          withArrow
        >
          Start my diagnosis
        </Button>
      </div>
    </section>
  );
}
