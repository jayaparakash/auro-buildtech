import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen/SplashScreen";


const Home = lazy(() => import("../pages/Home/Home"));

export default function AppRoutes() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 2500); // ✅ 2.5 seconds
    return () => clearTimeout(t);
  }, []);

  // ✅ Always show splash first for 2.5s
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SplashScreen />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/srevices" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
