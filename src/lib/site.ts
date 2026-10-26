export const site = {
  name: "Hyperscout Italia",
  url: "https://www.hyperscout.it",
  globalUrl: "https://hyperscout.io",
  startUrl: "https://hyperscout.io/nextpointsale",
  contactEmail: "contact@hyperscout.io",
  description:
    "Troviamo i negozi multimarca giusti per il tuo brand, nei mercati in cui vuoi crescere. La sede italiana di Hyperscout.",
  legal: {
    company: "Hyperscout Holding B.V.",
    address: "Bazarstraat 44, L'Aia (Paesi Bassi)",
    registry: "KvK 42034826",
  },
  policies: [
    { label: "Privacy", href: "https://hyperscout.io/PrivacyPolicy" },
    { label: "Cookie", href: "https://hyperscout.io/CookiePolicy" },
    { label: "Termini", href: "https://hyperscout.io/TermsOfService" },
  ],
} as const;

export const nav = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Fiere", href: "#fiere" },
  { label: "Contatti", href: "#contatti" },
] as const;

export const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;
