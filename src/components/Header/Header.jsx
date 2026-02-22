import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import auroicon from "../../assets/images/auro.png";
import "./header.css";
import ThemeToggle from "./ThemeToggle";

const services = [
  { label: "Layout Development", id: "layout-development" },
  { label: "Sale of Properties", id: "sale-of-properties" },
  { label: "Constructions", id: "constructions" },
  { label: "Interior Solutions", id: "interior-solutions" },
  { label: "Home Automations", id: "home-automation" },
  { label: "Financial Services", id: "financial-services" },
];

const projects = [
  { label: "Projects In Bangalore", id: "projects-in-bangalore" },
  { label: "Projects In Goa", id: "projects-in-goa" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleNav = (e) => {
    e.stopPropagation();
    setNavOpen((p) => {
      const next = !p;
      if (!next) {
        setServicesOpen(false);
        setProjectsOpen(false);
      }
      return next;
    });
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen((p) => {
      const next = !p;
      if (next) setProjectsOpen(false); // ✅ close projects if services opened
      return next;
    });
  };

  const toggleProjects = (e) => {
    e.stopPropagation();
    setProjectsOpen((p) => {
      const next = !p;
      if (next) setServicesOpen(false); // ✅ close services if projects opened
      return next;
    });
  };

  const goService = (id) => {
    setServicesOpen(false);
    setProjectsOpen(false);
    setNavOpen(false);
    navigate(`/services#${id}`);
  };

  const goProject = (id) => {
    setServicesOpen(false);
    setProjectsOpen(false);
    setNavOpen(false);
    navigate(`/projects#${id}`);
  };

  return (
    <header className="sticky-top auro-sticky">
      <nav className="navbar navbar-expand-lg auro-header">
        <div className="container">
          {/* LOGO */}
          <Link to="/" className="navbar-brand d-flex align-items-center auro-brand">
            <img src={auroicon} alt="Auro logo" className="auro-logo" />
            <div className="d-flex flex-column auro-brand-text">
              <span className="auro-title">AURO</span>
              <span className="auro-subtitle">BUILDTECH</span>
            </div>
          </Link>

          {/* HAMBURGER */}
          <button
            className="navbar-toggler auro-toggler"
            type="button"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon auro-toggler-icon"></span>
          </button>

          {/* NAV COLLAPSE */}
          <div
            className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}
            id="auroNav"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="navbar-nav mx-auto gap-lg-4 align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                    setProjectsOpen(false);
                  }}
                >
                  Home
                </NavLink>
              </li>

              {/* SERVICES DROPDOWN */}
              <li className={`nav-item dropdown ${servicesOpen ? "show" : ""}`}>
                <button
                  className="nav-link auro-link dropdown-toggle auro-dropbtn"
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={toggleServices}
                >
                  Services
                </button>

                <ul className={`dropdown-menu auro-dropdown ${servicesOpen ? "show" : ""}`}>
                  {services.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        className="dropdown-item auro-dd-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          goService(s.id);
                        }}
                      >
                        {s.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>

              {/* ✅ PROJECTS DROPDOWN (same functionality) */}
              <li className={`nav-item dropdown ${projectsOpen ? "show" : ""}`}>
                <button
                  className="nav-link auro-link dropdown-toggle auro-dropbtn"
                  type="button"
                  aria-expanded={projectsOpen}
                  onClick={toggleProjects}
                >
                  Projects
                </button>

                <ul className={`dropdown-menu auro-dropdown ${projectsOpen ? "show" : ""}`}>
                  {projects.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        className="dropdown-item auro-dd-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          goProject(p.id);
                        }}
                      >
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
{/* About */}
              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/about"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                    setProjectsOpen(false);
                  }}
                >
                  About
                </NavLink>
              </li>


              {/* CONTACT */}
              <li className="nav-item">
                <NavLink
                  className="nav-link auro-link"
                  to="/contact"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                    setProjectsOpen(false);
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>

            {/* RIGHT SIDE */}
            <div
              className="d-flex align-items-center gap-2 auro-right"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href="#contact"
                className="btn btn-consult"
                onClick={(e) => {
                  e.stopPropagation();
                  setNavOpen(false);
                  setServicesOpen(false);
                  setProjectsOpen(false);
                }}
              >
                Schedule Consultation
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}