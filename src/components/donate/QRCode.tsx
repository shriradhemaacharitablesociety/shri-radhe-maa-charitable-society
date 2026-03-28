import { useTranslations } from "next-intl";

export function QRCode() {
  const t = useTranslations("donate");

  return (
    <div className="relative rounded-3xl overflow-hidden bg-white/45 backdrop-blur-sm border border-saffron-300/60">
      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-crimson-500 to-saffron-500" />

      <div className="pl-8 pr-6 py-6 flex flex-col gap-5">
        <h3 className="font-serif text-lg text-warm-900">{t("qr_title")}</h3>

        {/* QR Placeholder */}
        <div className="flex justify-center">
          <div className="w-44 h-44 rounded-2xl bg-warm-100/80 border-2 border-dashed border-saffron-300/60 flex flex-col items-center justify-center gap-2">
            <svg
              className="w-10 h-10 text-saffron-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75V16.5ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75V13.5ZM13.5 19.5h.75v.75h-.75V19.5ZM19.5 13.5h.75v.75h-.75V13.5ZM19.5 19.5h.75v.75h-.75V19.5ZM16.5 16.5h.75v.75h-.75V16.5Z"
              />
            </svg>
            <span className="font-sans text-xs text-warm-800/40 text-center px-3">
              QR code to be added
            </span>
          </div>
        </div>

        {/* UPI ID */}
        <div className="flex flex-col gap-1.5 items-center">
          <p className="font-sans text-xs text-warm-800/50 uppercase tracking-wider">UPI ID</p>
          <div className="px-4 py-2.5 rounded-xl bg-warm-100/60 border border-saffron-300/40">
            <span className="font-sans text-sm font-medium text-warm-900/70">
              To be updated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
