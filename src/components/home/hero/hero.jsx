import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./hero.css";

const variations = [
  {
    command: "./init-identity.sh",
    log1: "[OK] Protocol loaded. Ideation connected.",
    log2: "[OK] Compiling production ready assets...",
    title: <>We Control the <span className="txt-ffd">Genesis</span> of Your Digital Identity.</>,
    subtitle: "From raw ideation to flawless production. We engineer scalable platforms, premium brands, and digital dominance."
  },
  {
    command: "./build-ui-ux.sh",
    log1: "[OK] Glassmorphism engine initialized.",
    log2: "[OK] Responsive grid locked.",
    title: <>We Design the <span className="txt-ffd">Interfaces</span> of Tomorrow.</>,
    subtitle: "Captivating aesthetics paired with seamless user experiences. We turn complex data into beautiful, intuitive layouts."
  },
  {
    command: "./deploy-frontend.sh --optimize",
    log1: "[OK] React components bundled.",
    log2: "[OK] Hydration successful. 60fps unlocked.",
    title: <>We Engineer the <span className="txt-ffd">Frontend</span> Experience.</>,
    subtitle: "Lightning-fast, highly interactive web applications built on modern frameworks for maximum performance."
  },
  {
    command: "node system-backend.js --scale=global",
    log1: "[OK] Database connection established.",
    log2: "[OK] API Gateway routing enabled.",
    title: <>We Architect the <span className="txt-ffd">Backend</span> Infrastructure.</>,
    subtitle: "Secure, scalable, and robust server-side solutions designed to handle millions of requests without breaking a sweat."
  },
  {
    command: "./launch-operations.sh",
    log1: "[OK] Marketing funnels deployed.",
    log2: "[OK] Growth metrics tracking live.",
    title: <>We Accelerate Your <span className="txt-ffd">Business</span> Growth.</>,
    subtitle: "End-to-end digital solutions that don't just look good, but actively drive revenue and scale your operations."
  }
];

function Hero() {
  const [variationIndex, setVariationIndex] = useState(0);
  const [phase, setPhase] = useState("booting"); // "booting" | "display"

  useEffect(() => {
    let timer;
    if (phase === "booting") {
      // Allow the terminal typing sequence to play out
      timer = setTimeout(() => {
        setPhase("display");
      }, 3500);
    } else if (phase === "display") {
      // Hold the title on screen, then restart cycle
      timer = setTimeout(() => {
        setVariationIndex((prev) => (prev + 1) % variations.length);
        setPhase("booting");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const currentData = variations[variationIndex];

  return (
    <div className="overflow-hidden" style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }}>
      {/* Background Element */}
      <div className="position-absolute w-100 h-100" style={{ top: 0, left: 0, zIndex: 0, opacity: 0.1, background: "radial-gradient(circle at center, #ffd800 0%, transparent 60%)" }}></div>

      <div className="container position-relative text-center d-flex flex-column justify-content-center align-items-center h-100" style={{ zIndex: 1 }}>

        <AnimatePresence mode="wait">
          {phase === "booting" ? (
            <motion.div
              key={`terminal-${variationIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="txt-ffd ff-mono text-start"
              style={{ fontSize: "1.2rem", maxWidth: '600px', width: '100%', fontFamily: 'monospace' }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "linear" }}
                style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
              >
                &gt; root@control-genesis:~$ {currentData.command}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-2 text-success"
              >
                {currentData.log1}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 }}
                className="mt-1 text-success"
              >
                {currentData.log2}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={`hero-content-${variationIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-100 d-flex flex-column align-items-center"
            >
              <motion.div
                className="txt-ff fw-700 ff-gro"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", lineHeight: 1.1, maxWidth: '1000px' }}
              >
                {currentData.title}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-4 txt-f5 fs-19"
                style={{ maxWidth: '650px' }}
              >
                {currentData.subtitle}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default Hero;
