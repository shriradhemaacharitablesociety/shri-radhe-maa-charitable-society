import Image from "next/image";
import Link from "next/link";

export function SocietyBanner() {
  return (
    <div className="pb-4 md:pb-6 text-center pt-16 md:pt-24">
      {/* Logo — scrolls with the page */}
      <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300 mb-3 md:mb-4">
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={120}
          height={120}
          className="drop-shadow-lg mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
        />
      </Link>

      <h1
        className="font-devanagari font-bold bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent px-4"
        lang="hi"
        style={{ fontSize: "clamp(1.25rem, 5vw, 2.75rem)", lineHeight: 1.3 }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="font-sans text-[10px] md:text-sm text-warm-600 tracking-widest uppercase mt-1.5 md:mt-2 px-4">
        SHRI RADHE MAA CHARITABLE SOCIETY
      </p>
      <div
        className="mx-auto mt-3 md:mt-4 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500"
        style={{ width: "40px" }}
      />
    </div>
  );
}
