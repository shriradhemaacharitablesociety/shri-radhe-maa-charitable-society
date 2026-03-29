import Image from "next/image";
import Link from "next/link";

export function SocietyBanner() {
  return (
    <div className="pt-16 md:pt-24 pb-1 md:pb-6 text-center">
      {/* Logo — hidden on mobile, shown on desktop */}
      <Link
        href="/"
        className="hidden md:inline-block hover:scale-105 transition-transform duration-300 mb-4"
      >
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={120}
          height={120}
          className="drop-shadow-lg mx-auto"
        />
      </Link>

      {/* Mobile: compact crimson sub-header */}
      <h1
        className="font-devanagari font-bold text-crimson-600 md:bg-gradient-to-r md:from-crimson-600 md:via-crimson-500 md:to-saffron-500 md:bg-clip-text md:text-transparent px-4"
        lang="hi"
        style={{
          fontSize: "clamp(0.95rem, 4vw, 2.75rem)",
          lineHeight: 1.3,
        }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>

      {/* Desktop only: English name */}
      <p className="hidden md:block font-sans text-sm text-warm-600 tracking-widest uppercase mt-2">
        SHRI RADHE MAA CHARITABLE SOCIETY
      </p>

      {/* Accent line — thinner on mobile */}
      <div
        className="mx-auto mt-1.5 md:mt-4 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500 rounded-full"
        style={{ width: "24px" }}
      />
    </div>
  );
}
