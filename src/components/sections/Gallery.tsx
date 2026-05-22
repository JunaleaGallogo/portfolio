"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PLACEHOLDER_COUNT = 15;

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleCount = 5;
  const maxStart = Math.max(0, PLACEHOLDER_COUNT - visibleCount);

  function prev() {
    setStartIndex((i) => (i <= 0 ? maxStart : i - 1));
  }

  function next() {
    setStartIndex((i) => (i >= maxStart ? 0 : i + 1));
  }

  return (
    <section id="gallery" className="border-b pt-2 pb-12 md:pt-3 md:pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          Gallery
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="grid flex-1 grid-cols-5 gap-2">
            {Array.from({ length: visibleCount }, (_, offset) => {
              const i = startIndex + offset;
              return (
                <Card
                  key={i}
                  className={cn(
                    "aspect-square cursor-pointer overflow-hidden transition hover:ring-2 hover:ring-primary",
                    activeIndex === i && "ring-2 ring-primary"
                  )}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
                    <span className="text-xs font-medium">{i + 1}</span>
                  </div>
                </Card>
              );
            })}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
