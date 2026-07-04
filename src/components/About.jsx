import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, education, certifications } from "../data";

gsap.registerPlugin(ScrollTrigger);

const TERMINAL_LINES = [
  { cmd: "whoami", out: "Subham Kumar Singh" },
  { cmd: "cat location.txt", out: "Bhopal, Madhya Pradesh, India" },
  { cmd: "cat status.txt", out: "Open to Backend / Full-Stack Internships" },
  { cmd: "cat education.txt", out: "B.Tech CSE · Oriental Group of Institutes (2024–2028)" },
  { cmd: "cat contact.txt", out: "subhamkumarsingh077@gmail.com" },
];

function Terminal() {
  const [lines, setLines] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    let mounted = true;
    async function run() {
      for (let i = 0; i < TERMINAL_LINES.length; i++) {
        if (!mounted) break;
        await new Promise(r => setTimeout(r, 600 + i * 200));
        if (!mounted) break;
        setLines(prev => [...prev, { ...TERMINAL_LINES[i], showOut: false }]);
        await new Promise(r => setTimeout(r, 350));
        if (!mounted) break;
        setLines(prev => prev.map((l, idx) => idx === i ? { ...l, showOut: true } : l));
      }
    }

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 75%",
      once: true,
      onEnter: () => run(),
    });

    return () => {
      mounted = false;
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="glass"
      style={{
        borderRadius: 8,
        overflow: "hidden",
        fontFamily: "var(--font-mono)",
        fontSize: "0.78rem",
      }}
    >
      {/* Titlebar */}
      <div style={{
        background: "var(--color-ink)",
        borderBottom: "1px solid var(--color-line)",
        padding: "0.6rem 1rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
      }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
        <span style={{ marginLeft: "auto", color: "var(--color-ghost)", fontSize: "0.65rem", letterSpacing: "0.1em" }}>
          terminal · zsh
        </span>
      </div>
      <div style={{ padding: "1.5rem", minHeight: 280 }}>
        {lines.map((l, i) => (
          <div key={i} style={{ marginBottom: "0.8rem" }}>
            <div>
              <span style={{ color: "var(--color-mint)" }}>➜</span>
              <span style={{ color: "var(--color-ghost)", margin: "0 0.4rem" }}>~</span>
              <span style={{ color: "var(--color-paper)" }}>{l.cmd}</span>
              {i === lines.length - 1 && !l.showOut && (
                <span className="animate-blink" style={{ display: "inline-block", width: 2, height: "1em", background: "var(--color-blue)", verticalAlign: "middle", marginLeft: 2 }} />
              )}
            </div>
            {l.showOut && (
              <div style={{ color: "var(--color-blue-glow)", paddingLeft: "1.2rem", marginTop: "0.2rem" }}>
                {l.out}
              </div>
            )}
          </div>
        ))}
        {lines.length === TERMINAL_LINES.length && (
          <div>
            <span style={{ color: "var(--color-mint)" }}>➜</span>
            <span style={{ color: "var(--color-ghost)", margin: "0 0.4rem" }}>~</span>
            <span className="animate-blink" style={{ display: "inline-block", width: 2, height: "1em", background: "var(--color-blue)", verticalAlign: "middle" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const textRef    = useRef(null);
  const eduRef     = useRef(null);
  const certRef    = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [textRef, eduRef, certRef].forEach((r, i) => {
        if (!r.current) return;
        gsap.fromTo(r.current,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: r.current, start: "top 80%", once: true },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
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
                {i % 2 === 0 ? "// ABOUT ME" : "◆ BACKGROUND"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
             className="grid-cols-1 lg:grid-cols-2">

          {/* Left: Summary + Education + Certs */}
          <div>
            <div ref={textRef} style={{ opacity: 0 }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                lineHeight: 1.15,
                color: "var(--color-paper)",
                marginBottom: "2rem",
                letterSpacing: "0.02em",
              }}>
                BACKEND-FOCUSED ENGINEER SHIPPING{" "}
                <span className="text-gradient-blue">PRODUCTION-GRADE</span>{" "}
                DISTRIBUTED SYSTEMS
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--color-muted)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}>
                {profile.summary}
              </p>
            </div>

            {/* Education */}
            <div ref={eduRef} style={{ opacity: 0, marginBottom: "2rem" }}>
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--color-ghost)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                ▸ Education
              </h3>
              {education.map((e, i) => (
                <div
                  key={i}
                  className="glass"
                  style={{
                    borderRadius: 6,
                    padding: "1rem 1.25rem",
                    marginBottom: "0.75rem",
                    borderLeft: "2px solid var(--color-blue)",
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--color-paper)", marginBottom: "0.25rem" }}>
                    {e.degree}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--color-muted)" }}>
                    {e.org}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)", marginTop: "0.25rem" }}>
                    {e.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div ref={certRef} style={{ opacity: 0 }}>
              <h3 style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                color: "var(--color-ghost)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                ▸ Certifications
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {certifications.map((c, i) => (
                  <span
                    key={i}
                    className="badge"
                    style={{ background: "rgba(139,92,246,0.1)", borderColor: "rgba(139,92,246,0.3)", color: "var(--color-violet)" }}
                  >
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
