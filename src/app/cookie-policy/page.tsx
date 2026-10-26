import type { Metadata } from "next";
import { CookiePreferencesButton } from "@/components/cookie-preferences-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import {
  CONSENT_MAX_AGE_DAYS,
  CONSENT_STORAGE_KEY,
  consentCategories,
} from "@/lib/consent-config";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description:
    "Quali cookie e strumenti simili usa il sito di Hyperscout Italia e come gestire il consenso.",
  alternates: { canonical: "/cookie-policy/" },
};

const lastUpdated = "26 ottobre 2026";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-[clamp(20px,2.2vw,26px)] leading-tight">{title}</h2>
      {children}
    </section>
  );
}

export default function CookiePolicy() {
  return (
    <>
      <SiteHeader />
      <main
        id="contenuto"
        tabIndex={-1}
        className="wrap flex-1 py-[clamp(40px,6vw,88px)] outline-none"
      >
        <article className="mx-auto flex max-w-[46rem] flex-col gap-10 text-[16px] leading-relaxed [&_a]:text-terra [&_a]:underline [&_a]:underline-offset-3">
          <header className="flex flex-col gap-3">
            <p className="eyebrow text-muted-foreground">
              Ultimo aggiornamento: {lastUpdated}
            </p>
            <h1 className="text-[clamp(32px,4.6vw,52px)] leading-[1.05]">
              Cookie policy
            </h1>
            <p>
              Questa pagina spiega quali cookie e strumenti simili usa il sito{" "}
              {site.url.replace("https://", "")}, perché li usa e come puoi
              gestire il tuo consenso, nel rispetto del Regolamento (UE)
              2016/679 (GDPR), dell’art. 122 del Codice privacy (D.Lgs.
              196/2003) e delle Linee guida del Garante per la protezione dei
              dati personali del 10 giugno 2021.
            </p>
          </header>

          <Section title="Titolare del trattamento">
            <p>
              {site.legal.company}, sede legale {site.legal.address}, P.IVA e
              C.F. {site.legal.vatNumber}. Per qualsiasi domanda puoi scrivere a{" "}
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
            </p>
          </Section>

          <Section title="Cosa sono i cookie">
            <p>
              I cookie sono piccoli file di testo che un sito salva sul tuo
              dispositivo. Strumenti simili, come il <em>local storage</em> del
              browser, svolgono la stessa funzione e seguono le stesse regole.
              Si distinguono in <strong>tecnici</strong>, necessari al
              funzionamento del sito e che non richiedono consenso, e{" "}
              <strong>non tecnici</strong> (statistici, di profilazione o
              marketing), che possono essere usati solo dopo il tuo consenso.
            </p>
          </Section>

          <Section title="Cookie tecnici usati da questo sito">
            <p>
              Il sito usa un solo strumento tecnico, che serve a ricordare la
              tua scelta sui cookie e a non mostrarti di nuovo il banner a ogni
              visita.
            </p>
            <div
              className="overflow-x-auto"
              role="region"
              aria-label="Tabella dei cookie tecnici"
              tabIndex={0}
            >
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-navy text-navy">
                    <th className="py-2 pr-4 font-bold">Nome</th>
                    <th className="py-2 pr-4 font-bold">Tipo</th>
                    <th className="py-2 pr-4 font-bold">Finalità</th>
                    <th className="py-2 font-bold">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-rule align-top">
                    <td className="py-3 pr-4 font-mono text-[13px]">
                      {CONSENT_STORAGE_KEY}
                    </td>
                    <td className="py-3 pr-4">Local storage, prima parte</td>
                    <td className="py-3 pr-4">
                      Memorizza le tue preferenze sui cookie
                    </td>
                    <td className="py-3">{CONSENT_MAX_AGE_DAYS / 30} mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              I caratteri tipografici e le immagini sono ospitati direttamente
              sul nostro sito: le pagine non caricano risorse da server di terze
              parti e non vengono installati cookie di terze parti.
            </p>
          </Section>

          <Section title="Cookie che richiedono il tuo consenso">
            <p>
              Le categorie seguenti vengono attivate solo se dai il consenso,
              anche in modo parziale dalla finestra “Personalizza”. Finché non
              scegli, o se chiudi il banner con la X, restano disattivate.
            </p>
            <ul className="flex flex-col gap-3">
              {consentCategories.map((category) => (
                <li key={category.id} className="border-l-[3px] border-terra pl-4">
                  <p className="font-bold text-navy">{category.label}</p>
                  <p>{category.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {category.services.length > 0
                      ? `Servizi: ${category.services.join(", ")}.`
                      : "Al momento il sito non usa servizi in questa categoria."}
                  </p>
                </li>
              ))}
            </ul>
            <p>
              Se in futuro aggiungeremo servizi in queste categorie, li
              elencheremo qui e ti chiederemo di nuovo il consenso.
            </p>
          </Section>

          <Section title="Come gestire il consenso">
            <p>
              Puoi modificare o revocare il consenso in qualsiasi momento dal
              link “Preferenze cookie” in fondo a ogni pagina, oppure da qui:
            </p>
            <CookiePreferencesButton
              className={buttonVariants({ size: "cta", className: "w-fit" })}
            />
            <p>
              La tua scelta viene conservata per {CONSENT_MAX_AGE_DAYS / 30}{" "}
              mesi, poi ti verrà chiesta di nuovo. Puoi anche cancellare i dati
              salvati dal sito dalle impostazioni del tuo browser.
            </p>
          </Section>

          <Section title="I tuoi diritti">
            <p>
              Hai diritto di accedere ai tuoi dati, chiederne la rettifica o la
              cancellazione, limitarne il trattamento e opporti (artt. 15–22
              GDPR), scrivendo a{" "}
              <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              Puoi inoltre proporre reclamo al{" "}
              <a href="https://www.garanteprivacy.it">
                Garante per la protezione dei dati personali
              </a>
              .
            </p>
          </Section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
