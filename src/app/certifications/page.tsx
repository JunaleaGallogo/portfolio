import Image from "next/image";
import Link from "next/link";
import { certifications } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/" className="mb-8 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
      </Button>
      <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
      <p className="mt-2 text-muted-foreground">Professional certifications.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert) => (
          <Card key={cert.name}>
            <CardContent className="p-0">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener"
                className="block p-6 transition hover:bg-muted/50"
              >
                {cert.image ? (
                  <div className="mb-4 overflow-hidden rounded-md">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={640}
                      height={360}
                      className="h-36 w-full object-cover"
                    />
                  </div>
                ) : null}
                <h2 className="font-semibold">{cert.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
                </p>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
