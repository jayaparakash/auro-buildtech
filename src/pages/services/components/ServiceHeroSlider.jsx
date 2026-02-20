import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Reveal from "../../../components/animations/Reveal";
import "./serviceHeroSlider.css"

const slides = [
  {
    eyebrow: "Premium Construction Services",
    title: "Commercial Projects",
    subtitle: "Spaces That Drive Business Success",
    desc: "Creating functional, inspiring commercial environments that enhance productivity and reflect your brand identity.",
    stats: [
      { value: "10+", label: "Projects Completed" },
      { value: "5M+", label: "Sq Ft Built" },
      { value: "100%", label: "On-Time Delivery" },
    ],
    img: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  
  {
    eyebrow: "Smart Home Automation",
    title: "Home Automation",
    subtitle: "Comfort Meets Security",
    desc: "Smart living made simple — automate lighting, security, climate, and control your home from anywhere.",
    stats: [
      { value: "24/7", label: "Monitoring" },
      { value: "30%", label: "Energy Savings" },
      { value: "1 App", label: "Full Control" },
    ],
    img: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function ServiceHeroSlider() {
  return (
    <section className="shsWrap">
      <div className="container">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          speed={650}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="shsSwiper"
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="shsSlide">
                {/* LEFT */}
                <div className="shsLeft">
                  <Reveal y={24}>
                    <div className="shsEyebrow">
                      <span className="shsDot" />
                      {s.eyebrow}
                    </div>

                    <h1 className="shsTitle">{s.title}</h1>
                    <h3 className="shsSub">{s.subtitle}</h3>
                    <p className="shsDesc">{s.desc}</p>

                    <div className="shsDivider" />

                    <div className="shsStats">
                      {s.stats.map((st) => (
                        <div className="shsStat" key={st.label}>
                          <div className="shsStatValue">{st.value}</div>
                          <div className="shsStatLabel">{st.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="shsActions">
                      <a href="#contact" className="btn shsBtnPrimary">
                        <i className="bi bi-calculator me-2" />
                        Get Cost Estimate
                      </a>

                      <a href="#contact" className="btn shsBtnOutline">
                        <i className="bi bi-calendar2-week me-2" />
                        Schedule Consultation
                      </a>
                    </div>
                  </Reveal>
                </div>

                {/* RIGHT */}
                <div className="shsRight">
                  <Reveal y={24}>
                    <div className="shsImgCard">
                      <img src={s.img} alt={s.title} />
                    </div>
                  </Reveal>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}