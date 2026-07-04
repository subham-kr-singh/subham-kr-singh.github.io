import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievements } from "../data";

gsap.registerPlugin(ScrollTrigger);

const ICONS = ["🏆", "🚀", "💡", "🧠"];

export default function Achievements() {
  const sectionRef  = useRef(null);
  const marqueeRef  = useRef(null);
  const cardsRef    = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%", once: true },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      style={{ padding: "6rem 2rem", background: "var(--color-ink)", position: "relative", overflow: "hidden" }}
    >
      {/* Sep band */}
      <div className="sep-band" style={{ marginBottom: "5rem" }}>
        <div className="marquee-wrap">
          <div className="marquee-track marquee-track-rev">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                letterSpacing: "0.35em",
                color: i % 2 === 0 ? "var(--color-ghost)" : "var(--color-line)",
              }}>
                {i % 2 === 0 ? "// ACHIEVEMENTS" : "◆ MILESTONES"}
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
          marginBottom: "4rem",
        }}>
          KEY{" "}
          <span className="text-gradient-blue">MILESTONES</span>
        </h2>

        {/* Scrolling text marquee */}
        <div
          ref={marqueeRef}
          className="marquee-wrap"
          style={{
            marginBottom: "4rem",
            borderTop: "1px solid var(--color-line)",
            borderBottom: "1px solid var(--color-line)",
            padding: "1.25rem 0",
          }}
        >
          <div className="marquee-track" style={{ gap: "4rem" }}>
            {[...achievements, ...achievements].map((a, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: i % 2 === 0 ? "var(--color-paper)" : "var(--color-muted)",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ color: "var(--color-amber)" }}>◆</span>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Achievement cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {achievements.map((a, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="glass"
              style={{
                borderRadius: 10,
                padding: "2rem",
                opacity: 0,
                position: "relative",
                overflow: "hidden",
                cursor: "none",
                transition: "border-color 0.3s",
                border: "1px solid var(--color-line)",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(67,97,238,0.4)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--color-line)"}
            >
              {/* Background number */}
              <div style={{
                position: "absolute",
                top: "-0.5rem",
                right: "1rem",
                fontFamily: "var(--font-display)",
                fontSize: "6rem",
                color: "rgba(255,255,255,0.03)",
                lineHeight: 1,
                pointerEvents: "none",
                userSelect: "none",
              }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{ICONS[i]}</div>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                color: "var(--color-muted)",
                lineHeight: 1.75,
              }}>
                {a}
              </p>
            </div>
          ))}
        </div>

        {/* Hackathons callout */}
        <div
          className="glass-blue"
          style={{
            borderRadius: 10,
            padding: "2.5rem",
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.8rem",
              letterSpacing: "0.06em",
              color: "var(--color-paper)",
              marginBottom: "0.5rem",
            }}>
              HACKATHON PARTICIPANT
            </h3>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
              Oriental TechHack 2.0 (National · OGI Bhopal · ₹1L) · CODICTIVE 3.0 (State · BIST Bhopal · ₹36K)
              <br />
              NavKalpana (National · NIIST Bhopal · ₹40K) · YUVA Future 6.0 · Samsung ennovateX AX 2026 · Samsung Solve for Tomorrow 2026
            </p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {["Oriental TechHack 2.0", "CODICTIVE 3.0", "NavKalpana", "Samsung", "YUVA Future 6.0"].map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
