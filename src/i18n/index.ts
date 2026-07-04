import es from "./es";
import en from "./en";

export type Lang = "es" | "en";

export const defaultLang: Lang = "es";
export const languages: Lang[] = ["es", "en"];

export interface NavLink {
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  body: string;
}

export interface CaseItem {
  label: string;
  alt: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export const whatsappPhoneNumber = "573104647152";

export function getWhatsappUrl(message: string): string {
  return `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Shape every locale file must implement. Because both `es.ts` and `en.ts` are
 * typed as `UIStrings`, a missing or misnamed key is a compile-time error —
 * `pnpm astro check` keeps the two dictionaries in sync.
 */
export interface UIStrings {
  meta: { title: string; description: string };
  floatingWhatsapp: {
    label: string;
    ariaLabel: string;
    message: string;
  };
  header: { nav: NavLink[]; menuLabel: string };
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    imageAlt: string;
  };
  services: {
    heading: string;
    intro: string;
    items: ServiceItem[];
    ctaQuestion: string;
    ctaButton: string;
  };
  workCases: {
    eyebrow: string;
    heading: string;
    featuredTitle: string;
    featuredSubtitle: string;
    featuredDescription: string;
    featuredAlt: string;
    featuredQuote: string;
    statLabels: string[];
    cta: string;
    cases: CaseItem[];
  };
  archive: {
    heading: string;
    moonarcaTitle: string;
    moonarcaBody: string;
    quote: string;
    alts: string[];
  };
  contentProduction: {
    eyebrow: string;
    heading: string;
    intro: string;
    ctaQuestion: string;
    ctaButton: string;
    clipAlts: string[];
  };
  testimonials: {
    heading: string;
    videoLabel: string;
    imageAlt: string;
    items: Testimonial[];
  };
  contact: {
    heading: string;
    intro: string;
    whatsapp: string;
    instagram: string;
    directLine: string;
    email: string;
  };
  footer: { socials: Social[]; copyright: string };
}

const dictionaries: Record<Lang, UIStrings> = { es, en };

export function getTranslations(lang: Lang): UIStrings {
  return dictionaries[lang] ?? dictionaries[defaultLang];
}
