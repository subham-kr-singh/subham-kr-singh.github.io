import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

const ACCENT = [
  "var(--color-blue)",
  "var(--color-amber)",
  "var(--color-mint)",
  "var(--color-violet)",
  "var(--color-rose)",
  "var(--color-blue-glow)",
];

export default function Projects() {
  const sectionRef  = useRef(null);
  const panelRef    = useRef(null);
  const headRef     = useRef(null);
  const rowsRef     = useRef([]);
  const [activeIdx, setActiveIdx] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 85%", once: true } }
      );
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(row,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            delay: i * 0.07,
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* Animate hover panel */
  useEffect(() => {
    if (!panelRef.current) return;
    gsap.to(panelRef.current, {
      opacity: activeIdx !== null ? 1 : 0,
      y: activeIdx !== null ? 0 : 20,
      duration: 0.35,
      ease: "power2.out",
    });
  }, [activeIdx]);

  const active = activeIdx !== null ? projects[activeIdx] : null;

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ padding: "6rem 2rem", position: "relative", background: "var(--color-ink)" }}
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
                {i % 2 === 0 ? "// PROJECTS" : "◆ THINGS I BUILT"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div ref={headRef} style={{ marginBottom: "3rem", opacity: 0 }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            letterSpacing: "0.05em",
            color: "var(--color-paper)",
            lineHeight: 1,
          }}>
            THINGS I{" "}
            <span className="text-gradient-blue">BUILT</span>
          </h2>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-ghost)", letterSpacing: "0.15em", marginTop: "0.75rem" }}>
            Hover a project to explore →
          </p>
        </div>

        {/* Project list — like the reference site's popular items */}
        <div style={{ borderTop: "1px solid var(--color-line)" }}>
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              ref={(el) => (rowsRef.current[i] = el)}
              className="proj-row"
              style={{
                padding: "2rem 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                opacity: 0,
                gap: "2rem",
              }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Number + Name */}
              <div style={{ display: "flex", alignItems: "center", gap: "2rem", flex: 1 }}>
                <span style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--color-ghost)",
                  letterSpacing: "0.1em",
                  width: 24,
                  flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                    letterSpacing: "0.04em",
                    color: activeIdx === i ? ACCENT[i % ACCENT.length] : "var(--color-paper)",
                    transition: "color 0.3s",
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}>
                    {proj.name.toUpperCase()}
                  </h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>
                    {proj.tagline}
                  </p>
                </div>
              </div>

              {/* Year + Stack tags */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", maxWidth: 300, justifyContent: "flex-end" }}
                     className="hidden md:flex">
                  {proj.stack.slice(0, 4).map((s) => (
                    <span key={s} className="badge" style={{ fontSize: "0.6rem" }}>{s}</span>
                  ))}
                  {proj.stack.length > 4 && (
                    <span className="badge" style={{ fontSize: "0.6rem", opacity: 0.6 }}>+{proj.stack.length - 4}</span>
                  )}
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                  color: "var(--color-ghost)", letterSpacing: "0.1em",
                }}>
                  {proj.year}
                </span>
                <span style={{ color: "var(--color-muted)", fontSize: "1.1rem", transition: "color 0.3s", color: activeIdx === i ? ACCENT[i % ACCENT.length] : "var(--color-ghost)" }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed hover panel (like reference site) */}
      <div
        ref={panelRef}
        style={{
          position: "fixed",
          top: "50%",
          right: "3vw",
          transform: "translateY(-50%)",
          width: 340,
          zIndex: 300,
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        {active && (
          <div
            className="glass"
            style={{
              borderRadius: 10,
              padding: "1.75rem",
              borderTop: `2px solid ${ACCENT[activeIdx % ACCENT.length]}`,
            }}
          >
            {/* Flow diagram */}
            <div style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              marginBottom: "1.25rem", flexWrap: "wrap",
            }}>
              {active.flow.map((stage, i) => (
                <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    className="badge"
                    style={{
                      background: `${ACCENT[activeIdx % ACCENT.length]}18`,
                      borderColor: `${ACCENT[activeIdx % ACCENT.length]}40`,
                      color: ACCENT[activeIdx % ACCENT.length],
                    }}
                  >
                    {stage}
                  </span>
                  {i < active.flow.length - 1 && (
                    <span style={{ color: "var(--color-ghost)", fontSize: "0.75rem" }}>→</span>
                  )}
                </span>
              ))}
            </div>

            <h4 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              letterSpacing: "0.06em",
              color: "var(--color-paper)",
              marginBottom: "1rem",
            }}>
              {active.name.toUpperCase()}
            </h4>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {active.points.slice(0, 3).map((pt, i) => (
                <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span style={{ color: ACCENT[activeIdx % ACCENT.length], flexShrink: 0, fontSize: "0.7rem", marginTop: "0.25em" }}>▸</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {active.stack.map((s) => (
                <span key={s} className="badge" style={{ fontSize: "0.6rem" }}>{s}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
