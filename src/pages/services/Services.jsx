import { lazy, Suspense } from "react";

import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import ServiceModal from "../../components/modals/ServiceModal";
import ClientsStrip from "../Home/ClientsStrip/ClientsStrip";
import ServiceSingle from "./ServiceSingle";

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
  return (
    <PageTransitionE>
      <section className="container py-5">
        <ServiceModal />

        <Reveal y={18}>
          <h1 className="fw-bold text-center mt-5">Our Services</h1>
        </Reveal>


<ServiceSingle />

        <LazySection placeholderHeight={110}>
          <Suspense fallback={<BlockLoader h={110} />}>
            <Reveal delay={0.2}>
              <ClientsStrip />
            </Reveal>
          </Suspense>
        </LazySection>
      </section>
    </PageTransitionE>
  );
}