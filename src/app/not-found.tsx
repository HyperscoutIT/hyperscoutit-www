import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <main
      id="contenuto"
      tabIndex={-1}
      className="wrap flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center outline-none"
    >
      <Logo />
      <h1 className="text-[clamp(28px,4vw,44px)] leading-tight">
        Questa pagina non esiste.
      </h1>
      <p className="max-w-md">
        Il sito di Hyperscout Italia è in allestimento: alcune sezioni non sono
        ancora disponibili.
      </p>
      <Link href="/" className={buttonVariants({ size: "cta" })}>
        Torna alla home
      </Link>
    </main>
  );
}
