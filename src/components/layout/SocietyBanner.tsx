import Image from "next/image";
import Link from "next/link";

export function SocietyBanner() {
  return (
    <div className="pb-2 md:pb-6 text-center pt-14 md:pt-24">
      {/* Logo — hidden on mobile (navbar has it), shown on desktop */}
      <Link href="/" className="hidden md:inline-block hover:scale-105 transition-transform duration-300 mb-4">
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={120}
          height={120}
          className="drop-shadow-lg mx-auto"
        />
      </Link>

      <h1
        className="font-devanagari font-bold bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent px-4"
        lang="hi"
        style={{ fontSize: "clamp(1.1rem, 4.5vw, 2.75rem)", lineHeight: 1.3 }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="hidden md:block font-sans text-sm text-warm-600 tracking-widest uppercase mt-2">
        SHRI RADHE MAA CHARITABLE SOCIETY
      </p>
      <div
        className="mx-auto mt-2 md:mt-4 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500"
        style={{ width: "32px" }}
      />
    </div>
  );
}
