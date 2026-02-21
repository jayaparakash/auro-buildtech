import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";

const Home = lazy(() => import("../pages/Home/Home"));
const Services = lazy(() => import("../pages/services/Services"));

const Constructions = lazy(() => import("../pages/services/sections/Constructions"));
const InteriorSolutions = lazy(() => import("../pages/services/sections/InteriorSolutions"));
const LayoutDevelopment = lazy(() => import("../pages/services/sections/LayoutDevelopment"));
const HomeAutomation = lazy(() => import("../pages/services/sections/HomeAutomation"));
const SaleOfProperty = lazy(() => import("../pages/services/sections/SaleOfProperties"));
const FinancialServices = lazy(() => import("../pages/services/sections/FinancialServices"));

export default function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true); 

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SplashScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services/constructions" element={<Constructions />} />
          <Route path="/services/interior" element={<InteriorSolutions />} />
          <Route path="/services/layout" element={<LayoutDevelopment />} />
          <Route path="/services/automation" element={<HomeAutomation />} />
          <Route path="/services/sale" element={<SaleOfProperty />} />
          <Route path="/services/finance" element={<FinancialServices />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}