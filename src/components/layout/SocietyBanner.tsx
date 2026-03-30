export function SocietyBanner() {
  return (
    <div className="pb-2 md:pb-4 text-center bg-white pt-4 md:pt-6">
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
        className="mx-auto mt-2 md:mt-3 h-0.5 bg-gradient-to-r from-crimson-500 to-saffron-500 rounded-full"
        style={{ width: "32px" }}
      />
    </div>
  );
}
