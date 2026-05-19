import { SOCIALS } from '@/data/site';

const WHATSAPP_NUMBER = '919920499089';

export function ContactBand() {
  return (
    <section className="contact-band" id="contact" aria-labelledby="contact-band-heading">
      <div className="contact-inner">
        <div>
          <div
            className="hero-eyebrow"
            style={{ opacity: 1, animation: 'none', marginBottom: 18 }}
          >
            Work With Me
          </div>
          <h2 id="contact-band-heading">
            Got something worth
            <br />
            <em>building together?</em>
          </h2>
          <p>
            Brands, agencies, curators, festival programmers — if you&apos;ve made it this far, you
            probably already know what you want. Get in touch.
          </p>
          <div
            className="hero-aside"
            style={{ opacity: 1, animation: 'none', maxWidth: 380 }}
          >
            <span className="hero-aside-tag">MW3B ▸</span>No deck required. An honest brief is
            worth more.
          </div>
        </div>

        <div>
          <div className="contact-meta-label">Email</div>
          <a href="mailto:omkar.dhara@gmail.com" className="contact-email">
            omkar.dhara@gmail.com
          </a>

          <div className="contact-meta-label">WhatsApp</div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-email"
            style={{ marginBottom: 32 }}
          >
            Message on WhatsApp →
          </a>

          <div className="contact-meta-label">Find me here</div>
          <div className="contact-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
