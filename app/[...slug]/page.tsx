import type { Metadata } from "next";

import NotFoundContent from "@/components/shared/NotFoundContent/NotFoundContent";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This page is under construction. Please check back later.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CatchAllPage() {
  return <NotFoundContent variant="coming-soon" />;
}
