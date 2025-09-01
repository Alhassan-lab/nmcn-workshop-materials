import Link from "next/link";
import Image from "next/image";

const Logo = () => (
  <div className="flex items-center justify-center">
    <Image 
      src="/council.jpg"
      alt="Nursing and Midwifery Council of Nigeria Logo"
      width={60}
      height={60}
      priority
    />
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
