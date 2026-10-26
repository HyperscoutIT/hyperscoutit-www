export const site = {
  name: "Hyperscout Italia",
  url: "https://www.hyperscout.it",
  contactEmail: "contact@hyperscout.it",
  description:
    "Troviamo i negozi multimarca giusti per il tuo brand, nei mercati in cui vuoi crescere. La sede italiana di Hyperscout.",
  legal: {
    company: "Hyperscout Holding B.V.",
    address: "Bazarstraat 44, L'Aia (Paesi Bassi)",
    registry: "KvK 42034826",
  },
} as const;

export const nav = [
  { label: "Come funziona", href: "#come-funziona" },
  { label: "Fiere", href: "#fiere" },
  { label: "Contatti", href: "#contatti" },
] as const;

export const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;

export const startMailto = mailto(
  "Hyperscout Italia: trovare il prossimo punto vendita",
);
