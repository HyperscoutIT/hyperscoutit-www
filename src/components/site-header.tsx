"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, startMailto } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="wrap sticky top-0 z-40 border-b border-rule bg-beige/95 backdrop-blur supports-backdrop-filter:bg-beige/85">
      <div className="container-hs flex h-[76px] items-center justify-between gap-5">
        <a href="#top" aria-label="Hyperscout Italia, torna all'inizio">
          <Logo />
        </a>

        <nav
          aria-label="Principale"
          className="hidden items-center gap-8 whitespace-nowrap lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-navy transition-colors hover:text-terra"
            >
              {item.label}
            </a>
          ))}
          <a
            href={startMailto}
            className={cn(buttonVariants({ size: "cta" }))}
          >
            Scrivici
          </a>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="-mr-1.5 p-1.5 text-navy lg:hidden"
            aria-label="Apri il menu"
          >
            <MenuIcon className="size-7" />
          </SheetTrigger>
          <SheetContent side="top" className="gap-0 bg-beige pt-[76px]">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav aria-label="Mobile" className="flex flex-col border-t border-rule">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="wrap border-b border-rule py-[18px] text-[17px] text-navy"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={startMailto}
                className="wrap border-b border-rule py-[18px] text-[17px] font-bold text-terra"
              >
                Scrivici →
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
