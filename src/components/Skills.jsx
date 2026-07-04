import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data";

gsap.registerPlugin(ScrollTrigger);

const DOMAIN_COLORS = {
  "Languages":         "var(--color-blue)",
  "Backend":           "var(--color-amber)",
  "Frontend / Mobile": "var(--color-mint)",
  "Databases & Cache": "var(--color-violet)",
  "DevOps / Infra":    "var(--color-rose)",
  "Architecture":      "var(--color-blue-glow)",
  "Payments & APIs":   "var(--color-amber)",
  "Tools & Methods":   "var(--color-mint)",
};

export default function Skills() {
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 0.7, ease: "power3.out",
            delay: i * 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
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
                {i % 2 === 0 ? "// TECH STACK" : "◆ SKILLS"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 7vw, 6rem)",
          letterSpacing: "0.05em",
          color: "var(--color-paper)",
          lineHeight: 1,
          marginBottom: "3rem",
        }}>
          FULL{" "}
          <span className="text-gradient-amber">STACK</span>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {skillGroups.map((g, i) => {
            const accent = DOMAIN_COLORS[g.domain] || "var(--color-blue)";
            return (
              <div
                key={g.domain}
                ref={(el) => (cardsRef.current[i] = el)}
                className="skill-flip"
                style={{ opacity: 0, height: 220 }}
              >
                <div className="skill-flip-inner" style={{ height: "100%" }}>
                  {/* Front */}
                  <div
                    className="skill-face glass"
                    style={{
                      borderRadius: 10,
                      padding: "2rem",
                      height: "100%",
                      borderLeft: `3px solid ${accent}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      cursor: "none",
                    }}
                  >
                    <div>
                      <div style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.62rem",
                        color: accent,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        marginBottom: "0.75rem",
                      }}>
                        {String(i + 1).padStart(2, "0")} ◆
                      </div>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.6rem",
                        letterSpacing: "0.05em",
                        color: "var(--color-paper)",
                        lineHeight: 1.1,
                      }}>
                        {g.domain.toUpperCase()}
                      </h3>
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)" }}>
                      {g.items.length} technologies · hover to expand →
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    className="skill-back glass"
                    style={{
                      borderRadius: 10,
                      padding: "1.5rem",
                      height: "100%",
                      background: `linear-gradient(135deg, ${accent}12 0%, var(--color-card) 100%)`,
                      border: `1px solid ${accent}30`,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.62rem",
                      color: accent,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "1rem",
                    }}>
                      {g.domain}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", flex: 1, alignContent: "flex-start" }}>
                      {g.items.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            padding: "0.25rem 0.65rem",
                            borderRadius: 4,
                            background: `${accent}18`,
                            border: `1px solid ${accent}35`,
                            color: accent,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
