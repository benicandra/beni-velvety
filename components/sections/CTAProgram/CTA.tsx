import type { CTAProgram } from "@/lib/types";
import { ctaPrograms } from "@/lib/data";

import { CTAProgramCard } from "./CTAProgramCard";

export default function CTAProgram() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col lg:flex-row lg:justify-between gap-12 py-16 px-4 lg:px-20">
      {ctaPrograms.map((program, index) => (
        <CTAProgramSection
          key={program.id}
          program={program}
          isLast={index === ctaPrograms.length - 1}
        />
      ))}
    </section>
  );
}

function CTAProgramSection({
  program,
  isLast,
}: {
  program: CTAProgram;
  isLast: boolean;
}) {
  return (
    <>
      <CTAProgramCard
        Icon={program.icon}
        eyebrow={program.eyebrow}
        title={program.title}
        buttonLabel={program.buttonLabel}
      />
      {!isLast && (
        <div className="border-b lg:border-b-0 lg:border-r border-[#d9d9d9] w-[88px] lg:w-0 h-0 lg:h-[88px] mx-auto lg:mx-0 lg:self-center" />
      )}
    </>
  );
}
