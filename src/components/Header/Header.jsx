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

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = (e) => {
    e.stopPropagation();
    setNavOpen((p) => {
      const next = !p;
      if (!next) setServicesOpen(false);
      return next;
    });
  };

  const toggleServices = (e) => {
    e.stopPropagation();
    setServicesOpen((p) => !p);
  };

  const goService = (id) => {
    // ✅ close dropdown + close mobile nav for better UX
    setServicesOpen(false);
    setNavOpen(false);

    // ✅ navigate to services page + target section
    navigate(`/services#${id}`);
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
                  }}
                >
                  Home
                </NavLink>
              </li>

              {/* ✅ SERVICES: click-only dropdown */}
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

              <li className="nav-item">
                <a
                  className="nav-link auro-link"
                  href="#projects"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link auro-link"
                  href="#about"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link auro-link"
                  href="#contact"
                  onClick={() => {
                    setNavOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Contact
                </a>
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
