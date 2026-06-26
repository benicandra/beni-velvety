import { partners } from "@/lib/data";
import { SectionHeader } from "@/components/shared/SectionHeader/SectionHeader";

export default function About() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col py-16 px-4 lg:px-20 gap-16">
      <div className="flex flex-col lg:flex-row justify-around gap-8">
        <SectionHeader
          eyebrow="About us"
          title="Velvety facial and skincare company"
          className="gap-6.5 lg:flex-1 lg:pr-9"
        />
        <p className="text-xl text-gray-80 lg:flex-1">
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
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-y-10 items-center justify-items-start">
          {partners.map((partner) => {
            const Logo = partner.logo;
            return <Logo key={partner.id} className={partner.className} />;
          })}
        </div>
      </div>
    </section>
  );
}
