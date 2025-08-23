import Link from 'next/link';
import { zones } from '@/data/materials';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <section aria-labelledby="zones-heading" className="max-w-4xl mx-auto">
      <h2 id="zones-heading" className="sr-only">Geo-Political Zones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {zones.map((zone) => (
          <Link href={`/${zone.slug}`} key={zone.slug} className="group block rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            <Card className="h-full bg-card text-card-foreground border-border transition-all duration-300 shadow-md hover:shadow-xl hover:border-primary hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{zone.name}</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center w-full justify-end text-sm font-semibold text-muted-foreground group-hover:text-primary">
                  View Materials
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
