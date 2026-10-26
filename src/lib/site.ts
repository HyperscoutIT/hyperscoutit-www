export const site = {
  name: "Hyperscout Italia",
  url: "https://www.hyperscout.it",
  contactEmail: "contact@hyperscout.it",
  description:
    "Troviamo i negozi multimarca giusti per il tuo brand, nei mercati in cui vuoi crescere. La sede italiana di Hyperscout.",
  legal: {
    company: "Hyperscout Italia S.r.l.",
    address: "Via Duomo 53, 74121 Taranto (TA), Italia",
    vatNumber: "03498360738",
  },
} as const;

export const nav = [
  { label: "Come funziona", href: "/#come-funziona" },
  { label: "Fiere", href: "/#fiere" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;

export const startMailto = mailto(
  "Hyperscout Italia: trovare il prossimo punto vendita",
);
