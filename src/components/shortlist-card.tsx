const reasons = [
  "vende due dei tuoi cinque brand",
  "stessa fascia di prezzo wholesale",
  "menswear contemporaneo",
  "il mercato che vuoi aprire",
];

export function ShortlistCard() {
  return (
    <figure className="w-full max-w-[400px]">
      <div className="border border-rule bg-paper p-6 shadow-[0_24px_48px_-24px_rgb(19_39_68/0.35)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-heading text-xl font-bold tracking-tight text-navy">
              Bottega Aurora
            </p>
            <p className="text-sm text-muted-foreground">Bologna, Italia</p>
          </div>
          <p className="shrink-0 text-right font-heading leading-none text-terra">
            <span className="block text-3xl font-bold">94</span>
            <span className="eyebrow text-[11px]">match</span>
          </p>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="border border-rule bg-beige px-2.5 py-1 text-[13px] text-navy"
            >
              {reason}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-3 border-t border-rule pt-4">
          <span
            aria-hidden
            className="grid size-9 place-items-center bg-navy font-heading text-sm font-bold text-beige"
          >
            GF
          </span>
          <p className="text-sm leading-tight">
            <span className="block font-bold text-navy">Giulia Ferri</span>
            <span className="text-muted-foreground">Buyer, uomo</span>
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs text-muted-foreground">
        Una riga del risultato, non uno screenshot della piattaforma. Nomi a
        titolo illustrativo.
      </figcaption>
    </figure>
  );
}
