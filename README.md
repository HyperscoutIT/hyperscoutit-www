# Hyperscout Italia

Sito placeholder di **Hyperscout Italia**, la sede italiana di [Hyperscout](https://hyperscout.io), destinato a [www.hyperscout.it](https://www.hyperscout.it).

È una versione ridotta del sito internazionale: una sola pagina in italiano con lo stesso stile (palette, font Space Grotesk e DM Sans, logo e foto originali), che presenta il servizio e rimanda al percorso completo su hyperscout.io e all'email di contatto.

Contenuti della pagina:

- hero con la proposta di valore e un esempio di riga della shortlist
- citazione di Pitti Immagine e partner (Pitti Uomo, Modefabriek, INDX, Moddity, Modint)
- "Uno scaffale è una decisione": il metodo
- "Come funziona" in quattro passaggi
- "Fiere"
- contatti per brand e negozi multimarca
- footer con dati societari e link a privacy, cookie e termini del sito internazionale

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

- `src/lib/site.ts`: email di contatto, link al sito internazionale e al questionario, dati societari, link alle policy, voci di menu.
- `src/app/page.tsx`: tutti i testi della pagina.
- `src/app/layout.tsx`: titolo, descrizione e metadati SEO.
- `public/images/`: foto della pagina. `src/app/opengraph-image.jpg` è l'anteprima mostrata quando il link viene condiviso.

## Da verificare prima della pubblicazione

- **Email**: al momento è `contact@hyperscout.io`. Se la sede italiana avrà un indirizzo dedicato (per esempio su `hyperscout.it`), aggiornarlo in `src/lib/site.ts`.
- **Dati societari**: il footer riporta Hyperscout Holding B.V. (L'Aia, KvK 42034826). Se la succursale italiana ha una propria sede o partita IVA, va aggiunta qui: per i siti italiani di attività commerciali è richiesta l'indicazione della partita IVA.
- **Policy**: privacy, cookie e termini rimandano alle pagine in inglese di hyperscout.io.
