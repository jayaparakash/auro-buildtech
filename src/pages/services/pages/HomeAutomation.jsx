import { servicesData } from "../servicesMap";
import Reveal from "../../../components/animations/Reveal";
import AutomationGrid from "./homeAutomation/AutomationGrid";
import "./homeAutomation/homeAutomation.css";

export default function HomeAutomation() {
  const data = servicesData.find((s) => s.id === "home-automation");
  if (!data) return null;

  const heroPreview = Array.isArray(data.img) ? data.img[0] : data.img;

  return (
    <section className="ha-wrap">
      <div className="container">


     <Reveal y={18}>
          <div className="ha-sectionHead">
            <h3 className="ha-subTitle">
              Smart Automation Systems
              <span className="ha-underline sm" />
            </h3>
            <p className="ha-subText">
              Tap each system to discover how Auro BuildTech creates stunning,
              intelligent, and connected living spaces.
            </p>
          </div>
        </Reveal>

        <AutomationGrid />






        {/* Intro section below main banner */}
        <Reveal y={14}>
          <div className="ha-intro">
            <div className="ha-introLeft">
              <h2 className="ha-title">
                Home Automation Experience
                <span className="ha-underline" />
              </h2>

              <p className="ha-text">
                Auro BuildTech delivers advanced smart home automation solutions
                that transform daily living into a seamless, secure, and highly
                personalized experience.
              </p>

              <p className="ha-text">
                From intelligent lighting and climate control to surveillance,
                motorized curtains, entertainment, and energy optimization, our
                systems are designed to combine luxury, convenience, and future-ready innovation.
              </p>

              <p className="ha-text">
                Explore each automation feature below. Click any glowing system icon
                to open a premium showcase with its full details, image, and benefits.
              </p>
            </div>

            <div className="ha-introRight">
              <div className="ha-previewCard">
                <img src={heroPreview} alt="Home automation preview" className="ha-previewImg" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature grid */}
   
      </div>
    </section>
  );
}