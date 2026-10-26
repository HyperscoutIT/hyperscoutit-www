export const consentCategories = [
  {
    id: "statistiche",
    label: "Statistiche",
    description:
      "Ci aiutano a capire, in forma aggregata, come viene usato il sito.",
    services: [] as string[],
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Servono a mostrarti comunicazioni pertinenti anche su altri siti e a misurarne l'efficacia.",
    services: [] as string[],
  },
] as const;

export type ConsentCategory = (typeof consentCategories)[number]["id"];
export type ConsentChoices = Record<ConsentCategory, boolean>;

// Bump when categories or services change so that visitors are asked again.
export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "hs-consent";
// The Garante (Linee guida cookie, 10 giugno 2021) allows asking again after 6 months.
export const CONSENT_MAX_AGE_DAYS = 180;
