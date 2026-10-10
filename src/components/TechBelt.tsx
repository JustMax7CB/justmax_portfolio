import type { CSSProperties } from "react";
import type { GlyphName, Tech } from "@/data/tech";

type TechBeltProps = {
  rows: readonly (readonly Tech[])[];
};

/**
 * Infinite, CSS-only logo marquee. Each row renders its list twice and translates by -50%,
 * so the loop is seamless. The row pauses on hover; the hovered logo scales up, takes its
 * brand colour and reveals its name. Under prefers-reduced-motion it becomes a static grid.
 */
export function TechBelt({ rows }: TechBeltProps) {
  return (
    <section className="belt" aria-label="Technologies I work with">
      {rows.map((items, i) => (
        <div key={i} className={`belt-row${i % 2 ? " belt-row--reverse" : ""}`}>
          <div className="belt-track" style={{ animationDuration: `${items.length * 2.8}s` }}>
            <BeltList items={items} />
            <BeltList items={items} hidden />
          </div>
        </div>
      ))}
    </section>
  );
}

function BeltList({ items, hidden = false }: { items: readonly Tech[]; hidden?: boolean }) {
  return (
    <ul className="belt-list" aria-hidden={hidden || undefined}>
      {items.map((tech) => (
        <li key={tech.name} className="logo" style={hoverColor(tech)}>
          <span className="logo-icon">
            {tech.kind === "brand" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={tech.path} fill="currentColor" />
              </svg>
            ) : (
              <Glyph name={tech.glyph} />
            )}
          </span>
          <span className="logo-name">{tech.name}</span>
        </li>
      ))}
    </ul>
  );
}

/** Brand colour on hover, unless it's near-black/near-white and would vanish in one of the themes. */
function hoverColor(tech: Tech): CSSProperties | undefined {
  if (tech.kind !== "brand") return undefined;
  const n = parseInt(tech.hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (luminance < 0.04 || luminance > 0.85) return undefined;
  return { "--brand": tech.hex } as CSSProperties;
}

function Glyph({ name }: { name: GlyphName }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
  };

  switch (name) {
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.6 9.1 4.75 4.75 0 0 0 7 18.5Z" />
          <circle cx="12" cy="14" r="1.4" />
          <path d="M12 15.4v1.6" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.75" />
          <path d="M5 5.5v13c0 1.5 3.1 2.75 7 2.75s7-1.25 7-2.75v-13" />
          <path d="M5 12c0 1.5 3.1 2.75 7 2.75S19 13.5 19 12" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.25" />
          <path d="m15.2 15.2 5.3 5.3" />
          <path d="M8 10.5h5" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 14a4.5 4.5 0 0 0 6.36 0l3.18-3.18a4.5 4.5 0 0 0-6.36-6.36L11.6 6.04" />
          <path d="M14 10a4.5 4.5 0 0 0-6.36 0l-3.18 3.18a4.5 4.5 0 0 0 6.36 6.36l1.58-1.58" />
        </svg>
      );
    case "pipeline":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="2.25" />
          <circle cx="19" cy="6" r="2.25" />
          <circle cx="19" cy="18" r="2.25" />
          <path d="M7.25 12h3.25a3 3 0 0 0 3-3V8a2 2 0 0 1 2-2h1.25" />
          <path d="M10.5 12a3 3 0 0 1 3 3v1a2 2 0 0 0 2 2h1.25" />
        </svg>
      );
    case "csharp":
      return (
        <svg {...common}>
          <path d="M11.5 7.6A5 5 0 1 0 11.5 16.4" />
          <path d="M15 9.5v5M18 9.5v5M13.75 11h5.5M13.75 13h5.5" strokeWidth={1.4} />
        </svg>
      );
  }
}
