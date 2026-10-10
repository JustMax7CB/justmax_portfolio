import {
  about,
  beyondCode,
  caseStudies,
  certifications,
  education,
  experience,
  hero,
  languages,
  projects,
  site,
  skills,
  writing,
} from "@/data/content";
import { techBelt } from "@/data/tech";
import { RevealObserver } from "@/components/Reveal";
import { TechBelt } from "@/components/TechBelt";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PortraitRing, Section, Tags } from "@/components/Section";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="header">
        <div className="wrap header-inner">
          <a className="mark" href="#top" aria-label={`${site.name} — home`}>
            <span className="hanko" aria-hidden="true">
              MS
            </span>
            <span className="mark-name">{site.name}</span>
          </a>
          <div className="header-actions">
            <nav className="nav" aria-label="Primary">
              <a className="nav-optional" href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#work">Work</a>
              <a className="nav-optional" href="#writing">Writing</a>
              <a className="nav-optional" href="#beyond">Life</a>
              <a href="#contact">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className={`portrait-frame${site.photo ? " has-portrait" : ""}`}>
              <PortraitRing />
              {site.photo && (
                <img
                  className="portrait"
                  src={site.photo}
                  alt={site.name}
                  width={800}
                  height={800}
                />
              )}
            </div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title">
              <span className="hero-name">{site.name}</span>
              {hero.headline}
            </h1>
            <p className="lede">{hero.intro}</p>
            <div className="actions">
              <a className="btn btn-primary" href="#work">
                See my work
              </a>
              {site.cvAvailable && (
                <a className="btn btn-ghost" href={site.cvPath} download>
                  Download CV
                </a>
              )}
              <a className="btn btn-ghost" href={`mailto:${site.email}`}>
                Get in touch
              </a>
            </div>
            <ul className="stats">
              {hero.stats.map((s) => (
                <li key={s.label}>
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <TechBelt rows={techBelt} />

        <Section id="about" num="一" title="About">
          <div className="prose">
            {about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="meta-row">
            <div>
              <h3>Education</h3>
              <p>
                {education.degree}
                <br />
                {education.school}, {education.year}
              </p>
            </div>
            <div>
              <h3>Certifications</h3>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c.name}>
                    {c.href ? (
                      <a href={c.href} {...external}>
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                    <br />
                    <span className="meta-sub">
                      {c.issuer}
                      {c.year ? `, ${c.year}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Languages</h3>
              <ul>
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="experience" num="二" title="Experience">
          <div className="roles">
            {experience.map((role) => (
              <article key={role.company} className="role">
                <div className="role-top">
                  <h3>
                    {role.title} <span>· {role.company}</span>
                  </h3>
                  <span className="period">{role.period}</span>
                </div>
                <p className="role-context">{role.context}</p>
                <ul className="points">
                  {role.points.map((p) => (
                    <li key={p.slice(0, 32)}>{p}</li>
                  ))}
                </ul>
                <Tags items={role.stack} label={`${role.company} stack`} />
              </article>
            ))}
          </div>
        </Section>

        <Section id="work" num="三" title="Selected work">
          <p className="sub">Case studies · client work</p>
          <div className="cards">
            {caseStudies.map((c) => (
              <article key={c.title} className="card">
                <p className="card-kicker">{c.kicker}</p>
                <h3>{c.title}</h3>
                <p>{c.summary}</p>
                <ul className="points">
                  {c.details.map((d) => (
                    <li key={d.slice(0, 32)}>{d}</li>
                  ))}
                </ul>
                <Tags items={c.tags} label={`${c.title} technologies`} />
              </article>
            ))}
          </div>

          <p className="sub">Side projects</p>
          <div className="cards">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <p className="card-kicker">{p.status}</p>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <ul className="points">
                  {p.highlights.map((h) => (
                    <li key={h.slice(0, 32)}>{h}</li>
                  ))}
                </ul>
                <Tags items={p.stack} label={`${p.name} technologies`} />
                {p.links.length > 0 && (
                  <div className="card-links">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} {...external}>
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section id="writing" num="四" title="Writing">
          {writing.map((w) => (
            <a key={w.href} className="article" href={w.href} {...external}>
              <p className="article-meta">
                Medium · {w.date} · {w.readTime}
              </p>
              <h3>{w.title}</h3>
              <p>{w.summary}</p>
            </a>
          ))}
        </Section>

        <Section id="skills" num="五" title="Toolkit">
          <dl className="skills">
            {skills.map((g) => (
              <div key={g.group}>
                <dt>{g.group}</dt>
                <dd>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="beyond" num="六" title="Beyond code">
          <p className="beyond-intro">{beyondCode.intro}</p>
          <ul className="beyond">
            {beyondCode.items.map((item) => (
              <li key={item.title}>
                <span className="glyph" lang="ja">
                  {item.glyph}
                </span>
                <span className="reading">{item.reading}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" num="七" title="Contact">
          <p className="contact-line">Have something worth building? Let&apos;s talk.</p>
          <a className="contact-email" href={`mailto:${site.email}`} title={site.email}>
            Say hello
          </a>
          <ul className="socials">
            <li>
              <a href={site.links.github} {...external}>GitHub</a>
            </li>
            <li>
              <a href={site.links.linkedin} {...external}>LinkedIn</a>
            </li>
            <li>
              <a href={site.links.medium} {...external}>Medium</a>
            </li>
            {site.cvAvailable && (
              <li>
                <a href={site.cvPath} download>CV (PDF)</a>
              </li>
            )}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>© {year} {site.name}</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </div>
      </footer>

      <RevealObserver />
    </>
  );
}
