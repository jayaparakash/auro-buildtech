import { useEffect } from "react";
import "./CursorDust.css"

export default function CursorDust() {
  useEffect(() => {
    let last = 0;

    const spawnDust = (x, y) => {
      const dust = document.createElement("span");
      dust.className = "dust-particle";

      dust.style.left = x + "px";
      dust.style.top = y + "px";

      // random direction movement
      const dx = (Math.random() - 0.5) * 80;
      const dy = (Math.random() - 0.5) * 40;

      dust.style.setProperty("--dx", `${dx}px`);
      dust.style.setProperty("--dy", `${dy}px`);

      document.body.appendChild(dust);

      setTimeout(() => dust.remove(), 1000);
    };

    const handleMove = (x, y) => {
      const now = Date.now();
      if (now - last < 30) return; // throttle
      last = now;

      // create 2 particles per move
      for (let i = 0; i < 2; i++) {
        spawnDust(x, y);
      }
    };

    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);

    const onTouchMove = (e) => {
      const touch = e.touches?.[0];
      if (!touch) return;
      handleMove(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return null;
}
