import Image from "next/image";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const BADGES = ["React / Next.js", "Node.js", "MongoDB", "Cloud Deployment"] as const;

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .3z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22.68 0H1.32A1.32 1.32 0 0 0 0 1.32v21.36A1.32 1.32 0 0 0 1.32 24h11.5v-9.29H9.69v-3.62h3.13V8.41c0-3.1 1.89-4.79 4.66-4.79 1.32 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.8.72-1.8 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12A1.32 1.32 0 0 0 24 22.68V1.32A1.32 1.32 0 0 0 22.68 0z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "LinkedIn",
    href: SITE.social.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: SITE.social.github,
    Icon: GitHubIcon,
  },
  {
    label: "Facebook",
    href: SITE.social.facebook,
    Icon: FacebookIcon,
  },
] as const;

export function Founder() {
  return (
    <section id="founder" className="border-y border-line/50 bg-ink/40 py-16 md:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <Reveal className="mx-auto w-full max-w-[340px] overflow-hidden shadow-[var(--shadow-elite)] md:mx-0">
            <Image
              src="/brand/founder.webp"
              alt={`${SITE.founder}, Founder & Lead Developer at ${SITE.name}, Karachi`}
              width={680}
              height={850}
              className="aspect-[4/5] w-full object-cover object-[center_12%]"
              sizes="(max-width:768px) 340px, 400px"
              quality={70}
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal>
            <span className="mb-3 block font-mono text-[0.78rem] uppercase tracking-[0.06em] text-gold-dim">
              Founder & Lead Developer
            </span>
            <h2 className="mb-4 font-display text-[clamp(1.5rem,3vw,1.9rem)] font-bold text-ivory">
              {SITE.founder}
            </h2>
            <p className="mb-3.5 max-w-[56ch] text-ivory-muted">
              A full-stack engineer based in Karachi with hands-on experience
              across React, Next.js, Node.js and cloud infrastructure — Ayaz Web
              Studio exists to bring that same level of engineering to local
              businesses that are usually priced out of it.
            </p>
            <p className="mb-5 max-w-[56ch] text-ivory-muted">
              Every project is built, deployed and supported personally — no
              outsourcing, no middlemen, just a direct line to the person
              building your website.
            </p>

            <div className="mb-6 flex flex-wrap gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={`${SITE.founder} on ${label}`}
                  className="inline-flex h-11 w-11 items-center justify-center border border-line bg-elevated text-ivory-muted transition hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
              {BADGES.map((badge) => (
                <span
                  key={badge}
                  className="border border-line bg-elevated px-3 py-1.5 font-mono text-[0.72rem] text-ivory-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
