# Hyperscout Italia

Sito placeholder di **Hyperscout Italia**, la sede italiana di Hyperscout, destinato a [www.hyperscout.it](https://www.hyperscout.it).

È una versione ridotta del sito Hyperscout: una sola pagina in italiano con lo stesso stile (palette, font Space Grotesk e DM Sans, logo e foto originali), che presenta il servizio. Tutti gli inviti all'azione aprono un'email precompilata verso l'indirizzo di contatto italiano.

Contenuti della pagina:

- hero con la proposta di valore e un esempio di riga della shortlist
- citazione di Pitti Immagine e partner (Pitti Uomo, Modefabriek, INDX, Moddity, Modint)
- "Uno scaffale è una decisione": il metodo
- "Come funziona" in quattro passaggi
- "Fiere"
- contatti per brand e negozi multimarca
- footer con email, dati societari, link alla cookie policy e alle preferenze cookie

C'è anche una pagina `/cookie-policy/`.

## Cookie e consenso

Il sito mostra un banner cookie conforme alle Linee guida del Garante del 10 giugno 2021:

- pulsanti "Rifiuta" e "Accetta" con lo stesso peso visivo, più "Personalizza" per scegliere le singole categorie;
- la X chiude il banner e rifiuta i cookie non necessari;
- nessuna categoria è attiva prima del consenso;
- la scelta viene salvata nel browser (local storage, chiave `hs-consent`) per 6 mesi, poi il banner ricompare;
- il link "Preferenze cookie" nel footer riapre la scelta in qualsiasi momento.

Oggi il sito non usa cookie statistici o di marketing né risorse di terze parti: i font sono inclusi nella build e le immagini sono locali. Le categorie "Statistiche" e "Marketing" sono già pronte per quando verranno aggiunti dei servizi.

Per aggiungere un servizio, per esempio Google Analytics:

1. in `src/lib/consent-config.ts` aggiungi il nome del servizio in `services` della categoria giusta e incrementa `CONSENT_VERSION`, così il consenso viene richiesto di nuovo;
2. carica lo script solo se c'è il consenso, usando l'hook `useConsent()` di `src/lib/consent.ts` in un componente client:

```tsx
const consent = useConsent();
if (!consent?.choices.statistiche) return null;
return <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" />;
```

3. aggiorna la pagina `src/app/cookie-policy/page.tsx` con nome, fornitore, finalità e durata dei nuovi cookie.

## Accessibilità

Il sito è stato verificato rispetto alle WCAG 2.1 livello AA, il riferimento tecnico della norma EN 301 549 e delle Linee guida AgID:

- analisi automatica con axe-core (regole WCAG 2.0, 2.1 e 2.2 A/AA e best practice) su home, cookie policy e pagina 404, su desktop e mobile, anche con banner cookie, finestra delle preferenze e menu mobile aperti: nessuna violazione;
- contrasto del testo almeno 4,5:1 ovunque, compresi gli stati hover e il testo sopra la foto della sezione Fiere; contrasto di almeno 3:1 per interruttori e contorno del focus;
- navigazione completa da tastiera: link "Vai al contenuto principale", contorno di focus visibile su ogni elemento, focus intrappolato nella finestra delle preferenze e nel menu mobile, chiusura con Esc e ritorno del focus al punto di partenza;
- reflow senza scorrimento orizzontale a 320px (equivalente a uno zoom del 400%) e tenuta con la spaziatura del testo aumentata (WCAG 1.4.12);
- animazioni e scorrimento morbido disattivati se il sistema operativo chiede di ridurre il movimento.

Per un sito informativo B2B gestito da una piccola impresa, gli obblighi di accessibilità del D.Lgs. 82/2022 (European Accessibility Act) e della legge 4/2004 di norma non si applicano: riguardano soprattutto e-commerce verso consumatori, servizi bancari, trasporti, telecomunicazioni ed e-book, oltre alle aziende con fatturato medio sopra i 500 milioni di euro. Le microimprese di servizi sono esenti. Se in futuro il sito offrirà servizi ai consumatori, per esempio vendite online, va rivalutato. Prima di aggiungere nuove sezioni conviene ripetere almeno l'analisi con axe e una prova da tastiera.

## Stack

Next.js (App Router, export statico), TypeScript, Tailwind CSS v4, shadcn/ui.

## Sviluppo in locale

Requisiti: Node.js 20 o superiore.

```bash
npm install
npm run dev
```

Il sito è disponibile su <http://localhost:4317>.

## Build e pubblicazione

```bash
npm run build
```

La build genera la cartella `out/`, composta solo da file statici (HTML, CSS, JS, immagini). Si può pubblicare su qualunque hosting statico: Vercel, Netlify, Cloudflare Pages, un bucket S3 o DigitalOcean Spaces, oppure un server Nginx o Apache.

Per controllare la build in locale:

```bash
npm run start
```

Note per il dominio:

- puntare `www.hyperscout.it` all'hosting scelto (record CNAME o A, secondo il provider);
- impostare un redirect 301 da `hyperscout.it` a `https://www.hyperscout.it`, perché canonical, sitemap e Open Graph usano l'indirizzo con `www`.

## Dove modificare i contenuti

- `src/lib/site.ts`: email di contatto, oggetto delle email precompilate, dati societari, voci di menu.
- `src/app/page.tsx`: tutti i testi della pagina.
- `src/app/layout.tsx`: titolo, descrizione e metadati SEO.
- `src/app/cookie-policy/page.tsx`: testo della cookie policy.
- `src/lib/consent-config.ts`: categorie di cookie, servizi attivi e durata del consenso.
- `public/images/`: foto della pagina. `src/app/opengraph-image.jpg` è l'anteprima mostrata quando il link viene condiviso.

## Da verificare prima della pubblicazione

- **Email**: il sito usa `contact@hyperscout.it`. La casella deve esistere ed essere monitorata, altrimenti cambiare l'indirizzo in `src/lib/site.ts`.
- **Dati societari**: il footer riporta ragione sociale, sede legale e partita IVA (che coincide con il codice fiscale) di Hyperscout Italia S.r.l. Per completare i dati richiesti dall'art. 2250 del Codice civile vanno aggiunti in `src/lib/site.ts` e nel footer: numero REA e ufficio del Registro delle imprese, capitale sociale versato, l'eventuale indicazione "società a socio unico" e l'eventuale soggezione a direzione e coordinamento di un'altra società. Se la società è iscritta come startup innovativa, serve anche una pagina con le informazioni dell'art. 25, comma 11, del DL 179/2012, raggiungibile dalla home page.
- **Privacy**: c'è la cookie policy, ma manca ancora un'informativa privacy generale (GDPR, art. 13), per esempio sul trattamento delle email ricevute e sui log del provider di hosting. È consigliabile pubblicarla prima del lancio e farla verificare, insieme alla cookie policy, da un consulente privacy.
