'use client';

import { useState, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { zones, type Material } from '@/data/materials';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, FileText, Presentation, FileArchive, Search, ArrowLeft } from 'lucide-react';

function getFileIcon(type: Material['type']) {
  const iconClass = "h-8 w-8 shrink-0";
  switch (type) {
    case 'pdf':
      return <FileText className={`${iconClass} text-destructive`} />;
    case 'ppt':
      return <Presentation className={`${iconClass} text-primary`} />;
    case 'doc':
      return <FileArchive className={`${iconClass} text-secondary-foreground`} />;
    default:
      return <FileText className={`${iconClass} text-muted-foreground`} />;
  }
}

export default function ZonePage() {
  const params = useParams();
  const zoneSlug = params.zone as string;
  const [searchTerm, setSearchTerm] = useState('');

  const zone = useMemo(() => zones.find((z) => z.slug === zoneSlug), [zoneSlug]);

  const filteredMaterials = useMemo(() => {
    if (!zone) return [];
    if (!searchTerm) return zone.materials;
    return zone.materials.filter((material) =>
      material.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [zone, searchTerm]);

  if (!zone) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Back to all zones
        </Link>
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="text-3xl text-primary">{zone.name} Zone Materials</CardTitle>
                <p className="text-muted-foreground pt-1">Search and download available files for the {zone.name} zone.</p>
            </CardHeader>
            <CardContent>
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search materials by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 text-base"
                        aria-label="Search materials"
                    />
                </div>

                {filteredMaterials.length > 0 ? (
                    <ul className="space-y-3">
                        {filteredMaterials.map((material) => (
                        <li key={material.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg bg-background hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-4 min-w-0">
                                {getFileIcon(material.type)}
                                <span className="font-medium truncate">{material.name}</span>
                            </div>
                            <Button asChild variant="outline" className="w-full sm:w-auto shrink-0">
                                <a href={material.url} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                        </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-lg">
                        <p className="font-semibold">No materials found</p>
                        <p className="text-sm">Try adjusting your search term.</p>
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
