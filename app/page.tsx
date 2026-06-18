import Hero from "@/components/sections/Hero/Hero";
import Ingredients from "@/components/sections/Ingredients/Ingredients";
import Featured from "@/components/sections/Featured/Featured";
import About from "@/components/sections/About/About";
import CTAProducts from "@/components/sections/CTAProducts/CTA";
import Product from "@/components/sections/Product/Product";
import Services from "@/components/sections/Services/Services";
import Testimonial from "@/components/sections/Testimonial/Testimonial";
import CTAProgram from "@/components/sections/CTAProgram/CTA";
import CTASubscribe from "@/components/sections/CTASubscribe/CTASubscribe";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ingredients />
      <Featured />
      <About />
      <CTAProducts />
      <Product />
      <Services />
      <Testimonial />
      <CTAProgram />
      <CTASubscribe />
    </main>
  );
}
