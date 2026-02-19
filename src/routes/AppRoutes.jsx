import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ padding: 50 }}><center><Loader /></center></div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
