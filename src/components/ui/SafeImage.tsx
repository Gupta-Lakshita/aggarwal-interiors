"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function SafeImage({ className, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={typeof alt === "string" ? alt : "Image unavailable"}
        className={cn(
          "flex h-full w-full items-center justify-center bg-gradient-to-br from-ivory-300 to-stone-200 text-charcoal-700/40",
          className
        )}
      >
        <ImageOff size={32} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
