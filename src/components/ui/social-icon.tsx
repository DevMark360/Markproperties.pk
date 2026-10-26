import { siFacebook, siInstagram, siYoutube } from "simple-icons";
import type { SocialLink } from "@/types/content";

const iconPaths: Partial<Record<SocialLink["platform"], string>> = {
  facebook: siFacebook.path,
  instagram: siInstagram.path,
  youtube: siYoutube.path,
};

export function SocialIcon({ platform, className }: { platform: SocialLink["platform"]; className?: string }) {
  const path = iconPaths[platform];
  if (!path) {
    return (
      <span className={className} aria-hidden>
        <span className="text-[13px] leading-none font-bold">in</span>
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d={path} />
    </svg>
  );
}
