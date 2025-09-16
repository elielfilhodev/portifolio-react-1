// src/hooks/useScrollSpy.js
import { useEffect, useState } from "react";

/**
 * Scrollspy robusto baseado em scrollY (fallback universal).
 * Marca como ativo a última seção cujo topo já passou do viewport, com um offset.
 */
export default function useScrollSpy(hrefs, { offset = 72 } = {}) {
  const [active, setActive] = useState(hrefs?.[0] ?? null);

  useEffect(() => {
    const ids = (hrefs || []).map((h) => h.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!els.length) return;

    const handler = () => {
      const y = window.scrollY + offset + 1;
      let current = `#${els[0].id}`;
      for (const el of els) {
        if (el.offsetTop <= y) current = `#${el.id}`;
      }
      setActive(current);
    };

    handler(); // estado inicial
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [hrefs, offset]);

  return active;
}
