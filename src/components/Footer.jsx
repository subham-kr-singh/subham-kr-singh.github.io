export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        borderTop: "1px solid var(--color-line)",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost text background */}
      <div
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(4rem, 12vw, 10rem)",
          letterSpacing: "0.05em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        SUBHAM KUMAR SINGH
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "4rem",
          }}
          className="grid-cols-1 md:grid-cols-3"
        >
          {/* Identity */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                letterSpacing: "0.2em",
                color: "var(--color-paper)",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  border: "1px solid var(--color-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: "var(--color-blue-glow)",
                }}
              >
                {"</>"}
              </div>
              SKS
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                maxWidth: 280,
              }}
            >
              Backend-heavy full stack engineer building distributed systems, real-time platforms,
              and AI-powered products from Bhopal, India.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--color-ghost)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["About", "Experience", "Projects", "Skills", "Achievements", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--color-muted)",
                    cursor: "none",
                    transition: "color 0.25s",
                    padding: 0,
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-paper)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Stack / Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                color: "var(--color-ghost)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Core Stack
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
              {["MERN", "NestJS", "PostgreSQL", "Redis", "WebRTC", "gRPC", "Docker"].map((t) => (
                <span key={t} className="badge" style={{ fontSize: "0.6rem" }}>
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://www.linkedin.com/in/subham-kumar-singh-303a831b9/"
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--color-blue-glow)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                cursor: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--color-line)", marginBottom: "2rem" }} />

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "var(--color-ghost)",
              letterSpacing: "0.1em",
            }}
          >
            © 2025 SUBHAM KUMAR SINGH · BHOPAL, INDIA
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "var(--color-ghost)",
              letterSpacing: "0.1em",
            }}
          >
            BUILT WITH REACT · GSAP · VITE
          </span>
        </div>
      </div>
    </footer>
  );
}
