import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotsRef = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef(
    Array.from({ length: 20 }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
  );
  const rafId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      // First dot chases mouse
      pos.current[0].x += (mouse.current.x - pos.current[0].x) * 0.28;
      pos.current[0].y += (mouse.current.y - pos.current[0].y) * 0.28;

      // Each subsequent dot chases the one before it
      for (let i = 1; i < 20; i++) {
        const lag = 0.18 - i * 0.006;
        pos.current[i].x += (pos.current[i - 1].x - pos.current[i].x) * Math.max(lag, 0.04);
        pos.current[i].y += (pos.current[i - 1].y - pos.current[i].y) * Math.max(lag, 0.04);
      }

      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const scale = 1 - i * 0.045;
        const alpha = 1 - i * 0.05;
        dot.style.left = `${pos.current[i].x}px`;
        dot.style.top  = `${pos.current[i].y}px`;
        dot.style.transform = `translate(-50%,-50%) scale(${Math.max(scale, 0.05)})`;
        dot.style.opacity = Math.max(alpha, 0).toFixed(2);
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="cursor-dot"
          style={{
            width: `${8 - i * 0.2}px`,
            height: `${8 - i * 0.2}px`,
            opacity: 0,
          }}
        />
      ))}
    </>
  );
}
