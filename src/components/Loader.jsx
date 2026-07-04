import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);
  const counterRef = useRef(null);
  const barRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Animate counter 0 → 100
      const obj = { val: 0 };
      tl.to(obj, {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => setCount(Math.round(obj.val)),
      });

      // Reveal name + role
      tl.fromTo(
        nameRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );
      tl.fromTo(
        roleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Hold briefly, then slide entire loader up
      tl.to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete,
        }
      );
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="loader-screen grain">
      {/* Progress bar */}
      <div
        className="loader-bar"
        style={{ width: `${count}%`, transition: "width 0.06s linear" }}
      />

      {/* Huge ghost counter */}
      <div
        ref={counterRef}
        className="loader-counter select-none pointer-events-none absolute"
        style={{ opacity: 0.06 }}
      >
        {String(count).padStart(3, "0")}
      </div>

      {/* Progress line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        {/* Name */}
        <h1
          ref={nameRef}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            letterSpacing: "0.18em",
            color: "var(--color-paper)",
            opacity: 0,
            textAlign: "center",
          }}
        >
          SUBHAM KUMAR SINGH
        </h1>

        {/* Role */}
        <p
          ref={roleRef}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(0.65rem, 1.5vw, 0.9rem)",
            letterSpacing: "0.25em",
            color: "var(--color-muted)",
            opacity: 0,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Backend-Heavy Full Stack Engineer
        </p>

        {/* Progress indicator */}
        <div className="flex items-center gap-3 mt-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-blue-glow)",
              letterSpacing: "0.15em",
            }}
          >
            {String(count).padStart(3, "0")}
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/60" />
        </div>
      </div>

      {/* Corner labels */}
      <div
        className="absolute bottom-8 left-8"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)", letterSpacing: "0.1em" }}
      >
        PORTFOLIO · 2025
      </div>
      <div
        className="absolute bottom-8 right-8"
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--color-ghost)", letterSpacing: "0.1em" }}
      >
        BHOPAL · INDIA
      </div>
    </div>
  );
}
