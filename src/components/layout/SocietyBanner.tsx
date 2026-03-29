export function SocietyBanner() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Desktop only: minimal centered society name */}
      <div className="hidden md:flex items-center justify-center py-2">
        <span className="font-sans text-[11px] text-warm-500 tracking-[0.25em] uppercase">
          Shri Radhe Maa Charitable Society
        </span>
      </div>
    </div>
  );
}
