import Image from "next/image";
import Link from "next/link";

export function SocietyBanner() {
  return (
    <div className="pb-6 text-center" style={{ paddingTop: "80px" }}>
      {/* Logo — scrolls with the page */}
      <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300 mb-4">
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={120}
          height={120}
          className="drop-shadow-lg mx-auto w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
        />
      </Link>

      <h1
        className="font-devanagari font-bold bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent"
        lang="hi"
        style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", lineHeight: 1.3 }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="font-sans text-xs md:text-sm text-warm-600 tracking-widest uppercase mt-2">
        SHRI RADHE MAA CHARITABLE SOCIETY
      </p>
      <div
        className="mx-auto mt-4 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500"
        style={{ width: "40px" }}
      />
    </div>
  );
}
