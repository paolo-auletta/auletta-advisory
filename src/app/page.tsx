import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Advisory } from "@/components/advisory";
import { Investing } from "@/components/investing";
import { AISolutions } from "@/components/ai-solutions";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Advisory />
      <Investing />
      <AISolutions />
      <CTA />
    </main>
  );
}
