import Link from "next/link";
import { cacheLife } from "next/cache";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Smartphone } from "lucide-react";
import { footerNav, mobileTelHref, siteConfig, socialLinks, telHref, whatsappHref } from "@/config/site";
import { Container } from "@/components/ui/container";
import { SocialIcon } from "@/components/ui/social-icon";
import { Logo } from "./logo";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

const contactItems = [
  { icon: Phone, label: siteConfig.contact.phone, href: telHref },
  { icon: Smartphone, label: siteConfig.contact.mobile, href: mobileTelHref },
  { icon: Mail, label: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink-950 text-white">
      <Container className="flex flex-col gap-10 border-b border-white/10 py-14 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <Logo variant="light" className="h-20" />
          <p className="mt-6 text-sm leading-relaxed text-white/60">{siteConfig.description}</p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <ul className="space-y-3 lg:text-right">
            {contactItems.map(({ icon: Icon, label, href }) => (
              <li key={href}>
                <a href={href} className="inline-flex items-center gap-2.5 text-sm font-semibold transition-colors hover:text-brand-500 lg:flex-row-reverse">
                  <Icon className="size-4 text-brand-500" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-2.5">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <SocialIcon platform={link.platform} className="grid size-4 place-items-center" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-white/10 py-12">
        <h3 className="text-[11px] font-semibold tracking-[0.18em] text-white/45 uppercase">Visit our office</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-semibold">{siteConfig.name} — Head Office</p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-500" />
              {siteConfig.contact.address}
            </p>
            <a
              href={siteConfig.contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:text-brand-500"
            >
              Get directions
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div>
            <p className="font-semibold">Site visits</p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-white/60">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand-500" />
              Free guided visits to any project, arranged by your advisor at a time that suits you.
            </p>
            <a
              href={whatsappHref("Hi Mark Properties, I'd like to book a site visit.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:text-brand-500"
            >
              Book a site visit
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. Pakistan.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
