import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { AboutStrip } from "@/components/home/AboutStrip";
import { SevaGrid } from "@/components/home/SevaGrid";
import { ImpactCounter } from "@/components/home/ImpactCounter";
import { EventCards } from "@/components/home/EventCards";
import { DonateCTA } from "@/components/home/DonateCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutStrip />
      <SevaGrid />
      <ImpactCounter />
      <EventCards />
      <DonateCTA />
    </main>
  );
}
