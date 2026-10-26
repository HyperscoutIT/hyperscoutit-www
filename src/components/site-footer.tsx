import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="wrap bg-navy py-12 text-on-navy-dim">
      <div className="container-hs flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Logo tone="light" />
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-sm text-on-navy hover:text-beige"
          >
            {site.contactEmail}
          </a>
        </div>
        <p className="border-t border-navy-rule pt-6 text-[13px]">
          © {new Date().getFullYear()} {site.legal.company} · Sede legale:{" "}
          {site.legal.address} · P.IVA {site.legal.vatNumber}
        </p>
      </div>
    </footer>
  );
}
