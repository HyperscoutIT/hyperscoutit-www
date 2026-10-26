import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Image
        src="/hyperscout-logo.png"
        alt="Hyperscout"
        width={123}
        height={48}
        priority
        className={cn("h-9 w-auto", tone === "light" && "brightness-0 invert")}
      />
      <span
        className={cn(
          "eyebrow border-l pl-3 font-heading font-bold leading-none",
          tone === "dark"
            ? "border-rule text-terra"
            : "border-navy-rule text-terra-soft",
        )}
      >
        Italia
      </span>
    </span>
  );
}
