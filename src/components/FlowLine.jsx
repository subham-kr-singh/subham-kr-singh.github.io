import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * FlowLine — the site's signature element.
 * Renders a row of labeled nodes connected by a line, with a small
 * "packet" that continuously travels the path — a visual stand-in for
 * the real-time data flow (WebSocket / pub-sub / SSE) each project
 * actually implements. Small variant used inside project cards,
 * large variant used in the hero.
 */
export default function FlowLine({ stages, size = "sm", active = true }) {
  const pathRef = useRef(null);
  const packetRef = useRef(null);
  const packet2Ref = useRef(null);

  const isLg = size === "lg";
  const width = isLg ? 640 : 300;
  const height = isLg ? 120 : 56;
  const n = stages.length;
  const pad = isLg ? 60 : 24;
  const step = (width - pad * 2) / (n - 1);
  const y = height / 2;

  useEffect(() => {
    if (!active) return;
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();

    const ctx = gsap.context(() => {
      // Manual motion along the path using GSAP's ticker + getPointAtLength,
      // avoiding a dependency on the (paid) MotionPathPlugin.
      let progress = 0;
      const dur = isLg ? 2.6 : 2.1;
      const dur2 = isLg ? 2.6 : 2.1;
      let progress2 = 0.5;

      const tick = () => {
        progress += (1 / 60) / dur;
        if (progress > 1) progress = 0;
        progress2 += (1 / 60) / dur2;
        if (progress2 > 1) progress2 = 0;
        const pt = path.getPointAtLength(progress * len);
        const pt2 = path.getPointAtLength(progress2 * len);
        if (packetRef.current) {
          packetRef.current.setAttribute("cx", pt.x);
          packetRef.current.setAttribute("cy", pt.y);
        }
        if (packet2Ref.current) {
          packet2Ref.current.setAttribute("cx", pt2.x);
          packet2Ref.current.setAttribute("cy", pt2.y);
        }
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    });

    return () => ctx.revert();
  }, [active, isLg]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto overflow-visible"
      role="img"
      aria-label={`Data flow: ${stages.join(" to ")}`}
    >
      <path
        ref={pathRef}
        d={`M ${pad} ${y} L ${width - pad} ${y}`}
        stroke="#262B35"
        strokeWidth={isLg ? 2 : 1.5}
        fill="none"
      />
      {stages.map((label, i) => {
        const cx = pad + step * i;
        return (
          <g key={label}>
            <circle
              cx={cx}
              cy={y}
              r={isLg ? 6 : 4}
              fill="#12151B"
              stroke={i === 0 || i === n - 1 ? "#4C7CFF" : "#5B6272"}
              strokeWidth={2}
            />
            <text
              x={cx}
              y={y + (isLg ? 28 : 18)}
              textAnchor="middle"
              fontFamily="JetBrains Mono, monospace"
              fontSize={isLg ? 12 : 8.5}
              fill="#8B93A1"
              style={{ letterSpacing: "0.02em" }}
            >
              {label}
            </text>
          </g>
        );
      })}
      {active && (
        <>
          <circle ref={packetRef} r={isLg ? 5 : 3.5} fill="#4C7CFF" />
          <circle ref={packet2Ref} r={isLg ? 4 : 3} fill="#FFB454" opacity={0.85} />
        </>
      )}
    </svg>
  );
}
