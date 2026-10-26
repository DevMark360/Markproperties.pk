import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

const logoAlt = `${siteConfig.name} — ${siteConfig.slogan}`;

export function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn("inline-flex shrink-0", className)}>
      <Image
        src={variant === "light" ? siteConfig.logoLight : siteConfig.logo}
        alt={logoAlt}
        {...siteConfig.logoSize}
        preload={variant === "default"}
        className="h-full w-auto"
      />
    </Link>
  );
}

/** Cross-fades between the light and default logo, for headers that sit over imagery. */
export function AdaptiveLogo({ isLight, className }: { isLight: boolean; className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.name} home`} className={cn("relative inline-flex shrink-0", className)}>
      <Image
        src={siteConfig.logo}
        alt={logoAlt}
        {...siteConfig.logoSize}
        preload
        className={cn("h-full w-auto transition-opacity duration-300", isLight && "opacity-0")}
      />
      <Image
        src={siteConfig.logoLight}
        alt=""
        {...siteConfig.logoSize}
        preload
        className={cn("absolute inset-0 h-full w-auto transition-opacity duration-300", !isLight && "opacity-0")}
      />
    </Link>
  );
}
