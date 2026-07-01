import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Phase2Inspiration from './Phase2Inspiration';
import Phase2Canvas from './Phase2Canvas';

export default function Phase2Blueprint({ scrollYProgress }) {
  // Global Entry / Exit
  const phase2Opacity = useTransform(scrollYProgress, [0.15, 0.18, 0.48, 0.50], [0, 1, 1, 0]);
  const phase2Scale = useTransform(scrollYProgress, [0.15, 0.18, 0.46, 0.50], [0.5, 1, 1, 1.2]);
  const phase2X = useTransform(scrollYProgress, [0.46, 0.50], ["0%", "-100%"]);

  // --- MINI PROFILE CARDS (Shifted Timings) ---
  const uxCardOpacity = useTransform(scrollYProgress, [0.25, 0.26, 0.46, 0.47], [0, 1, 1, 0]);
  const engCardOpacity = useTransform(scrollYProgress, [0.32, 0.33, 0.46, 0.47], [0, 1, 1, 0]);
  const uiCardOpacity = useTransform(scrollYProgress, [0.39, 0.40, 0.46, 0.47], [0, 1, 1, 0]);

  return (
    <motion.div 
      className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ 
        opacity: phase2Opacity, 
        scale: phase2Scale,
        x: phase2X,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* 1. Inspiration Phase (0.15 - 0.22) */}
      <Phase2Inspiration scrollYProgress={scrollYProgress} />

      {/* 2. Drawing Canvas Phase (0.22 - 0.50) */}
      <Phase2Canvas scrollYProgress={scrollYProgress} />
      
      {/* --- DYNAMIC MINI PROFILE CARDS --- */}
      
      {/* Lead UX (Bottom Left) */}
      <motion.div 
        className="position-fixed bottom-0 start-0 m-4 m-md-5 p-3 rounded-pill shadow-lg d-flex align-items-center gap-3 border border-secondary border-opacity-25"
        style={{ background: 'rgba(15, 15, 20, 0.9)', backdropFilter: 'blur(20px)', opacity: uxCardOpacity, zIndex: 100 }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold fs-5 shadow-sm" style={{ width: '40px', height: '40px', background: '#0dcaf0' }}>UX</div>
        <div className="pe-2">
          <div className="txt-ff fw-bold fs-14 lh-1">Alice</div>
          <div className="text-white text-opacity-75 fs-12 mt-1">Lead UX</div>
        </div>
      </motion.div>

      {/* Sys Eng (Bottom Right) */}
      <motion.div 
        className="position-fixed bottom-0 end-0 m-4 m-md-5 p-3 rounded-pill shadow-lg d-flex align-items-center gap-3 border border-secondary border-opacity-25"
        style={{ background: 'rgba(15, 15, 20, 0.9)', backdropFilter: 'blur(20px)', opacity: engCardOpacity, zIndex: 100 }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-5 shadow-sm" style={{ width: '40px', height: '40px', background: '#dc3545' }}>SE</div>
        <div className="pe-2">
          <div className="txt-ff fw-bold fs-14 lh-1">Bob</div>
          <div className="text-white text-opacity-75 fs-12 mt-1">Systems Engineer</div>
        </div>
      </motion.div>

      {/* UI Team (Bottom Left again) */}
      <motion.div 
        className="position-fixed bottom-0 start-0 m-4 m-md-5 p-3 rounded-pill shadow-lg d-flex align-items-center gap-3 border border-secondary border-opacity-25"
        style={{ background: 'rgba(15, 15, 20, 0.9)', backdropFilter: 'blur(20px)', opacity: uiCardOpacity, zIndex: 100 }}
      >
        <div className="rounded-circle d-flex align-items-center justify-content-center text-dark fw-bold fs-5 shadow-sm" style={{ width: '40px', height: '40px', background: '#FFD800' }}>UI</div>
        <div className="pe-2">
          <div className="txt-ff fw-bold fs-14 lh-1">Charlie</div>
          <div className="text-white text-opacity-75 fs-12 mt-1">UI Developer</div>
        </div>
      </motion.div>

    </motion.div>
  );
}
