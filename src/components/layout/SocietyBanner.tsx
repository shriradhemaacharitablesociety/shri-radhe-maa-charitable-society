export function SocietyBanner() {
  return (
    <div className="pb-6 text-center" style={{ paddingTop: "80px" }}>
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
