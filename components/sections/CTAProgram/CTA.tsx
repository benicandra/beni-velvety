import BeautyShared from "@/app/assets/CTAProgram/beauty-shared.svg";
import GoodWeather from "@/app/assets/CTAProgram/good-weather.svg";
import LoyalProgram from "@/app/assets/CTAProgram/loyal-program.svg";

import { CTAProgramCard } from "./CTAProgramCard";

export default function CTAProgram() {
  return (
    <section className="flex flex-col gap-12 py-16 px-4">
      <CTAProgramCard
        Icon={LoyalProgram}
        eyebrow="Loyalty Program"
        title="Sponsor those you love!"
        buttonLabel="Join the program"
      />

      <div className="border-b border-[#d9d9d9] w-[88px] mx-auto" />

      <CTAProgramCard
        Icon={BeautyShared}
        eyebrow="Organic beauty is shared,"
        title="Sponsor those you love!"
        buttonLabel="Refer a Friend"
      />

      <div className="border-b border-[#d9d9d9] w-[88px] mx-auto" />

      <CTAProgramCard
        Icon={GoodWeather}
        eyebrow="Treat yourself to good weather"
        title="at Maison Absolution"
        buttonLabel="Try Our Treatments"
      />
    </section>
  );
}
