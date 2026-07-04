import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const navRef  = useRef(null);
  const drawerRef = useRef(null);
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  /* Scroll-aware glass blur */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Animate nav in after loader */
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 3.2 }
    );
  }, []);

  /* Mobile drawer slide */
  useEffect(() => {
    if (!drawerRef.current) return;
    gsap.to(drawerRef.current, {
      y: menuOpen ? 0 : -20,
      opacity: menuOpen ? 1 : 0,
      pointerEvents: menuOpen ? "all" : "none",
      duration: 0.35,
      ease: "power2.out",
    });
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          opacity: 0,
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(7,9,15,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          style={{ cursor: "none", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem" }}
        >
          <div
            style={{
              width: 36, height: 36,
              border: "1px solid var(--color-blue)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-blue-glow)",
              letterSpacing: "0.05em",
            }}
          >
            {"</>"}
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", letterSpacing: "0.18em", color: "var(--color-paper)" }}>
            SKS
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none", border: "none",
                fontFamily: "var(--font-sans)", fontWeight: 500,
                fontSize: "0.8rem", letterSpacing: "0.1em",
                color: "var(--color-muted)", cursor: "none",
                textTransform: "uppercase",
                transition: "color 0.25s",
                padding: "0.25rem 0",
                position: "relative",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-paper)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/subham-kumar-singh-303a831b9/"
            target="_blank"
            rel="noreferrer"
            className="btn-neon"
            style={{ fontSize: "0.7rem" }}
          >
            <span>LinkedIn ↗</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "none", color: "var(--color-paper)", fontSize: "1.4rem" }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        ref={drawerRef}
        style={{
          position: "fixed",
          top: "70px", left: 0, right: 0,
          zIndex: 499,
          background: "rgba(7,9,15,0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--color-line)",
          padding: "2rem",
          display: "flex", flexDirection: "column", gap: "1.5rem",
          opacity: 0, pointerEvents: "none",
        }}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            style={{
              background: "none", border: "none", textAlign: "left",
              fontFamily: "var(--font-display)", fontSize: "2rem",
              letterSpacing: "0.15em", color: "var(--color-paper)", cursor: "none",
            }}
          >
            {link.label.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}
