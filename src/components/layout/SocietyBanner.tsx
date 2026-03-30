import Image from "next/image";
import Link from "next/link";

export function SocietyBanner() {
  return (
    <div className="pt-16 md:pt-20 pb-2 md:pb-4 text-center bg-white">
      {/* Logo */}
      <Link href="/" className="inline-block hover:scale-105 transition-transform duration-300 mb-3">
        <Image
          src="/logo.png"
          alt="Shri Radhe Maa Charitable Society"
          width={120}
          height={120}
          className="drop-shadow-lg mx-auto w-[90px] h-[90px] md:w-[120px] md:h-[120px]"
        />
      </Link>

      <h1
        className="font-devanagari font-bold bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent px-4"
        lang="hi"
        style={{ fontSize: "clamp(1.1rem, 4.5vw, 2.75rem)", lineHeight: 1.3 }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="font-sans text-[10px] md:text-sm text-warm-600 tracking-widest uppercase mt-1 md:mt-2">
        SHRI RADHE MAA CHARITABLE SOCIETY
      </p>
      <div
        className="mx-auto mt-2 md:mt-3 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500 rounded-full"
        style={{ width: "32px" }}
      />
    </div>
  );
}
