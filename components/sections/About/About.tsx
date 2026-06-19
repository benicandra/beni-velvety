import Forbes from "@/app/assets/partners/forbes.svg";
import Thought from "@/app/assets/partners/thought.svg";
import Vogue from "@/app/assets/partners/vogue.svg";
import Women from "@/app/assets/partners/women.svg";
import Wwd from "@/app/assets/partners/wwd.svg";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

export default function About() {
  return (
    <section className="flex flex-col py-16 px-4 gap-16">
      <div className="flex flex-col gap-8">
        <SectionHeader
          eyebrow="About us"
          title="Velvety facial and skincare company"
          className="gap-6.5"
        />
        <p className="text-xl text-gray-80">
          Velvety is an indigenous company that specializes in the manufacture
          and development of facial and skincare products using the medicinal
          properties of the traditional First Nations pharmacopoeia, with a
          concern for sustainable development. <br />
          <br /> The products offered, whose benefits have been scientifically
          confirmed, are 100% natural and allow you to take care of your body
          and mind: calming teas, energizing infusions, anti-inflammatory
          essential oils, anti-age soaps and creams, etc.
        </p>
      </div>
      <div className="border border-primary-border" />
      <div className="flex flex-col gap-10">
        <h6 className="text-2xl text-gray-40">As seen in</h6>
        <div className="grid grid-cols-2 gap-y-10 items-center justify-items-start">
          <Vogue className="text-primary-border w-[136px] h-auto" />
          <Forbes className="text-primary-border w-[150px] h-auto" />
          <Thought className="text-primary-border w-[141px] h-auto" />
          <Women className="text-primary-border w-[170px] h-auto" />
          <Wwd className="text-primary-border w-[146px] h-auto" />
        </div>
      </div>
    </section>
  );
}
