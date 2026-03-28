"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Extract numeric part and suffix
    const match = value.match(/^([₹]?)(\d+(?:\.\d+)?)(.*)/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const prefix = match[1] || "";
    const num = parseFloat(match[2]);
    const suffix = match[3] || "";

    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Expo out easing
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * num);
      setDisplayed(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [visible, value]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: "inline-block",
        transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
      }}
    >
      {visible ? displayed : "0"}
    </span>
  );
}
