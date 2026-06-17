import Hero from "@/components/sections/Hero/Hero";
import Ingredients from "@/components/sections/Ingredients/Ingredients";
import Featured from "@/components/sections/Featured/Featured";
import About from "@/components/sections/About/About";
import CTA from "@/components/sections/CTA/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <Featured />
      <About />
      <CTA />
    </main>
  );
}
