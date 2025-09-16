// src/components/ParticlesBG.jsx
import { useEffect, useRef } from "react";

export default function ParticlesBG({
  count = 60,
  speed = 0.25,
  connect = false, // set true se quiser linhas entre partículas
}) {
  const ref = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    function resize() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
    }
    resize();
    window.addEventListener("resize", resize);

    // init
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed * dpr,
        vy: (Math.random() - 0.5) * speed * dpr,
        r: Math.random() * 1.8 * dpr + 0.6 * dpr,
      });
    }
    particles.current = arr;

    function step() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // cor depende do tema
      const dark = document.documentElement.classList.contains("dark");
      ctx.fillStyle = dark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)";
      const lineColor = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";

      // move/desenha
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // conexões opcionais
      if (connect) {
        ctx.strokeStyle = lineColor;
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            const a = arr[i], b = arr[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < (90 * dpr) ** 2) {
              ctx.globalAlpha = 0.35 * (1 - d2 / (90 * dpr) ** 2);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [count, speed, connect]);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
