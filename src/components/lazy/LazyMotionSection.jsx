import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function LazyMotionSection({
  children,
  rootMargin = "220px",
  delay = 0,
  y = 28,
  duration = 0.65,
  once = true,
  placeholderHeight = 420,
}) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setMounted(false);
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, once]);

  return (
    <div ref={ref}>
      {mounted ? (
        <motion.div
          initial={{ opacity: 0, y, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration, delay, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <div style={{ minHeight: placeholderHeight }} />
      )}
    </div>
  );
}
export default LazyMotionSection