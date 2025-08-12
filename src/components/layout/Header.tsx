import Link from 'next/link';

const Logo = () => (
    <div className="flex items-center justify-center gap-2 text-primary font-bold text-2xl">
        <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2ZM17,13H13V17H11V13H7V11H11V7H13V11H17V13Z" />
        </svg>
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
          Examiners Workshop Materials Download Portal
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Access and download materials from all 6 Geo-Political Zones
        </p>
      </div>
    </header>
  );
}
