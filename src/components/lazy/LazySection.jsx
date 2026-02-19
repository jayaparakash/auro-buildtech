import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  rootMargin = "250px",
  placeholderHeight = 200,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={!show ? { minHeight: placeholderHeight } : undefined}>
      {show ? children : null}
    </div>
  );
}
