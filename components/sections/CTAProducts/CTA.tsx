import ArrowRight from "@/app/assets/icons/arrow-right.svg";

export default function CTA() {
  return (
    <section className="flex flex-col gap-6 py-8 px-4 items-start bg-gray-40">
      <h2 className="text-[32px] text-gray-0">
        Let&apos;s see the processing of our products
      </h2>

      <ArrowRight className="text-gray-0 w-[66px] h-[40px]" />
    </section>
  );
}
