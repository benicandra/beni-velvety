import Link from "next/link";

import { Button } from "@/components/ui/button";

interface NotFoundContentProps {
  variant?: "404" | "coming-soon";
}

const CONTENT = {
  "404": {
    eyebrow: "ERROR 404",
    heading: "Page not found",
    description:
      "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
  "coming-soon": {
    eyebrow: "COMING SOON",
    heading: "Soon",
    description: "This page is under construction. Please check back later.",
    cta: "Back to home",
  },
} as const;

export default function NotFoundContent({
  variant = "404",
}: NotFoundContentProps) {
  const content = CONTENT[variant];

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center gap-8 px-6 pt-20 pb-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-xs font-light uppercase tracking-[0.3em] text-gray-40">
          {content.eyebrow}
        </span>
        <h1 className="font-heading text-5xl font-light text-primary md:text-6xl">
          {content.heading}
        </h1>
        <p className="max-w-md text-base font-light text-gray-80">
          {content.description}
        </p>
      </div>
      <Link href="/">
        <Button variant="default" size="hero" withArrow>
          {content.cta}
        </Button>
      </Link>
    </section>
  );
}
