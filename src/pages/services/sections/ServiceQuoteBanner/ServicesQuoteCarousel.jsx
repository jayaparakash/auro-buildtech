import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import banner2 from "../../../../assets/images/servicesBannerImgs/sbanner2.jpeg"
import banner1 from "../../../../assets/images/servicesBannerImgs/banner4.jpg"
import "./servicesQuoteCarousel.css";
import Reveal from "../../../../components/animations/Reveal";

const slides = [
  // {
  //   eyebrow: "Premium Construction Services",
  //   titleA: "Commercial Projects",
  //   titleB: "Spaces That Drive Business Success",
  //   desc:
  //     "Creating functional, inspiring commercial environments that enhance productivity and reflect your brand identity.",
  //   primaryBtn: "Get Cost Estimate",
  //   secondaryBtn: "Schedule Consultation",
  //   features: [
  //     { title: "10+", sub: "Projects Completed" },
  //     { title: "5M+", sub: "Sq Ft Built" },
  //     { title: "100%", sub: "On-Time Delivery" },
  //   ],
  //   images: {
  //     big: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     small1:
  //       "https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     small2:
  //       "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   },
  // },

  {
    eyebrow: "Smart Home Automation",
    titleA: "Home Automation",
    titleB: "Comfort Meets Security",
    desc:
      "Smart living made simple — automate lighting, security, climate, and control your home from anywhere.",
    primaryBtn: "Get Cost Estimate",
    secondaryBtn: "Schedule Consultation",
    features: [
      { title: "24/7", sub: "Monitoring" },
      { title: "30%", sub: "Energy Savings" },
      { title: "1 App", sub: "Full Control" },
    ],
    images: {
      big: banner2,
      small1:banner1,
      small2:
        "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  },
];

export default function ServicesQuoteCarousel() {
  return (
    <section className="sqcWrap">
      <div className="container">
        {/* <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          speed={650}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="sqcSwiper"
        > */}
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="sqcGrid">
                {/* LEFT: IMAGE COLLAGE */}
                <div className="sqcLeft">
                  <Reveal y={18}>
                    <div className="sqcCollage">
                      <div className="sqcBig">
                        <img src={s.images.big} alt={s.titleA} />
                      </div>

                      <div className="sqcSmallCol">
                        <div className="sqcSmall">
                          <img src={s.images.small1} alt={s.titleA} />
                        </div>
                        <div className="sqcSmall">
                          <img src={s.images.small2} alt={s.titleA} />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* RIGHT: CONTENT */}
                <div className="sqcRight">
                  <Reveal y={18}>
                    <div className="sqcEyebrow">
                      <span className="sqcDot" />
                      {s.eyebrow}
                    </div>

                    <h2 className="sqcTitle">
                      {s.titleA} <span>{s.titleB}</span>
                    </h2>

                    <p className="sqcDesc">{s.desc}</p>

                    <div className="sqcActions">
                      <a href="#contact" className="btn sqcPrimary">
                        {s.primaryBtn}
                      </a>
                      <a href="#contact" className="btn sqcOutline">
                        {s.secondaryBtn}
                      </a>
                    </div>

                    <div className="sqcFeatures">
                      {s.features.map((f) => (
                        <div className="sqcFeat" key={f.sub}>
                          <div className="sqcFeatTitle">{f.title}</div>
                          <div className="sqcFeatSub">{f.sub}</div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </div>
    </section>
  );
}