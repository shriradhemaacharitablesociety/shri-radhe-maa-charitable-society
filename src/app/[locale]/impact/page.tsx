"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/routing";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { impactTiers } from "@/data/impact";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function ImpactCalculatorPage() {
  const [amount, setAmount] = useState(5000);

  const matchedTiers = useMemo(() => {
    return impactTiers.filter((tier) => amount >= tier.amount);
  }, [amount]);

  const bestMatch = useMemo(() => {
    const eligible = impactTiers.filter((tier) => amount >= tier.amount);
    return eligible.length > 0 ? eligible[eligible.length - 1] : null;
  }, [amount]);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-6 md:pt-10 pb-8 md:pb-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-devanagari text-sm text-crimson-500 font-medium" lang="hi">आपका प्रभाव</span>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-5xl text-warm-900 tracking-tight mt-1">Your Impact</h1>
            <div className="w-12 h-1 bg-crimson-500 rounded-full mx-auto mt-4" />
            <p className="text-sm md:text-[15px] text-warm-600 mt-3 max-w-xl mx-auto">
              See what your donation can achieve. Move the slider to explore the real-world impact of your generosity.
            </p>
          </ScrollReveal>

          {/* Slider Card */}
          <ScrollReveal delay={150}>
            <div className="max-w-2xl mx-auto">
              <Card variant="white" accent="crimson" className="p-5 sm:p-8 md:p-10">
                <div className="text-center mb-8">
                  <span className="font-stat text-3xl sm:text-5xl md:text-6xl font-black text-crimson-500 tracking-tight">
                    {formatINR(amount)}
                  </span>
                  <p className="font-sans text-sm text-warm-600 mt-2">
                    Your chosen donation amount
                  </p>
                </div>

                <input
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-warm-200 accent-crimson-500"
                  aria-label="Donation amount slider"
                />

                <div className="flex justify-between mt-2 font-sans text-xs text-warm-500">
                  <span>{formatINR(500)}</span>
                  <span>{formatINR(50000)}</span>
                </div>

                {bestMatch && (
                  <div className="mt-8 text-center p-6 rounded-2xl bg-crimson-50 border border-crimson-100">
                    <span className="text-4xl mb-3 block" aria-hidden="true">
                      {bestMatch.icon}
                    </span>
                    <h3 className="font-serif text-xl text-warm-900 mb-1">
                      {bestMatch.label}
                    </h3>
                    <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
                      {bestMatch.labelHi}
                    </p>
                    <p className="font-sans text-sm text-warm-600 leading-relaxed">
                      {bestMatch.description}
                    </p>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <Link href="/get-involved">
                    <Button size="lg">
                      Donate {formatINR(amount)}
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Impact Tiers on White */}
      <section className="bg-white pt-6 md:pt-8 pb-12 md:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-crimson-500 mb-3 text-center" lang="hi">हर रुपये का महत्व</p>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-warm-900 text-center mb-4">Every Rupee Counts</h2>
            <p className="font-sans text-warm-600 text-center max-w-xl mx-auto leading-relaxed mb-14">Here is what each level of generosity can accomplish through our programmes.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {impactTiers.map((tier, i) => {
              const isActive = amount >= tier.amount;
              const isHighlighted = bestMatch?.amount === tier.amount;

              return (
                <ScrollReveal key={tier.amount} delay={i * 100}>
                  <Card
                    variant={isHighlighted ? "white" : "cream"}
                    accent={isActive ? "crimson" : "none"}
                    className={`h-full transition-all duration-300 ${
                      isHighlighted
                        ? "ring-2 ring-crimson-500 shadow-lg scale-[1.02]"
                        : isActive
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={isActive ? "crimson" : "gold"}>
                        {formatINR(tier.amount)}
                      </Badge>
                      {isHighlighted && (
                        <span className="font-sans text-[10px] uppercase tracking-widest text-crimson-500 font-bold">
                          Your Impact
                        </span>
                      )}
                    </div>
                    <span className="text-3xl mb-3 block" aria-hidden="true">
                      {tier.icon}
                    </span>
                    <h3 className="font-serif text-lg text-warm-900 leading-tight">
                      {tier.label}
                    </h3>
                    <p className="font-devanagari text-sm text-warm-500 mt-1" lang="hi">
                      {tier.labelHi}
                    </p>
                    <p className="font-sans text-sm text-warm-600 mt-3 leading-relaxed">
                      {tier.description}
                    </p>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-devanagari text-sm text-crimson-500 mb-2" lang="hi">
              सेवा में सहयोग करें
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-900 mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="font-sans text-warm-600 leading-relaxed mb-8">
              Every donation, no matter the size, transforms lives. Your contribution is eligible
              for tax deduction under Section 80G of the Income Tax Act.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved">
                <Button size="lg" className="bg-crimson-500 text-white hover:bg-crimson-600">Donate Now</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" className="border-warm-100 text-warm-900 hover:bg-warm-50">Contact Us</Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
