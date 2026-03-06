import { Navigate, Link, useParams } from "react-router-dom";
import PageTransitionE from "../../components/animations/PageTransition";
import Reveal from "../../components/animations/Reveal";
import { servicesData } from "./servicesMap";
import "./serviceSingle.css";

/* ✅ Import individual pages (create one by one) */
import LayoutDevelopment from "./pages/LayoutDevelopment";
import SaleOfProperties from "./pages/SaleOfProperties";
import Constructions from "./pages/Constructions";
import InteriorSolutions from "./pages/InteriorSolutions";
import HomeAutomation from "./pages/HomeAutomation";
// import FinancialServices from "./pages/FinancialServices";

export default function ServiceSingle() {
  const { serviceId } = useParams();

  const service = servicesData.find((s) => s.id === serviceId);
  if (!service) return <Navigate to="/services" replace />;

  const bannerImg = Array.isArray(service.img) ? service.img[0] : service.img;

  // ✅ Breadcrumb services click should open dropdown
  const openServicesMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.dispatchEvent(new Event("open-services-dropdown"));
  };

  // ✅ Component map (render each service page individually)
  const servicePageMap = {
    "layout-development": LayoutDevelopment,

    // Add these later (when you create those files)
    "sale-of-properties": SaleOfProperties,
    constructions: Constructions,
    "interior-solutions": InteriorSolutions,
    "home-automation": HomeAutomation,
    // "financial-services": FinancialServices,
  };

  const PageComponent = servicePageMap[serviceId];

  return (
    <PageTransitionE>
      {/* ✅ Banner */}
      <section className="svcHero" style={{ "--svcHeroImg": `url(${bannerImg})` }}>
        <div className="svcHeroOverlay" />

        <div className="container svcHeroInner">
          <Reveal y={14}>
            <p className="svcCrumb">
              <Link to="/" className="svcCrumbLink">Home</Link>
              <span className="svcCrumbSep">»</span>

              {/* ✅ not navigation */}
              <button type="button" className="svcCrumbBtn" onClick={openServicesMenu}>
                Services
              </button>

              <span className="svcCrumbSep">»</span>
              <span className="svcCrumbCurrent">{service.title}</span>
            </p>

            <h1 className="svcHeroTitle">{service.title}</h1>

            <p className="svcHeroSub">
              Build smarter, faster, and premium — with Auro BuildTech
            </p>

            <p className="svcHeroDesc">
              {service.desc1}
              {service.desc2 ? ` ${service.desc2}` : ""}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ✅ Individual page if exists, else fallback overview */}
      {PageComponent ? (
        <PageComponent />
      ) : (
        <section className="container py-5">
          <Reveal y={16}>
            <div className="svcContentCard">
              <h2 className="svcContentTitle">Overview</h2>
              {service.desc1 && <p className="svcContentText">{service.desc1}</p>}
              {service.desc2 && <p className="svcContentText">{service.desc2}</p>}
              {service.desc3 && <p className="svcContentText">{service.desc3}</p>}
            </div>
          </Reveal>
        </section>
      )}
    </PageTransitionE>
  );
}