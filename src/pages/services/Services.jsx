import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { servicesMap } from "./servicesMap";

export default function Services() {
  const location = useLocation();

  // ✅ Scroll to section when /services#id
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [location.hash]);

  return (
    <section className="container py-5">
      <h1 className="fw-bold text-center">Our Services</h1>
      <p className="text-center mb-4" style={{ opacity: 0.75 }}>
        Select a service from the navbar dropdown to jump directly.
      </p>

      {servicesMap.map((s) => {
        const Comp = s.component;
        return <Comp key={s.id} id={s.id} title={s.title} />;
      })}
    </section>
  );
}