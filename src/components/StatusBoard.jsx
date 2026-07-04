import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { statusMetrics } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function StatusBoard() {
  const sectionRef = useRef(null);
  const cardsRef   = useRef([]);
  const countRefs  = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
          }
        );

        // Animate numeric values
        const raw = statusMetrics[i].value;
        const numeric = parseFloat(raw);
        if (!isNaN(numeric)) {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: numeric,
            duration: 1.8,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", once: true },
            onUpdate: () => {
              if (countRefs.current[i]) {
                const prefix = raw.startsWith("<") ? "<" : "";
                const suffix = raw.endsWith("+") ? "+" : raw.endsWith("s") ? "s" : "";
                countRefs.current[i].textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
              }
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const accentColors = [
    "var(--color-blue)",
    "var(--color-amber)",
    "var(--color-mint)",
    "var(--color-violet)",
  ];

  return (
    <section ref={sectionRef} style={{ padding: "0 2rem 6rem", position: "relative" }}>
      {/* Separator marquee */}
      <div className="sep-band" style={{ marginBottom: "4rem" }}>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {Array.from({ length: 8 }, (_, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                letterSpacing: "0.35em",
                color: i % 2 === 0 ? "var(--color-ghost)" : "var(--color-line)",
              }}>
                {i % 2 === 0 ? "// LIVE METRICS" : "◆ OPS DASHBOARD"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}>
          {statusMetrics.map((m, i) => (
            <div
              key={m.label}
              ref={(el) => (cardsRef.current[i] = el)}
              className="glass"
              style={{
                borderRadius: 8,
                padding: "2rem 2rem 1.5rem",
                opacity: 0,
                borderTop: `2px solid ${accentColors[i]}`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background glow */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 120,
                background: `radial-gradient(ellipse at 50% 0%, ${accentColors[i]}18 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1rem" }}>
                {m.unit}
              </div>

              <div
                ref={(el) => (countRefs.current[i] = el)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 4.5rem)",
                  lineHeight: 1,
                  color: accentColors[i],
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                }}
              >
                {m.value}
              </div>

              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.9rem", color: "var(--color-paper)", marginBottom: "0.35rem" }}>
                {m.label}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-muted)" }}>
                {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
