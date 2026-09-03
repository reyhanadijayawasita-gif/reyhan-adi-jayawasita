import Image from "next/image";
import type { GalleryPhoto } from "@/lib/data";

export default function PhotoGallery({
  photos,
  variant = "portrait",
}: {
  photos: GalleryPhoto[];
  variant?: "portrait" | "landscape";
}) {
  const landscape = variant === "landscape";
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${
        landscape ? "lg:grid-cols-3" : "lg:grid-cols-4"
      }`}
    >
      {photos.map((photo) => (
        <figure key={photo.src} className="group">
          <div
            className={`relative w-full overflow-hidden border border-ink-200 bg-ink-100 ${
              landscape ? "aspect-[4/3]" : "aspect-[3/4]"
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes={
                landscape
                  ? "(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
                  : "(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
              }
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-3 text-sm text-ink-600">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
