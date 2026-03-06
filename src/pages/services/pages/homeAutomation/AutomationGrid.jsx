import { useEffect, useState } from "react";
import { automationSystems } from "./homeAutomationData";
import AutomationModal from "./AutomationModal";

export default function AutomationGrid() {
  const [activeSystem, setActiveSystem] = useState(null);
  const [radius, setRadius] = useState(360);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 576) {
        setRadius(220);
      } else if (window.innerWidth <= 992) {
        setRadius(280);
      } else {
        setRadius(360);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const total = automationSystems.length;

  return (
    <>
      <section className="ha-rotateSection">
        <div className="ha-rotateWrapper">
          <div className="ha-rotateCarousel">
            {automationSystems.map((system, index) => {
              const angle = (360 / total) * index;

              return (
                <button
                  key={system.id}
                  type="button"
                  className="ha-rotateCard"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  }}
                  onClick={() => setActiveSystem(system)}
                >
                  <div className="ha-rotateCardInner">
                    <div className="ha-rotateImgWrap">
                      <img
                        src={system.image}
                        alt={system.title}
                        className="ha-rotateImg"
                      />
                    </div>

                    <h3 className="ha-rotateTitle">{system.title}</h3>
                    <p className="ha-rotateText">Tap to explore</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {activeSystem && (
        <AutomationModal
          system={activeSystem}
          onClose={() => setActiveSystem(null)}
        />
      )}
    </>
  );
}