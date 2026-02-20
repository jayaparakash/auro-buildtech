import "./serviceBanner.css";
import Reveal from "../../../components/animations/Reveal";

export default function ServiceBanner() {
  return (
    <section className="serviceHero">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <Reveal y={30}>
              <h1 className="serviceHeroTitle">
                Engineered to Build. <span>Designed to Elevate.</span>
              </h1>

              <p className="serviceHeroDesc">
                From plotted developments to smart-enabled homes, AURO BUILDTECH
                delivers precision construction, refined interiors, and intelligent automation —
                all under one trusted name.
              </p>

              <p className="serviceHeroTag">
                Commercial. Residential. Smart Living. Financial Guidance.
              </p>

              <div className="d-flex gap-3 flex-wrap mt-4">
                <a href="#services" className="btn serviceHeroBtnPrimary">
                  Explore Our Services
                </a>

                <a href="#contact" className="btn serviceHeroBtnOutline">
                  Get Consultation
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <Reveal y={40}>
              <div className="serviceHeroImages">

                {/* MAIN IMAGE */}
                <div className="serviceImgMain">
                  <img
                    src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                    alt="Construction"
                  />
                </div>

                {/* SIDE IMAGES */}
                <div className="serviceImgSideTop">
                  <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Interior Design"
                  />
                </div>

                <div className="serviceImgSideBottom">
                  <img
                    src="https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg"
                    alt="Home Automation"
                  />
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}