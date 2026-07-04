import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  {
    label: "Email",
    value: "subhamkumarsingh077@gmail.com",
    href: "mailto:subhamkumarsingh077@gmail.com",
    icon: "✉",
    accent: "var(--color-amber)",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/subham-kumar-singh-303a831b9",
    href: "https://www.linkedin.com/in/subham-kumar-singh-303a831b9/",
    icon: "↗",
    accent: "var(--color-blue)",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const headRef    = useRef(null);
  const linksRef   = useRef([]);
  const orbRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 80%", once: true },
        }
      );

      linksRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { x: 60, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            delay: i * 0.12 + 0.3,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          }
        );
      });

      // Rotate orb slowly
      if (orbRef.current) {
        gsap.to(orbRef.current, { rotation: 360, duration: 20, repeat: -1, ease: "none" });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        padding: "8rem 2rem 6rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--color-void)",
      }}
    >
      {/* Grain */}
      <div className="grain" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      {/* Animated ring decoration */}
      <div
        ref={orbRef}
        style={{
          position: "absolute",
          top: "10%", right: "-10%",
          width: 500, height: 500,
          border: "1px solid rgba(67,97,238,0.08)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div style={{
        position: "absolute",
        top: "15%", right: "-5%",
        width: 380, height: 380,
        border: "1px solid rgba(245,158,11,0.06)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "5%", left: "-8%",
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(67,97,238,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Sep band */}
        <div className="sep-band" style={{ marginBottom: "5rem" }}>
          <div className="marquee-wrap">
            <div className="marquee-track">
              {Array.from({ length: 8 }, (_, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.9rem",
                  letterSpacing: "0.35em",
                  color: i % 2 === 0 ? "var(--color-ghost)" : "var(--color-line)",
                }}>
                  {i % 2 === 0 ? "// CONTACT" : "◆ LET'S CONNECT"}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}
             className="grid-cols-1 lg:grid-cols-2">

          {/* Left: Big text */}
          <div ref={headRef} style={{ opacity: 0 }}>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
              color: "var(--color-paper)",
              marginBottom: "2rem",
            }}>
              LET'S
              <br />
              <span className="text-gradient-blue text-glow">BUILD</span>
              <br />
              TOGETHER
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--color-muted)",
              lineHeight: 1.75,
              maxWidth: 420,
            }}>
              Seeking backend / full-stack internships at high-growth product companies.
              Open to collaborations on distributed systems, real-time apps, and AI integrations.
            </p>

            {/* Availability indicator */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginTop: "2.5rem",
              padding: "0.75rem 1.25rem",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: 8,
              width: "fit-content",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "var(--color-mint)",
              }} className="animate-pulse-ring" />
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                color: "var(--color-mint)", letterSpacing: "0.12em",
              }}>
                AVAILABLE FOR INTERNSHIPS · 2025
              </span>
            </div>
          </div>

          {/* Right: Contact links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                ref={(el) => (linksRef.current[i] = el)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "2rem 0",
                  borderBottom: "1px solid var(--color-line)",
                  textDecoration: "none",
                  opacity: 0,
                  cursor: "none",
                  transition: "padding-left 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = "1rem";
                  e.currentTarget.querySelector(".cl-label").style.color = link.accent;
                  e.currentTarget.querySelector(".cl-icon").style.color = link.accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.querySelector(".cl-label").style.color = "var(--color-paper)";
                  e.currentTarget.querySelector(".cl-icon").style.color = "var(--color-ghost)";
                }}
              >
                <div>
                  <div
                    className="cl-label"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      letterSpacing: "0.08em",
                      color: "var(--color-paper)",
                      transition: "color 0.3s",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {link.label.toUpperCase()}
                  </div>
                  <div style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--color-ghost)",
                    letterSpacing: "0.05em",
                  }}>
                    {link.value}
                  </div>
                </div>
                <span
                  className="cl-icon"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--color-ghost)",
                    transition: "color 0.3s",
                  }}
                >
                  {link.icon}
                </span>
              </a>
            ))}

            {/* CTA button */}
            <div style={{ marginTop: "2.5rem" }}>
              <a
                href="mailto:subhamkumarsingh077@gmail.com"
                className="btn-neon"
                style={{ textDecoration: "none", fontSize: "0.85rem", padding: "1rem 2.5rem" }}
              >
                <span>Send a Message ✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
