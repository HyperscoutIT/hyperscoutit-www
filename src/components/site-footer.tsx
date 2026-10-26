import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="wrap bg-navy py-12 text-on-navy-dim">
      <div className="container-hs flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <Logo tone="light" />
          <div className="flex flex-col gap-1 text-sm md:items-end">
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-on-navy hover:text-beige"
            >
              {site.contactEmail}
            </a>
            <a href={site.globalUrl} className="hover:text-beige">
              Sito internazionale: hyperscout.io ↗
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-navy-rule pt-6 text-[13px] md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legal.company} ·{" "}
            {site.legal.address} · {site.legal.registry}
          </p>
          <ul className="flex gap-5">
            {site.policies.map((policy) => (
              <li key={policy.href}>
                <a href={policy.href} className="hover:text-beige">
                  {policy.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
