import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return (
    <main className="wrap flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
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
