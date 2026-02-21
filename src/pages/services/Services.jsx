import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import { servicesData } from "./servicesMap";
import ServiceSection from "./sections/ServiceSection/ServiceSection";
import ServiceModal from "../../components/modals/ServiceModal";
import OurProcess from "./sections/OurProcess/OurProcess";



const ServicesQuoteCarousel = lazy(() => import("./sections/ServiceQuoteBanner/ServicesQuoteCarousel"));

function BlockLoader({ h = 260 }) {
  return (
    <div
      style={{
        height: h,
        borderRadius: 16,
        background: "rgba(0,0,0,0.05)",
      }}
    />
  );
}

export default function Services() {
  const location = useLocation();

  // ✅ Scroll to section when /services#id
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1);

    // wait a bit because lazy sections may mount after
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 450);

    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <PageTransitionE>
      <section className="container py-5">

 
           <ServiceModal />
        
      
        {/* Hero carousel top */}
        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={30}>
              <ServicesQuoteCarousel />
            </Reveal>
          </Suspense>
        </LazySection>

        {/* Page heading */}
        <Reveal y={18}>
          <h1 className="fw-bold text-center mt-5">Our Services</h1>
        
        </Reveal>

        {/* ✅ Services sections (lazy + smooth reveal for each) */}
        {servicesData.map((s) => (
        <ServiceSection
          key={s.id}
          id={s.id}
          title={s.title}
          eyebrow={s.eyebrow}
          desc1={s.desc1}
          desc2={s.desc2}
          desc3={s.desc3}
          img={s.img}
        />
      ))}


<LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={30}>
              <OurProcess />
            </Reveal>
          </Suspense>
        </LazySection>
      </section>
    </PageTransitionE>
  );
}