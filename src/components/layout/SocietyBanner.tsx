export function SocietyBanner() {
  return (
    <div className="pb-3 text-center" style={{ paddingTop: "100px" }}>
      <h1
        className="font-devanagari font-bold bg-gradient-to-r from-crimson-600 via-crimson-500 to-saffron-500 bg-clip-text text-transparent"
        lang="hi"
        style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", lineHeight: 1.3 }}
      >
        ॥ श्री राधे माँ चैरिटेबल सोसाइटी ॥
      </h1>
      <p className="font-sans text-xs md:text-sm text-warm-800/50 tracking-[0.2em] uppercase mt-1.5">
        Shri Radhe Maa Charitable Society
      </p>
      <div className="mx-auto mt-3 w-12 h-px bg-gradient-to-r from-transparent via-crimson-400/50 to-transparent" />
    </div>
  );
}
