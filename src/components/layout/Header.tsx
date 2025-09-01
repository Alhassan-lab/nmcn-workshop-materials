import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-6 text-center">
        <div className="flex justify-center mb-4">
            <Image 
              src="https://6000-firebase-studio-1755038255066.cluster-cbeiita7rbe7iuwhvjs5zww2i4.cloudworkstations.dev/capra/attachedImages/2cb14edc-99b3-4114-91fe-4f1c1a6c9e2d/image_324cf03f-bfb0-4303-b5d5-999a0e7fbbb3.png"
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
