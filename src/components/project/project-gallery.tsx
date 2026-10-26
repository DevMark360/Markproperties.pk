import Image from "next/image";
import type { Project } from "@/types/content";

interface ProjectGalleryProps {
  project: Project;
  gallery?: string[];
}

export function ProjectGallery({ project, gallery = [] }: ProjectGalleryProps) {
  const cover = project.heroImage ?? project.image;
  const thumbnails = gallery.filter((image) => image !== cover).slice(0, 2);

  return (
    <div className="grid grid-cols-2 gap-3 lg:h-[clamp(22rem,calc(100svh-17.5rem),34rem)] lg:grid-cols-[2fr_1fr] lg:grid-rows-2">
      <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 sm:aspect-[16/9] lg:col-span-1 lg:row-span-2 lg:aspect-auto">
        <Image
          src={cover}
          alt={`${project.name}, ${project.area}, ${project.city}`}
          fill
          preload
          sizes="(min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
      </div>
      {thumbnails.map((image, index) => (
        <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-100 lg:aspect-auto">
          <Image src={image} alt={`${project.name} view ${index + 2}`} fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
        </div>
      ))}
    </div>
  );
}
