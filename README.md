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
