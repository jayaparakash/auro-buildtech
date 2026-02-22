import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import LazySection from "../../components/lazy/LazySection";
import { lazy, Suspense } from "react";

import "./about.css";
import ClientsStrip from "../Home/ClientsStrip/ClientsStrip";
import StatsCounter from "../Home/StatsCounter/StatsCounter";

const AboutHero = lazy(() => import("./sections/AboutHero"));
const SafetyFirst = lazy(() => import("./sections/SafetyFirst"));
const SafetyProtocols = lazy(() => import("./sections/SafetyProtocols"));

function BlockLoader({ h = 320 }) {
  return (
    <div
      style={{
        height: h,
        borderRadius: 18,
        border: "1px solid var(--border)",
        background: "rgba(0,0,0,0.04)",
      }}
    />
  );
}

 function About() {
  return (
    <PageTransitionE>
      <section className="container py-4 aboutWrap">
        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={26}>
              <AboutHero />
            </Reveal>
          </Suspense>
        </LazySection>


        <LazySection placeholderHeight={520}>
          <Suspense fallback={<BlockLoader h={520} />}>
            <Reveal y={26}>
             <StatsCounter />
            </Reveal>
          </Suspense>
        </LazySection>


        <LazySection placeholderHeight={560}>
          <Suspense fallback={<BlockLoader h={560} />}>
            <Reveal y={26}>
              <SafetyFirst />
            </Reveal>
          </Suspense>
        </LazySection>

        <LazySection placeholderHeight={640}>
          <Suspense fallback={<BlockLoader h={640} />}>
            <Reveal y={26}>
              <SafetyProtocols />
            </Reveal>
          </Suspense>
        </LazySection>


        <LazySection placeholderHeight={640}>
          <Suspense fallback={<BlockLoader h={640} />}>
            <Reveal y={26}>
              <ClientsStrip  />
            </Reveal>
          </Suspense>
        </LazySection>


      </section>
    </PageTransitionE>
  );
}

export default About