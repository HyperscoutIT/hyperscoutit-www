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
- footer con email e dati societari

Il sito non usa cookie né strumenti di tracciamento, quindi non serve un banner cookie.

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
- `public/images/`: foto della pagina. `src/app/opengraph-image.jpg` è l'anteprima mostrata quando il link viene condiviso.

## Da verificare prima della pubblicazione

- **Email**: il sito usa `contact@hyperscout.it`. La casella deve esistere ed essere monitorata, altrimenti cambiare l'indirizzo in `src/lib/site.ts`.
- **Dati societari**: il footer riporta ragione sociale, sede legale e partita IVA (che coincide con il codice fiscale) di Hyperscout Italia S.r.l. Per completare i dati richiesti dall'art. 2250 del Codice civile vanno aggiunti in `src/lib/site.ts` e nel footer: numero REA e ufficio del Registro delle imprese, capitale sociale versato, l'eventuale indicazione "società a socio unico" e l'eventuale soggezione a direzione e coordinamento di un'altra società. Se la società è iscritta come startup innovativa, serve anche una pagina con le informazioni dell'art. 25, comma 11, del DL 179/2012, raggiungibile dalla home page.
- **Privacy**: il sito non ha più link a privacy, cookie e termini. Non usa cookie né raccoglie dati tramite moduli, ma è comunque consigliabile pubblicare un'informativa privacy in italiano prima del lancio.
