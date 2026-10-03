import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Lenis from "lenis";

import Home from "./components/home/home";
import CorporateHome from "./components/corporateHome/CorporateHome";
import Works from "./components/works/works";
import ProjectShowcase from "./components/works/ProjectShowcase";
import { TransitionProvider } from "./context/TransitionContext";
import GlobalLinkInterceptor from "./components/layout/GlobalLinkInterceptor";
import PageTransitionOverlay from "./components/layout/PageTransitionOverlay";

import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <HashRouter>
        <TransitionProvider>
          <GlobalLinkInterceptor />
          <PageTransitionOverlay />
          <Routes>
            <Route path="/" element={<CorporateHome />} />
            {/* <Route path="/developer-view" element={<Home />} /> */}
            <Route path="/works" element={<Works />} />
            <Route path="/works/:slug" element={<ProjectShowcase />} />
          </Routes>
        </TransitionProvider>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
