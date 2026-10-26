"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import {
  allChoices,
  onOpenCookiePreferences,
  readConsent,
  saveConsent,
  useConsent,
} from "@/lib/consent";
import { consentCategories, type ConsentChoices } from "@/lib/consent-config";

export function CookieBanner() {
  const consent = useConsent();
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentChoices>(allChoices(false));

  const openPreferences = (choices: ConsentChoices) => {
    setDraft(choices);
    setPreferencesOpen(true);
  };

  useEffect(
    () =>
      onOpenCookiePreferences(() => {
        setDraft(readConsent()?.choices ?? allChoices(false));
        setPreferencesOpen(true);
      }),
    [],
  );

  const decide = (choices: ConsentChoices) => {
    saveConsent(choices);
    setPreferencesOpen(false);
  };

  const showBanner = consent === null && !preferencesOpen;

  return (
    <>
      {showBanner && (
        <section
          role="region"
          aria-label="Consenso ai cookie"
          className="fixed inset-x-3 bottom-3 z-50 border border-rule bg-paper p-5 pr-12 text-navy shadow-[0_24px_48px_-16px_rgb(19_39_68/0.45)] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
        >
          <button
            type="button"
            onClick={() => decide(allChoices(false))}
            aria-label="Chiudi e rifiuta i cookie non necessari"
            className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:text-navy"
          >
            <XIcon className="size-4" />
          </button>
          <p className="font-heading text-lg font-bold">Cookie</p>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Usiamo cookie tecnici necessari al funzionamento del sito. Altri
            cookie, statistici e di marketing, vengono usati solo con il tuo
            consenso. Puoi cambiare idea in qualsiasi momento da “Preferenze
            cookie” in fondo alla pagina.{" "}
            <Link
              href="/cookie-policy/"
              className="text-terra underline underline-offset-3"
            >
              Cookie policy
            </Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button
              variant="secondary"
              size="cta"
              onClick={() => decide(allChoices(false))}
            >
              Rifiuta
            </Button>
            <Button
              variant="secondary"
              size="cta"
              onClick={() => decide(allChoices(true))}
            >
              Accetta
            </Button>
            <Button
              variant="outline"
              size="cta"
              className="col-span-2 border-navy/25 bg-transparent text-navy"
              onClick={() => openPreferences(allChoices(false))}
            >
              Personalizza
            </Button>
          </div>
        </section>
      )}

      <Dialog open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] gap-5 overflow-y-auto bg-paper p-6 text-navy sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Preferenze cookie
            </DialogTitle>
            <DialogDescription className="text-body">
              Scegli quali categorie di cookie attivare. Puoi modificare la
              scelta in qualsiasi momento. Dettagli nella{" "}
              <Link href="/cookie-policy/" className="text-terra">
                cookie policy
              </Link>
              .
            </DialogDescription>
          </DialogHeader>

          <ul className="flex flex-col divide-y divide-rule border-y border-rule">
            <li className="flex items-start justify-between gap-6 py-4">
              <div>
                <p className="font-bold">Tecnici</p>
                <p className="text-sm text-body">
                  Necessari al funzionamento del sito e a ricordare la tua
                  scelta sui cookie. Sempre attivi.
                </p>
              </div>
              <Switch checked disabled aria-label="Cookie tecnici, sempre attivi" />
            </li>
            {consentCategories.map((category) => (
              <li
                key={category.id}
                className="flex items-start justify-between gap-6 py-4"
              >
                <div>
                  <p className="font-bold">{category.label}</p>
                  <p className="text-sm text-body">{category.description}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {category.services.length > 0
                      ? `Servizi: ${category.services.join(", ")}`
                      : "Al momento nessun servizio attivo in questa categoria."}
                  </p>
                </div>
                <Switch
                  checked={draft[category.id]}
                  onCheckedChange={(checked) =>
                    setDraft((current) => ({ ...current, [category.id]: checked }))
                  }
                  aria-label={`Cookie ${category.label.toLowerCase()}`}
                />
              </li>
            ))}
          </ul>

          <DialogFooter className="-mx-6 -mb-6 grid grid-cols-1 gap-2 rounded-none bg-beige-2 p-4 sm:grid-cols-3">
            <Button
              variant="secondary"
              size="cta"
              onClick={() => decide(allChoices(false))}
            >
              Rifiuta tutti
            </Button>
            <Button
              variant="outline"
              size="cta"
              className="border-navy/25 bg-transparent text-navy"
              onClick={() => decide(draft)}
            >
              Salva scelte
            </Button>
            <Button
              variant="secondary"
              size="cta"
              onClick={() => decide(allChoices(true))}
            >
              Accetta tutti
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
