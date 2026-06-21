import { SOCIALS } from '@/data/site';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href="mailto:omkar.dhara@gmail.com" className="footer-contact-link">omkar.dhara@gmail.com</a>
          <a
            href="https://wa.me/919920499089"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            WhatsApp
          </a>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {s.label}
            </a>
          ))}
        </div>
        <span className="footer-copy">© {new Date().getFullYear()} Omkar Dhareshwar aka ManWith3Balls</span>
      </div>
    </footer>
  );
}
