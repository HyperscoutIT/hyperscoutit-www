import Image from "next/image";
import { ArrowRightIcon, MailIcon } from "lucide-react";
import { ShortlistCard } from "@/components/shortlist-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { mailto, site, startMailto } from "@/lib/site";
import { cn } from "@/lib/utils";

const partners = ["Pitti Uomo", "Modefabriek", "INDX", "Moddity", "Modint"];

const steps = [
  {
    title: "Indicaci cinque brand.",
    body: "Undici domande, tre minuti. Quella che conta di più: accanto a quali marchi vuoi stare.",
  },
  {
    title: "La ricerca la facciamo noi.",
    body: "Il tuo sito, i tuoi punti vendita attuali, il tuo listino. Ti restituiamo un profilo già scritto: tu correggi solo ciò che abbiamo sbagliato.",
  },
  {
    title: "Una persona ti risponde entro quattro ore lavorative.",
    body: "Con due cose che abbiamo scoperto, una che vogliamo verificare con te e mezz'ora in agenda.",
  },
  {
    title: "Esci con sei negozi.",
    body: "Ognuno con il nome del buyer e il motivo per cui su quello scaffale c'è spazio per te.",
  },
];

function Micro({ className }: { className?: string }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      Scrivici: ti risponde una persona entro quattro ore lavorative
    </p>
  );
}

function StartCta({ className }: { className?: string }) {
  return (
    <a
      href={startMailto}
      className={cn(buttonVariants({ size: "xl" }), className)}
    >
      Trova il tuo prossimo punto vendita
      <MailIcon className="size-5" />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        <section className="wrap pt-8 pb-14 md:pt-16 md:pb-20">
          <div className="container-hs grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-7">
              <p className="eyebrow inline-flex w-fit items-center gap-2 border border-terra/30 bg-paper px-3 py-1.5 font-bold text-terra">
                <span className="size-1.5 rounded-full bg-terra" aria-hidden />
                Hyperscout arriva in Italia
              </p>
              <h1 className="text-[clamp(36px,5.6vw,62px)] leading-[1.02]">
                Trova i negozi giusti. Entra nei mercati giusti.
              </h1>
              <p className="max-w-[34em] text-[clamp(16px,1.35vw,18px)] leading-relaxed">
                Studiamo il tuo brand prima ancora di parlarti: fascia di
                prezzo, punti vendita, i marchi accanto ai quali vuoi stare.
                Non compili un modulo vuoto, correggi il nostro. Poi ti
                abbiniamo ai retailer e ai buyer che li guidano, e ti
                consegniamo una shortlist su cui agire già questa settimana.
              </p>
              <div className="flex flex-col items-start gap-3">
                <StartCta />
                <Micro />
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border-[3px] border-navy lg:aspect-square">
                <Image
                  src="/images/showroom.jpg"
                  alt="Brand e buyer a confronto in uno showroom di moda"
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 -mt-14 ml-5 flex justify-end sm:-mt-28 lg:absolute lg:-bottom-10 lg:-left-16 lg:mt-0 lg:ml-0 lg:justify-start">
                <ShortlistCard />
              </div>
            </div>
          </div>
        </section>

        <section className="wrap mt-10 border-y border-rule py-10 md:py-12 lg:mt-4">
          <figure className="container-hs flex flex-col gap-4">
            <blockquote className="max-w-[44em] font-heading text-[clamp(18px,2vw,26px)] leading-snug font-medium tracking-tight text-navy">
              “La loro piattaforma basata sull’intelligenza artificiale
              raccoglie dati pubblici sui buyer e costruisce mappe
              go-to-market dettagliate in tutto il mondo, che condividiamo con i
              nostri espositori per ottimizzare strategie e vendite. Hyperscout
              ci ha convinto con l’accuratezza dei suoi dati.”
            </blockquote>
            <figcaption className="eyebrow text-[13px] text-muted-foreground">
              Pitti Immagine · Partner strategico
            </figcaption>
          </figure>
        </section>

        <section className="wrap">
          <div className="container-hs flex flex-wrap items-center gap-x-12 gap-y-4 border-b border-rule py-8">
            <p className="eyebrow text-muted-foreground">Lavoriamo con</p>
            <ul className="flex flex-wrap gap-x-10 gap-y-3 font-heading text-[clamp(15px,1.7vw,21px)] font-bold text-navy/75 uppercase">
              {partners.map((partner) => (
                <li key={partner}>{partner}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap py-[clamp(52px,7vw,100px)]">
          <div className="container-hs grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="text-[clamp(26px,3.2vw,40px)] leading-[1.12]">
                Uno scaffale è una decisione che qualcuno ha già preso.
              </h2>
              <p className="max-w-[34em] text-[clamp(16px,1.35vw,18px)] leading-relaxed">
                Ciò che un negozio espone racconta il suo posizionamento di
                prezzo, il suo cliente, il suo gusto, e se accanto a quei capi
                c’è spazio per te. È la ricerca più onesta del wholesale, e
                quasi nessuno la fa.
              </p>
              <p className="max-w-[34em] border-l-[3px] border-terra pl-5 text-[clamp(16px,1.35vw,18px)] leading-relaxed text-navy">
                La maggior parte dei brand sceglie ancora i negozi da un elenco
                di fiera, scorrendo Instagram, o tra chi ha risposto la stagione
                scorsa.
              </p>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src="/images/scaffale.jpg"
                alt="Interno di un negozio multimarca con capi esposti"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="come-funziona"
          className="wrap bg-beige-2 py-[clamp(52px,7vw,100px)]"
        >
          <div className="container-hs flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="eyebrow text-muted-foreground">Come funziona</p>
              <h2 className="max-w-[20em] text-[clamp(26px,3.2vw,40px)] leading-[1.12]">
                Dai tuoi cinque brand di riferimento a sei negozi reali.
              </h2>
              <p className="text-muted-foreground">
                In tutto, circa un’ora del tuo tempo.
              </p>
            </div>
            <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex flex-col gap-3 border-t-2 border-navy pt-5"
                >
                  <span className="text-[13px] tracking-[0.1em] text-terra">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[clamp(19px,2vw,23px)] leading-tight tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="text-[15px]">{step.body}</p>
                </li>
              ))}
            </ol>
            <div className="flex flex-col gap-8 border-t border-rule pt-10 md:flex-row md:items-end md:justify-between">
              <div className="flex max-w-[36em] flex-col gap-3">
                <h3 className="text-[clamp(22px,2.4vw,30px)] leading-tight">
                  Non una lista. Una shortlist.
                </h3>
                <p>
                  Ogni negozio selezionato può gestire il tuo ordine minimo, le
                  tue finestre di consegna e il tuo territorio. Ognuno ha un
                  buyer con nome e cognome. E continui a lavorarci con noi per
                  tutta la stagione, non da solo dietro un login.
                </p>
                <p className="font-heading font-bold text-navy">
                  Sei porte che puoi aprire valgono più di trecento che non
                  puoi.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3">
                <StartCta />
                <Micro />
              </div>
            </div>
          </div>
        </section>

        <section id="fiere" className="relative isolate overflow-hidden bg-navy">
          <Image
            src="/images/fiera.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover opacity-30"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
          <div className="wrap py-[clamp(64px,9vw,128px)]">
            <div className="container-hs flex max-w-[40em] flex-col gap-5 lg:max-w-[1280px]">
              <p className="eyebrow text-on-navy-dim">Fiere</p>
              <h2 className="max-w-[16em] text-[clamp(26px,3.2vw,40px)] leading-[1.12] text-beige">
                Lavoriamo dentro le fiere, non intorno.
              </h2>
              <p className="max-w-[34em] text-[clamp(16px,1.35vw,18px)] leading-relaxed text-on-navy">
                Con Pitti Uomo, Modefabriek, INDX e Moddity stiamo ripensando
                il modo in cui funziona una fiera. Meno planimetria, più
                appuntamenti che valgono il viaggio, per il brand e per il
                buyer.
              </p>
              <a
                href={mailto("Hyperscout Italia: collaborazione fiera")}
                className="mt-2 inline-flex w-fit items-center gap-2 font-heading font-bold text-terra-soft hover:text-beige"
              >
                Organizzi una fiera? Parliamone
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="contatti" className="wrap py-[clamp(52px,7vw,100px)]">
          <div className="container-hs grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="max-w-[14em] text-[clamp(28px,4.2vw,46px)] leading-[1.06]">
                La crescita non deve essere una scommessa. Può essere un piano.
              </h2>
              <p className="max-w-[34em] text-[clamp(16px,1.35vw,18px)] leading-relaxed">
                Il sito completo di Hyperscout Italia è in preparazione. Nel
                frattempo scrivici: raccontaci il tuo brand e i mercati in cui
                vuoi crescere, e il team italiano ti ricontatta.
              </p>
              <div className="flex flex-col items-start gap-3">
                <StartCta />
                <Micro />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={mailto("Hyperscout Italia: richiesta informazioni brand")}
                className="group flex flex-col gap-2 border border-rule bg-paper p-6 transition-colors hover:border-terra"
              >
                <span className="eyebrow text-muted-foreground">
                  Sei un brand?
                </span>
                <span className="font-heading text-xl font-bold text-navy">
                  Raccontaci dove vuoi crescere
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-terra">
                  <MailIcon className="size-4" />
                  {site.contactEmail}
                </span>
              </a>
              <a
                href={mailto("Hyperscout Italia: richiesta informazioni retailer")}
                className="group flex flex-col gap-2 border border-rule bg-paper p-6 transition-colors hover:border-terra"
              >
                <span className="eyebrow text-muted-foreground">
                  Sei un negozio multimarca?
                </span>
                <span className="font-heading text-xl font-bold text-navy">
                  Scopri i brand adatti al tuo scaffale
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-terra">
                  <MailIcon className="size-4" />
                  {site.contactEmail}
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
