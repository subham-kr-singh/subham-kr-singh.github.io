import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data";

gsap.registerPlugin(ScrollTrigger);

const STACK = ["MERN", "NestJS", "PostgreSQL", "Redis", "WebRTC", "gRPC", "GraphQL", "Docker"];

const CODE_SNIPPET = `// RideGo · Driver Matching Engine
async matchDriver(rideId: string) {
  const ride = await this.db
    .select().from(rides)
    .where(eq(rides.id, rideId));

  const nearby = await this.db.execute(sql\`
    SELECT driver_id,
      ST_Distance(location, \${ride.origin}) AS dist
    FROM drivers
    WHERE status = 'online'
    ORDER BY dist LIMIT 5
  \`);

  await this.redis.set(
    \`ride:\${rideId}:candidates\`,
    JSON.stringify(nearby), { EX: 60 }
  );

  this.gateway.emit('match_found', nearby[0]);
}`;

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef     = useRef(null);
  const badgesRef  = useRef(null);
  const codeRef    = useRef(null);
  const scrollRef  = useRef(null);
  const orb1Ref    = useRef(null);
  const orb2Ref    = useRef(null);
  const typedRef   = useRef(null);

  /* Entrance animation after loader (delay ~3.2s) */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.0 });

      // Letters of SUBHAM slide up
      const letters = headingRef.current?.querySelectorAll(".hero-letter");
      if (letters?.length) {
        tl.fromTo(letters,
          { y: "110%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power4.out", stagger: 0.05 }
        );
      }

      tl.fromTo(subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.5"
      );

      tl.fromTo(
        badgesRef.current?.querySelectorAll(".badge"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power2.out" },
        "-=0.3"
      );

      tl.fromTo(codeRef.current,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.6"
      );

      tl.fromTo(scrollRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }, "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Typing animation for code */
  useEffect(() => {
    if (!typedRef.current) return;
    let i = 0;
    const target = typedRef.current;
    target.textContent = "";
    const timer = setInterval(() => {
      if (i < CODE_SNIPPET.length) {
        target.textContent += CODE_SNIPPET[i];
        i++;
        target.parentElement.scrollTop = target.parentElement.scrollHeight;
      } else {
        clearInterval(timer);
      }
    }, 18);
    return () => clearInterval(timer);
  }, []);

  /* Parallax orbs on mouse move */
  useEffect(() => {
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (x - cx) / cx;
      const dy = (y - cy) / cy;
      if (orb1Ref.current)
        gsap.to(orb1Ref.current, { x: dx * 30, y: dy * 30, duration: 1.5, ease: "power2.out" });
      if (orb2Ref.current)
        gsap.to(orb2Ref.current, { x: dx * -20, y: dy * -20, duration: 2, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const letters = "SUBHAM".split("");

  return (
    <section
      id="hero"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        overflow: "hidden",
      }}
      className="bg-grid"
    >
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        style={{
          position: "absolute", top: "15%", left: "-5%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(67,97,238,0.18) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />
      <div
        ref={orb2Ref}
        style={{
          position: "absolute", bottom: "10%", right: "-8%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }}
      />

      {/* Main grid layout */}
      <div style={{ maxWidth: 1400, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>

        {/* Giant heading */}
        <div ref={headingRef} style={{ overflow: "hidden", lineHeight: 0.9, marginBottom: "2rem" }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 17vw, 18rem)",
            letterSpacing: "-0.02em",
            display: "flex", flexWrap: "wrap", gap: "0 0.02em",
          }}>
            {letters.map((l, i) => (
              <span
                key={i}
                className="hero-letter"
                style={{
                  display: "inline-block",
                  color: i < 3 ? "var(--color-paper)" : "transparent",
                  WebkitTextStroke: i >= 3 ? "1px rgba(255,255,255,0.25)" : undefined,
                  opacity: 0,
                  willChange: "transform",
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>

        {/* Two-column: subtitle + code card */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}
             className="grid-cols-1 lg:grid-cols-2">

          {/* Left: subtitle + stack badges */}
          <div>
            <div ref={subRef} style={{ opacity: 0 }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1rem, 2vw, 1.35rem)",
                color: "var(--color-muted)",
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: 480,
                marginBottom: "1.5rem",
              }}>
                <span style={{ color: "var(--color-paper)", fontWeight: 600 }}>Backend-Heavy Full Stack Engineer</span>{" "}
                building distributed systems, real-time platforms, and AI-integrated web & mobile apps.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="btn-neon"
                  style={{ textDecoration: "none" }}
                >
                  <span>View Projects ↓</span>
                </a>
                <a
                  href="mailto:subhamkumarsingh077@gmail.com"
                  className="btn-neon"
                  style={{
                    textDecoration: "none",
                    background: "rgba(245,158,11,0.08)",
                    borderColor: "var(--color-amber)",
                    color: "var(--color-amber)",
                  }}
                >
                  <span>Hire Me ✉</span>
                </a>
              </div>
            </div>

            {/* Stack badges */}
            <div ref={badgesRef} style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {STACK.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>

            {/* Location + availability */}
            <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-mint)", animation: "pulse-ring 2s ease-out infinite" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-muted)", letterSpacing: "0.08em" }}>
                  AVAILABLE FOR INTERNSHIPS
                </span>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--color-ghost)", letterSpacing: "0.08em" }}>
                📍 BHOPAL, INDIA
              </span>
            </div>
          </div>

          {/* Right: Code card */}
          <div ref={codeRef} style={{ opacity: 0 }}>
            <div className="glass" style={{ borderRadius: 8, overflow: "hidden" }}>
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
                <span style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                  color: "var(--color-ghost)", letterSpacing: "0.1em",
                }}>
                  ride.service.ts
                </span>
              </div>

              {/* Code body */}
              <div
                style={{
                  maxHeight: 280, overflowY: "auto",
                  padding: "1.2rem 1.5rem",
                  scrollbarWidth: "none",
                }}
              >
                <pre
                  ref={typedRef}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    lineHeight: 1.7,
                    color: "var(--color-paper)",
                    whiteSpace: "pre-wrap",
                    margin: 0,
                  }}
                />
                <span
                  style={{
                    display: "inline-block",
                    width: 2, height: "1em",
                    background: "var(--color-blue)",
                    verticalAlign: "middle",
                  }}
                  className="animate-blink"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
          opacity: 0,
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--color-ghost)", letterSpacing: "0.2em" }}>SCROLL</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--color-blue), transparent)" }} className="animate-float" />
      </div>
    </section>
  );
}
