import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import auroicon from "../../assets/images/auro.png";
import "./header.css";
import ThemeToggle from "./ThemeToggle";

const services = [
  "Layout Development",
  "Sale of Properties",
  "Constructions",
  "Interior Solutions",
  "Home Automations",
  "Financial Services",
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleNav = (e) => {
    e.stopPropagation();
    setNavOpen((p) => {
      const next = !p;
      // if navbar is closing, close dropdown also
      if (!next) setServicesOpen(false);
      return next;
    });
  };

  const toggleServices = (e) => {
    e.stopPropagation(); // ✅ important: don't close navbar
    setServicesOpen((p) => !p);
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

          {/* HAMBURGER: ONLY THIS SHOULD OPEN/CLOSE NAV */}
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
            onClick={(e) => e.stopPropagation()} // ✅ prevents any outside close
          >
            <ul className="navbar-nav mx-auto gap-lg-4 align-items-lg-center">
              <li className="nav-item">
                <NavLink className="nav-link auro-link" to="/">
                  Home
                </NavLink>
              </li>

              {/* SERVICES: dropdown should open only */}
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
                    <li key={s}>
                      {/* ✅ do NOT close navbar on click */}
                      <a className="dropdown-item auro-dd-item" href="#services" onClick={(e)=>e.stopPropagation()}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link auro-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link auro-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link auro-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>

            {/* THEME TOGGLE + BUTTON: should NOT close navbar */}
            <div className="d-flex align-items-center gap-2 auro-right" onClick={(e) => e.stopPropagation()}>
           
              <a href="#contact" className="btn btn-consult" onClick={(e)=>e.stopPropagation()}>
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
