export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Omkar Dhareshwar aka ManWith3Balls — All rights reserved</span>
      <address style={{ fontStyle: 'normal' }}>
        <a href="mailto:omkar.dhara@gmail.com">omkar.dhara@gmail.com</a>
      </address>
    </footer>
  );
}
