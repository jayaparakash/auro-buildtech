import { useMemo, useState } from "react";
import "./ourProcess.css";

import intialcons from '../../../../assets/images/serviceourprocess/intialcons.jpeg'
import Constructionphase from '../../../../assets/images/serviceourprocess/Constructionphase.jpeg'
import designplan from '../../../../assets/images/serviceourprocess/designplan.jpeg'
import handover from '../../../../assets/images/serviceourprocess/handover.jpeg'
import qualityInc from '../../../../assets/images/serviceourprocess/qualityInc.jpeg'
import approval from '../../../../assets/images/serviceourprocess/approval.jpeg'
export default function OurProcess() {
  const steps = useMemo(
    () => [
      {
        id: 1,
        title: "Initial Consultation",
        time: "1-2 Days",
        short:
          "We begin with a comprehensive consultation to understand your vision, requirements, budget, and timeline.",
        heroImg:intialcons,      
          included: [
          "Site assessment and measurements",
          "Budget discussion and planning",
          "Timeline expectations review",
          "Material preferences exploration",
        ],
      },
      {
        id: 2,
        title: "Design & Planning",
        time: "1-3 Weeks",
        short:
          "Detailed plans, 3D visualizations, and collaboration to refine every detail.",
        heroImg:designplan
,        included: [
          "Floor plans & elevations",
          "3D views and revisions",
          "Material & finish selection",
          "Final scope confirmation",
        ],
      },
      {
        id: 3,
        title: "Permits & Approvals",
        time: "2-4 Weeks",
        short:
          "We handle permit applications and approvals, ensuring compliance with local regulations.",
        heroImg: approval, 
                included: [
          "Approval-ready documentation",
          "Local compliance checks",
          "Permit submissions support",
          "Clearance follow-ups",
        ],
      },
      {
        id: 4,
        title: "Construction Phase",
        time: "Varies by Project",
        short:
          "Skilled craftsmen bring the project to life with regular updates and quality checkpoints.",
        heroImg:Constructionphase,
        included: [
          "Milestone-based execution",
          "Daily supervision & safety",
          "Quality checks at key stages",
          "Progress updates",
        ],
      },
      {
        id: 5,
        title: "Quality Inspection",
        time: "3-5 Days",
        short:
          "Rigorous quality checks ensure every aspect meets our standards and your expectations.",
        heroImg:qualityInc,
        included: [
          "Material & workmanship review",
          "Finishing checks",
          "Snag list and fixes",
          "Final compliance review",
        ],
      },
      {
        id: 6,
        title: "Final Walkthrough & Handover",
        time: "1 Day",
        short:
          "We walkthrough systems and features. You receive documentation, warranties and maintenance guides.",
        heroImg: handover, 
        included: [
          "Final walkthrough session",
          "Handover documentation",
          "Warranty details",
          "Maintenance guidance",
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(steps[0]);
  const activeIndex = steps.findIndex((s) => s.id === active.id) + 1;

  return (
    <section className="opWrap">
      <div className="opHead">
        <div className="opKicker">Our Process</div>
        <h2 className="opTitle">From Vision to Reality</h2>
        <p className="opSub">
          Our proven six-step process ensures your project is completed on time,
          within budget, and exceeds expectations at every stage.
        </p>
      </div>

      <div className="opGrid">
        {/* LEFT LIST */}
        <div className="opLeft">
          {steps.map((s) => {
            const isActive = s.id === active.id;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s)}
                className={`opStepCard ${isActive ? "active" : ""}`}
              >
                <div className="opStepTop">
                  <h4 className="opStepTitle">{s.title}</h4>
                  <span className="opStepTime">{s.time}</span>
                </div>
                <p className="opStepDesc">{s.short}</p>
              </button>
            );
          })}
        </div>

        {/* RIGHT DETAILS */}
        <div className="opRight">
          <div className="opDetail">
            <div className="opHero">
              <img src={active.heroImg} alt={active.title} />
              <div className="opHeroShade" />
              <div className="opHeroBadge">Step {activeIndex} of 6</div>
              <h3 className="opHeroTitle">{active.title}</h3>
            </div>

            <div className="opBody">
              <p className="opBodyText">{active.short}</p>

              <div className="opIncluded">
                <div className="opIncludedTitle">WHAT&apos;S INCLUDED</div>
                <ul className="opIncludedList">
                  {active.included.map((item) => (
                    <li key={item}>
                      <span className="opCheck">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}