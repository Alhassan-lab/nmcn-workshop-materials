import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
    <Image 
      src="layout/council.jpg"   // points to /public/council.jpg
      alt="NMCN Logo"
      width={40}           // adjust to match your design
      height={40}
      className="rounded-full" // optional: makes it circular
    />
    <span>NMCN</span>
  </div>
);

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="mb-4 inline-block">
          <Link href="/" aria-label="Back to homepage">
            <Logo />
          </Link>
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-primary tracking-tight">
          2025 Examiners Workshop Materials Download Portal
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Access and download materials from all 6 Geo-Political Zones
        </p>
      </div>
    </header>
  );
}
