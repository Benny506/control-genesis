import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { FaPinterest, FaDribbble, FaFigma } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import Lottie from 'lottie-react';
import thinkingAnimation from '../../../../assets/lotties/Meditating Brain.json';

export default function Phase2Inspiration({ scrollYProgress }) {
  // Master opacity for the entire inspiration phase (0.15 - 0.25)
  const inspOpacity = useTransform(scrollYProgress, [0.15, 0.16, 0.24, 0.25], [0, 1, 1, 0]);
  // Remove from DOM when finished to save performance
  const inspDisplay = useTransform(scrollYProgress, [0, 0.25, 0.251], ["flex", "flex", "none"]);

  // --- SEQUENTIAL ICON MOVEMENT (Spaced over 0.15 - 0.25) ---
  const dribX = useTransform(scrollYProgress, [0.15, 0.17], ["30vw", "0vw"]);
  const dribY = useTransform(scrollYProgress, [0.15, 0.17], ["-25vh", "10vh"]);
  const dribOpacity = useTransform(scrollYProgress, [0.15, 0.155, 0.165, 0.17], [0, 1, 1, 0]);

  const pinX = useTransform(scrollYProgress, [0.17, 0.19], ["-30vw", "0vw"]);
  const pinY = useTransform(scrollYProgress, [0.17, 0.19], ["-25vh", "10vh"]);
  const pinOpacity = useTransform(scrollYProgress, [0.17, 0.175, 0.185, 0.19], [0, 1, 1, 0]);

  const camX = useTransform(scrollYProgress, [0.19, 0.21], ["30vw", "0vw"]);
  const camY = useTransform(scrollYProgress, [0.19, 0.21], ["-25vh", "10vh"]);
  const camOpacity = useTransform(scrollYProgress, [0.19, 0.195, 0.205, 0.21], [0, 1, 1, 0]);

  const figX = useTransform(scrollYProgress, [0.21, 0.23], ["-20vw", "0vw"]);
  const figY = useTransform(scrollYProgress, [0.21, 0.23], ["-35vh", "10vh"]);
  const figOpacity = useTransform(scrollYProgress, [0.21, 0.215, 0.225, 0.23], [0, 1, 1, 0]);

  const conduitOpacity = useTransform(scrollYProgress, [0.15, 0.17], [0, 1]);

  // --- 1. THE LIGHTBULB (LIQUID FILLING) ---
  const bulbDropShadow = useTransform(scrollYProgress,
    [0.15, 0.17, 0.19, 0.21, 0.23],
    [
      "drop-shadow(0 0 0px rgba(255, 216, 0, 0))",
      "drop-shadow(0 0 10px rgba(255, 216, 0, 0.3))",
      "drop-shadow(0 0 30px rgba(255, 216, 0, 0.6))",
      "drop-shadow(0 0 60px rgba(255, 216, 0, 0.8))",
      "drop-shadow(0 0 120px rgba(255, 216, 0, 1))"
    ]
  );

  const fillY = useTransform(scrollYProgress, [0.15, 0.17, 0.19, 0.21, 0.23], [105, 80, 50, 25, 0]);
  const fillHeight = useTransform(scrollYProgress, [0.15, 0.17, 0.19, 0.21, 0.23], [0, 25, 55, 80, 105]);

  // --- 2. MINI BLUEPRINT CARD (SEQUENTIAL ASSEMBLY) ---
  const cardOpacity = useTransform(scrollYProgress, [0.15, 0.16], [0, 1]);
  const cardStep1 = useTransform(scrollYProgress, [0.15, 0.17], [0, 1]); // Header
  const cardStep2 = useTransform(scrollYProgress, [0.17, 0.19], [0, 1]); // Sidebar + Main Box
  const cardStep3 = useTransform(scrollYProgress, [0.19, 0.21], [0, 1]); // Skeletons inside Main Box
  const cardStep4 = useTransform(scrollYProgress, [0.21, 0.23], [0, 1]); // Bright glowing button/chart

  const cardGlow = useTransform(scrollYProgress,
    [0.15, 0.21, 0.23],
    [
      "0 0 0px rgba(13, 110, 253, 0)",
      "0 0 20px rgba(13, 110, 253, 0.2)",
      "0 0 60px rgba(13, 110, 253, 0.6)"
    ]
  );

  // --- FINAL TRANSITIONS ---
  const topRowOpacity = useTransform(scrollYProgress, [0.15, 0.23, 0.235, 0.24], [1, 1, 0, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.16, 0.23, 0.24], [0, 1, 1, 0]);


  // ==========================================
  // THE THINKING ENGINE (LOTTIE)
  // ==========================================

  const charContainerOpacity = useTransform(scrollYProgress, [0.15, 0.24, 0.25], [1, 1, 0]);
  const charScale = useTransform(scrollYProgress, [0.15, 0.25], [1, 1.2]);

  return (
    <motion.div
      className="position-absolute w-100 h-100 flex-column align-items-center justify-content-center pointer-events-none z-3"
      style={{ opacity: inspOpacity, display: inspDisplay }}
    >
      <motion.div className="text-center position-absolute top-0 mt-5 z-2" style={{ opacity: textOpacity }}>
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: '3rem' }}>The <span className="text-warning">Inspiration</span>.</h2>
        <p className="txt-f5 fs-19 mt-2">Gathering references, synthesizing ideas.</p>
      </motion.div>

      {/* THE THINKING ENGINE (CHARACTER) */}
      <div className="position-absolute d-flex flex-column align-items-center justify-content-end" style={{ zIndex: 5, height: '420px', top: '35vh' }}>

        {/* TOP ROW: Bulb (Left) & Blueprint Card (Right) */}
        <motion.div
          className="d-flex align-items-end justify-content-center gap-5 w-100 mb-1"
          style={{ opacity: topRowOpacity }}
        >
          {/* CUSTOM LIQUID LIGHTBULB CORE */}
          <motion.div
            className="d-flex align-items-center justify-content-center"
            style={{ width: '80px', height: '100px', filter: bulbDropShadow, zIndex: 2 }}
          >
            <svg viewBox="0 0 100 120" width="100%" height="100%" style={{ overflow: 'visible' }}>
              <defs>
                <clipPath id="liquidFillMask">
                  <motion.rect x="0" width="100" y={fillY} height={fillHeight} />
                </clipPath>
              </defs>
              <path d="M 50,5 C 20,5 5,25 5,50 C 5,65 15,75 30,85 L 30,100 L 70,100 L 70,85 C 85,75 95,65 95,50 C 95,25 80,5 50,5 Z" fill="rgba(255,255,255,0.02)" stroke="#444" strokeWidth="3" />
              <motion.path d="M 50,5 C 20,5 5,25 5,50 C 5,65 15,75 30,85 L 30,100 L 70,100 L 70,85 C 85,75 95,65 95,50 C 95,25 80,5 50,5 Z" fill="#FFD800" clipPath="url(#liquidFillMask)" />
              <path d="M 40,30 Q 50,20 60,30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 35,45 L 45,35" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
              <path d="M 30,100 L 70,100 L 65,110 L 35,110 Z" fill="#666" />
              <path d="M 35,110 L 65,110 L 60,118 L 40,118 Z" fill="#444" />
              <path d="M 45,118 L 55,118 L 53,122 L 47,122 Z" fill="#222" />
            </svg>
          </motion.div>

          {/* MINI BLUEPRINT CARD */}
          <motion.div
            className="rounded-3 shadow-lg border border-secondary border-opacity-50 p-2 d-flex flex-column gap-2"
            style={{
              opacity: cardOpacity,
              width: '90px', height: '110px',
              background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(5px)',
              boxShadow: cardGlow
            }}
          >
            <motion.div className="w-100 rounded bg-white opacity-25" style={{ opacity: cardStep1, height: '12px' }} />
            <div className="d-flex gap-2 flex-grow-1">
              <motion.div className="rounded bg-white opacity-10" style={{ opacity: cardStep2, width: '20px', height: '100%' }} />
              <motion.div style={{ opacity: cardStep2 }} className="rounded border border-secondary border-opacity-50 flex-grow-1 d-flex flex-column p-1 gap-1">
                <motion.div className="w-75 rounded bg-white opacity-25" style={{ opacity: cardStep3, height: '6px' }} />
                <motion.div className="w-100 rounded bg-white opacity-25" style={{ opacity: cardStep3, height: '6px' }} />
                <motion.div className="w-50 rounded bg-white opacity-25" style={{ opacity: cardStep3, height: '6px' }} />
                <motion.div className="w-100 rounded bg-primary mt-auto" style={{ opacity: cardStep4, height: '16px', boxShadow: '0 0 10px rgba(13, 110, 253, 0.8)' }} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Y-CONDUIT (ANIMATED ENERGY FLOW) */}
        <motion.svg width="300" height="80" viewBox="0 0 300 80" style={{ opacity: conduitOpacity, overflow: 'visible' }} className="my-0">
          {/* Energy flowing to Bulb */}
          <motion.path
            d="M 150 80 C 150 40 80 40 80 0"
            fill="none" stroke="#FFD800" strokeWidth="4"
            strokeLinecap="round" strokeDasharray="10 15"
            animate={{ strokeDashoffset: [25, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
            filter="drop-shadow(0 0 6px #FFD800)"
          />
          {/* Energy flowing to Blueprint Card */}
          <motion.path
            d="M 150 80 C 150 40 220 40 220 0"
            fill="none" stroke="#0d6efd" strokeWidth="4"
            strokeLinecap="round" strokeDasharray="10 15"
            animate={{ strokeDashoffset: [25, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
            filter="drop-shadow(0 0 6px #0d6efd)"
          />
        </motion.svg>

        {/* THE THINKING ENGINE LOTTIE */}
        <motion.div
          className="position-relative"
          style={{ opacity: charContainerOpacity, scale: charScale, zIndex: 2, width: '250px' }}
        >
          <Lottie animationData={thinkingAnimation} loop={true} />
        </motion.div>

      </div>

      {/* --- FLOATING RESOURCE ICONS --- */}

      {/* 1. Dribbble */}
      <motion.div className="position-absolute d-flex flex-column align-items-center gap-2" style={{ x: dribX, y: dribY, opacity: dribOpacity }}>
        <div className="text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '70px', height: '70px', fontSize: '35px', background: '#ea4c89' }}>
          <FaDribbble />
        </div>
        <div className="bg-dark text-white text-opacity-75 fs-12 fw-bold px-3 py-1 rounded-pill border border-secondary border-opacity-50">Dribbble</div>
      </motion.div>

      {/* 2. Pinterest */}
      <motion.div className="position-absolute d-flex flex-column align-items-center gap-2" style={{ x: pinX, y: pinY, opacity: pinOpacity }}>
        <div className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '60px', height: '60px', fontSize: '30px' }}>
          <FaPinterest />
        </div>
        <div className="bg-dark text-white text-opacity-75 fs-12 fw-bold px-3 py-1 rounded-pill border border-secondary border-opacity-50">Pinterest</div>
      </motion.div>

      {/* 3. Unsplash */}
      <motion.div className="position-absolute d-flex flex-column align-items-center gap-2" style={{ x: camX, y: camY, opacity: camOpacity }}>
        <div className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ width: '55px', height: '55px', fontSize: '25px' }}>
          <FiCamera />
        </div>
        <div className="bg-dark text-white text-opacity-75 fs-12 fw-bold px-3 py-1 rounded-pill border border-secondary border-opacity-50">Unsplash</div>
      </motion.div>

      {/* 4. Figma */}
      <motion.div className="position-absolute d-flex flex-column align-items-center gap-2" style={{ x: figX, y: figY, opacity: figOpacity }}>
        <div className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow-lg border border-secondary" style={{ width: '65px', height: '65px', fontSize: '30px' }}>
          <FaFigma />
        </div>
        <div className="bg-dark text-white text-opacity-75 fs-12 fw-bold px-3 py-1 rounded-pill border border-secondary border-opacity-50">Figma UI Kits</div>
      </motion.div>

    </motion.div>
  );
}
