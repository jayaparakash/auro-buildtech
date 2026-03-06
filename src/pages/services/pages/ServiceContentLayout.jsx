import Reveal from "../../../components/animations/Reveal";
import { ICONS } from "../ServiceIcons";
import "./serviceContentLayout.css";

export default function ServiceContentLayout({ data }) {
  if (!data) return null;

  return (
    <section className="scl-wrap">
      <div className="container">

        {/* TOP GRID */}
        <div className="scl-grid">
          {/* LEFT */}
          <Reveal y={14}>
            <div className="scl-left">
              <h2 className="scl-title">
                {data.aboutTitle}
                <span className="scl-underline" />
              </h2>

              <div className="scl-paras">
                {data.aboutParas?.map((p, i) => (
                  <p key={i} className="scl-text">{p}</p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <Reveal y={14}>
            <div className="scl-right">
              {data.sideImage && (
                <div className="scl-imgCard">
                  <img src={data.sideImage} alt={data.title} className="scl-img" />
                </div>
              )}

              {(data.provideList || data.offerList) && (
                <div className="scl-box">
                  <h3 className="scl-subTitle">
                    {data.provideTitle || data.offerTitle}
                    <span className="scl-underline sm" />
                  </h3>

                  <ul className="scl-list">
                    {(data.provideList || data.offerList)?.map((item, i) => {
                      const keys = data.provideIconKeys || data.offerIconKeys || [];
                      const IconComp = keys[i] ? ICONS[keys[i]] : null;

                      return (
                        <li key={i} className="scl-li">
                          <span className="scl-iconBox">
                            {IconComp ? <IconComp /> : <span className="scl-fallbackDot" />}
                          </span>
                          <span>{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* PROCESS */}
        {data.processSteps?.length > 0 && (
          <Reveal y={16}>
            <div className="scl-section">
              <h3 className="scl-h3">
                {data.processTitle}
                <span className="scl-underline sm" />
              </h3>

              <div className="scl-steps">
                {data.processSteps.map((s, i) => {
                  const IconComp = data.processIconKeys?.[i] ? ICONS[data.processIconKeys[i]] : null;

                  return (
                    <div className="scl-step" key={i}>
                      <div className="scl-stepIconBox">
                        {IconComp ? <IconComp /> : <span>{String(i + 1).padStart(2, "0")}</span>}
                      </div>
                      <div>
                        <div className="scl-stepTitle">{s.title}</div>
                        <div className="scl-stepText">{s.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        )}

        {/* HIGHLIGHTS */}
        {data.highlights?.length > 0 && (
          <Reveal y={16}>
            <div className="scl-section">
              <h3 className="scl-h3">
                {data.highlightsTitle}
                <span className="scl-underline sm" />
              </h3>

              <div className="scl-cards">
                {data.highlights.map((h, i) => (
                  <div className="scl-card" key={i}>
                    <div className="scl-cardTop">
                      <span className="scl-cardDot" />
                      <h4 className="scl-cardTitle">{h.title}</h4>
                    </div>
                    <p className="scl-cardText">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* BOTTOM TEXT */}
        {data.bottomText && (
          <Reveal y={16}>
            <div className="scl-bottomCard">
              <p className="scl-bottomText">{data.bottomText}</p>
            </div>
          </Reveal>
        )}

        {/* CTA */}
        {data.ctaTitle && (
          <Reveal y={16}>
            <div className="scl-cta">
              <div>
                <h3 className="scl-ctaTitle">{data.ctaTitle}</h3>
                <p className="scl-ctaText">{data.ctaText}</p>
              </div>

              <a className="scl-ctaBtn" href={data.ctaLink}>
                {data.ctaBtnText}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}