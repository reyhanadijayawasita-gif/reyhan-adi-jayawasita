import Image from "next/image";
import type { AchievementPhoto } from "@/lib/data";

export default function PhotoGallery({ photos }: { photos: AchievementPhoto[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {photos.map((photo) => (
        <figure key={photo.src} className="group">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-ink-200 bg-ink-100">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
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
