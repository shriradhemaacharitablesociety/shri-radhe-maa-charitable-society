import Image from "next/image";
import { Link } from "@/i18n/routing";

export function NavbarLogo() {
  return (
    <>
      {/* Desktop: spacer to clear fixed navbar + logo */}
      <div className="hidden md:block">
        <div style={{ height: 70 }} />
        <div className="flex justify-center py-3">
          <Link href={"/" as any} className="hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.png"
              alt="Shri Radhe Maa Charitable Society"
              width={100}
              height={100}
              className="drop-shadow-md"
            />
          </Link>
        </div>
      </div>
      {/* Mobile: just a spacer (mobile navbar has its own logo) */}
      <div className="md:hidden h-[90px]" />
    </>
  );
}
