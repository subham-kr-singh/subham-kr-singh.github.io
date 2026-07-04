import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const lineRef    = useRef(null);
  const cardRef    = useRef(null);
  const bulletsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 80%", once: true },
        }
      );

      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1, duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: cardRef.current, start: "top 75%", once: true },
        }
      );

      bulletsRef.current.forEach((b, i) => {
        if (!b) return;
        gsap.fromTo(b,
          { x: -30, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.6, ease: "power2.out",
            delay: i * 0.1 + 0.3,
            scrollTrigger: { trigger: cardRef.current, start: "top 75%", once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{ padding: "6rem 2rem", position: "relative" }}
    >
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
                {i % 2 === 0 ? "// EXPERIENCE" : "◆ WORK HISTORY"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              letterSpacing: "0.05em",
              color: "var(--color-paper)",
              lineHeight: 1,
            }}
          >
            WORK &amp;{" "}
            <span className="text-gradient-amber">TRAINING</span>
          </h2>
        </div>

        {/* Timeline layout */}
        <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "0 2.5rem", maxWidth: 900 }}>
          {/* Vertical line */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: 16, height: 16, borderRadius: "50%",
              background: "var(--color-blue)", flexShrink: 0,
              boxShadow: "0 0 0 4px rgba(67,97,238,0.2)",
              marginTop: "2.2rem",
            }} />
            <div
              ref={lineRef}
              style={{
                width: 2,
                background: "linear-gradient(to bottom, var(--color-blue), transparent)",
                flex: 1,
                marginTop: "0.5rem",
                minHeight: 200,
              }}
            />
          </div>

          {/* Card */}
          <div ref={cardRef} className="glass" style={{ borderRadius: 10, padding: "2.5rem", opacity: 0 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  letterSpacing: "0.05em",
                  color: "var(--color-paper)",
                  marginBottom: "0.3rem",
                }}>
                  {experience.title}
                </h3>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--color-blue-glow)", letterSpacing: "0.08em" }}>
                  {experience.org}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div className="badge" style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.3)", color: "var(--color-mint)" }}>
                  {experience.period}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)", marginTop: "0.5rem" }}>
                  {experience.location}
                </div>
              </div>
            </div>

            <div style={{ height: 1, background: "var(--color-line)", marginBottom: "1.5rem" }} />

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {experience.points.map((pt, i) => (
                <li
                  key={i}
                  ref={(el) => (bulletsRef.current[i] = el)}
                  style={{
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    opacity: 0,
                  }}
                >
                  <span style={{ color: "var(--color-blue)", flexShrink: 0, marginTop: "0.15em" }}>▸</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.7 }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
