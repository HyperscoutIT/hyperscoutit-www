"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  consentCategories,
  type ConsentChoices,
} from "@/lib/consent-config";

export type Consent = {
  version: number;
  updatedAt: string;
  choices: ConsentChoices;
};

const CHANGE_EVENT = "hs-consent:change";
const OPEN_EVENT = "hs-consent:open";

export const allChoices = (value: boolean) =>
  Object.fromEntries(
    consentCategories.map((category) => [category.id, value]),
  ) as ConsentChoices;

function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const consent = JSON.parse(raw) as Consent;
    const age = Date.now() - new Date(consent.updatedAt).getTime();
    if (consent.version !== CONSENT_VERSION) return null;
    if (!(age >= 0 && age < CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000)) {
      return null;
    }
    return { ...consent, choices: { ...allChoices(false), ...consent.choices } };
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

const readRaw = () => window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? "";

export const readConsent = () => parseConsent(readRaw());

/**
 * `undefined` while rendering on the server (consent unknown),
 * `null` when the visitor has not chosen yet or the choice expired.
 */
export function useConsent(): Consent | null | undefined {
  const raw = useSyncExternalStore(subscribe, readRaw, () => undefined);
  return useMemo(
    () => (raw === undefined ? undefined : parseConsent(raw)),
    [raw],
  );
}

export function saveConsent(choices: ConsentChoices) {
  const consent: Consent = {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    choices,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookiePreferences(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}
