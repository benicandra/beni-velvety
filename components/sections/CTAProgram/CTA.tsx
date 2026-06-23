import BeautyShared from "@/app/assets/CTAProgram/beauty-shared.svg";
import GoodWeather from "@/app/assets/CTAProgram/good-weather.svg";
import LoyalProgram from "@/app/assets/CTAProgram/loyal-program.svg";

import { CTAProgramCard } from "./CTAProgramCard";

export default function CTAProgram() {
  return (
    <section className="flex flex-col lg:flex-row lg:justify-between gap-12 py-16 px-4 lg:px-20">
      <CTAProgramCard
        Icon={LoyalProgram}
        eyebrow="Loyalty Program"
        title="Sponsor those you love!"
        buttonLabel="Join the program"
      />

      <div className="border-b lg:border-b-0 lg:border-r border-[#d9d9d9] w-[88px] lg:w-0 h-0 lg:h-[88px] mx-auto lg:mx-0 lg:self-center" />

      <CTAProgramCard
        Icon={BeautyShared}
        eyebrow="Organic beauty is shared,"
        title="Sponsor those you love!"
        buttonLabel="Refer a Friend"
      />

      <div className="border-b lg:border-b-0 lg:border-r border-[#d9d9d9] w-[88px] lg:w-0 h-0 lg:h-[88px] mx-auto lg:mx-0 lg:self-center" />

      <CTAProgramCard
        Icon={GoodWeather}
        eyebrow="Treat yourself to good weather"
        title="at Maison Absolution"
        buttonLabel="Try Our Treatments"
      />
    </section>
  );
}
