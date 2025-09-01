import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center mb-4">
            <Image 
              src="https://licence.nmcn.gov.ng/Assets/img/nursing.png"
              alt="Nursing and Midwifery Council of Nigeria Logo"
              width={100}
              height={100}
              priority
            />
        </div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
          <Link href="/">
            2025 Examiners Workshop Materials Download Portal
          </Link>
        </h1>
        <p className="text-primary-foreground/90 mt-2 max-w-2xl mx-auto">
          Access and download materials from all 6 Geo-Political Zones
        </p>
      </div>
    </header>
  );
}
