import { useRef, useState } from "react";
import gsap from "gsap";
import FlowLine from "./FlowLine";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const handleEnter = () => {
    gsap.to(cardRef.current, { y: -6, duration: 0.35, ease: "power2.out" });
  };
  const handleLeave = () => {
    gsap.to(cardRef.current, { y: 0, duration: 0.35, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="project-card group relative rounded-2xl border border-line bg-panel/40 p-6 flex flex-col hover:border-signal-dim transition-colors"
    >
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-mono text-[11px] text-fog-dim">0{index + 1}</span>
        <span className="font-mono text-[11px] text-fog-dim">{project.year}</span>
      </div>

      <h3 className="font-display text-xl text-paper font-semibold mt-1">{project.name}</h3>
      <p className="text-fog text-sm mt-1">{project.tagline}</p>

      <div className="mt-5 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <FlowLine stages={project.flow} size="sm" />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="font-mono text-[10px] text-signal bg-signal/10 rounded-full px-2 py-1">
            {s}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="font-mono text-[10px] text-fog-dim px-2 py-1">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="mt-auto font-mono text-xs text-fog hover:text-signal transition-colors text-left focus-ring self-start"
      >
        {expanded ? "hide details −" : "how it works +"}
      </button>

      {expanded && (
        <ul className="mt-4 pt-4 border-t border-line space-y-2.5">
          {project.points.map((p) => (
            <li key={p} className="flex gap-2.5 text-xs text-fog leading-relaxed">
              <span className="text-amber mt-1 shrink-0">▸</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
