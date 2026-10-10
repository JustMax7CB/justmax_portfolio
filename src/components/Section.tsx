import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Kanji numeral shown above the title. */
  num: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, num, title, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="wrap section-grid">
        <header className="section-head">
          <span className="section-num" aria-hidden="true">
            {num}
          </span>
          <h2 id={headingId}>{title}</h2>
        </header>
        <div className="reveal">{children}</div>
      </div>
    </section>
  );
}

export function Tags({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// Thin seal-ring frame for the portrait: a hairline circle with a short
// vermilion accent arc, echoing the hanko mark instead of a brush texture.
export function PortraitRing() {
  return (
    <svg className="portrait-ring" viewBox="0 0 400 400" aria-hidden="true">
      <circle className="portrait-ring-base" cx="200" cy="200" r="188" fill="none" stroke="currentColor" />
      <circle
        className="portrait-ring-accent"
        cx="200"
        cy="200"
        r="188"
        fill="none"
        stroke="var(--shu)"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray="9 91"
        transform="rotate(-98 200 200)"
      />
    </svg>
  );
}
