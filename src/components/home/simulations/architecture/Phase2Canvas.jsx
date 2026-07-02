import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { FiMousePointer } from 'react-icons/fi';

function useWindowScale() {
  const [scale, setScale] = useState(1.15);

  useEffect(() => {
    const handleResize = () => {
      // The canvas is 900px wide and 600px tall. 
      // Leave horizontal margin by taking 85% of screen width.
      // Leave vertical margin (250px total for title and cards) from screen height.
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      const widthScale = (width * 0.85) / 900;
      const heightScale = Math.max(0.3, (height - 250) / 600);
      
      // Max scale is 1.0 for desktop to prevent touching edges.
      const calculatedScale = Math.min(1.0, widthScale, heightScale);
      setScale(calculatedScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return scale;
}

function TeamCursor({ name, color, startX, startY, endX, endY, progress, timeRange }) {
  const x = useTransform(progress, timeRange, [startX, endX]);
  const y = useTransform(progress, timeRange, [startY, endY]);
  const opacity = useTransform(progress, [timeRange[0], timeRange[0] + 0.02, timeRange[1] - 0.02, timeRange[1]], [0, 1, 1, 0]);

  return (
    <motion.div 
      className="position-absolute d-flex flex-column"
      style={{ x, y, opacity, zIndex: 100 }}
    >
      <FiMousePointer size={24} color={color} style={{ transform: 'rotate(-15deg)', fill: color }} />
      <div 
        className="px-2 py-1 rounded shadow-sm text-dark fw-bold" 
        style={{ background: color, fontSize: '0.7rem', marginTop: '5px', whiteSpace: 'nowrap' }}
      >
        {name}
      </div>
    </motion.div>
  );
}

export default function Phase2Canvas({ scrollYProgress }) {
  const dynamicScale = useWindowScale();

  // --- BACKGROUND AMBIENT GLOWS ---
  const bgUxOpacity = useTransform(scrollYProgress, [0.25, 0.26, 0.32, 0.33], [0, 1, 1, 0]);
  const bgUxX = useTransform(scrollYProgress, [0.25, 0.33], ["-10vw", "10vw"]);
  const bgUxY = useTransform(scrollYProgress, [0.25, 0.33], ["-10vh", "10vh"]);

  const bgEngOpacity = useTransform(scrollYProgress, [0.32, 0.33, 0.39, 0.40], [0, 1, 1, 0]);
  const bgEngX = useTransform(scrollYProgress, [0.32, 0.40], ["10vw", "-10vw"]);
  
  const bgUiOpacity = useTransform(scrollYProgress, [0.39, 0.40, 0.48, 0.50], [0, 1, 1, 0]);
  const bgUiScale = useTransform(scrollYProgress, [0.39, 0.50], [0.8, 1.5]);

  // --- CANVAS ANIMATIONS ---
  // Master opacity for canvas
  const canvasOpacity = useTransform(scrollYProgress, [0.24, 0.25, 0.48, 0.50], [0, 1, 1, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.24, 0.25, 0.48, 0.50], [0, 1, 1, 0]);
  
  // Phase A: Messy Sketch (0.25 - 0.32)
  const messyOpacity = useTransform(scrollYProgress, [0.25, 0.26, 0.31, 0.32], [0, 1, 1, 0]);
  const messyPathLength = useTransform(scrollYProgress, [0.25, 0.30], [0, 1]);

  // Phase B: Structural Outline (0.32 - 0.39)
  const strictOpacity = useTransform(scrollYProgress, [0.32, 0.34], [0, 1]);
  const strictPathLength = useTransform(scrollYProgress, [0.32, 0.37], [0, 1]);

  // Phase C: High Fidelity Fills & Elements (0.39 - 0.48)
  const fillSidebar = useTransform(scrollYProgress, [0.39, 0.41], [0, 1]);
  const fillHeader = useTransform(scrollYProgress, [0.41, 0.43], [0, 1]);
  
  const innerCard1 = useTransform(scrollYProgress, [0.43, 0.45], [0, 1]);
  const innerCard1X = useTransform(scrollYProgress, [0.43, 0.45], [-20, 0]);
  
  const innerCard2 = useTransform(scrollYProgress, [0.44, 0.46], [0, 1]);
  const innerCard2X = useTransform(scrollYProgress, [0.44, 0.46], [20, 0]);

  const innerCard3 = useTransform(scrollYProgress, [0.45, 0.47], [0, 1]);
  const innerCard3Y = useTransform(scrollYProgress, [0.45, 0.47], [20, 0]);

  const detailsOpacity = useTransform(scrollYProgress, [0.46, 0.48], [0, 1]);

  // Phase D: Final Glow Polish
  const pulseGlow = useTransform(scrollYProgress, [0.48, 0.49, 0.50], [0, 1, 0]);

  return (
    <motion.div className="position-absolute w-100 h-100 z-1" style={{ opacity: canvasOpacity }}>
      {/* Background Title */}
      <motion.div className="position-absolute top-0 mt-5 text-center w-100 z-1" style={{ opacity: titleOpacity }}>
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: '3rem' }}>The <span className="txt-ffd">Blueprint</span>.</h2>
        <p className="txt-f5 fs-19 mt-2">Human ideation translated into high-fidelity structure.</p>
      </motion.div>

      {/* --- BACKGROUND AMBIENT GLOWS --- */}
      <motion.div 
        className="position-absolute rounded-circle pointer-events-none"
        style={{ 
          width: 'max(50vw, 500px)', height: 'max(50vw, 500px)', background: 'radial-gradient(circle, rgba(13,202,240,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', opacity: bgUxOpacity, x: bgUxX, y: bgUxY, top: '-5%', left: '-5%', zIndex: 0
        }}
      />
      <motion.div 
        className="position-absolute rounded-circle pointer-events-none"
        style={{ 
          width: 'max(50vw, 500px)', height: 'max(50vw, 500px)', background: 'radial-gradient(circle, rgba(220,53,69,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', opacity: bgEngOpacity, x: bgEngX, bottom: '-5%', right: '-5%', zIndex: 0
        }}
      />
      <motion.div 
        className="position-absolute rounded-circle top-50 start-50 translate-middle pointer-events-none"
        style={{ 
          width: 'max(70vw, 600px)', height: 'max(70vw, 600px)', background: 'radial-gradient(circle, rgba(255,216,0,0.1) 0%, transparent 70%)',
          filter: 'blur(80px)', opacity: bgUiOpacity, scale: bgUiScale, zIndex: 0
        }}
      />

      {/* --- CANVAS AREA (Center - FULL SCREEN SCALED) --- */}
      <div className="position-absolute z-1" style={{ top: '55%', left: '50%', width: '900px', height: '600px', transform: `translate(-50%, -50%) scale(${dynamicScale})`, transformOrigin: 'center center' }}>
        
        {/* --- MULTIPLAYER CURSORS (Inside scaled canvas) --- */}
        {/* Alice (UX) sketching messy bounds */}
        <TeamCursor name="Lead UX" color="#0dcaf0" startX={100} startY={400} endX={700} endY={100} progress={scrollYProgress} timeRange={[0.25, 0.31]} />
        {/* Bob (SysEng) drawing strict bounds */}
        <TeamCursor name="Sys Eng" color="#dc3545" startX={700} startY={100} endX={100} endY={400} progress={scrollYProgress} timeRange={[0.32, 0.38]} />
        {/* Charlie (UI) placing cards */}
        <TeamCursor name="UI Team" color="#FFD800" startX={400} startY={250} endX={600} endY={300} progress={scrollYProgress} timeRange={[0.39, 0.48]} />

        {/* Phase A: MESSY SKETCH SVG */}
        <motion.svg 
          width="100%" height="100%" viewBox="0 0 900 600" 
          className="position-absolute z-1"
          style={{ opacity: messyOpacity }}
        >
          <motion.path 
            d="M 10,15 Q 450,-10 890,20 Q 910,300 880,580 Q 450,610 20,590 Q -10,300 10,15" 
            fill="none" stroke="rgba(13, 202, 240, 0.6)" strokeWidth="3" strokeDasharray="15 10" strokeLinecap="round"
            style={{ pathLength: messyPathLength }}
          />
          <motion.path 
            d="M 220,20 Q 240,300 210,585" 
            fill="none" stroke="rgba(13, 202, 240, 0.5)" strokeWidth="3" strokeDasharray="10 10" strokeLinecap="round"
            style={{ pathLength: messyPathLength }}
          />
          <motion.path 
            d="M 220,100 Q 550,85 885,110" 
            fill="none" stroke="rgba(13, 202, 240, 0.5)" strokeWidth="3" strokeDasharray="10 10" strokeLinecap="round"
            style={{ pathLength: messyPathLength }}
          />
          <motion.path 
            d="M 260,150 Q 320,130 400,160 Q 420,250 400,300 Q 320,320 250,290 Q 230,220 260,150" 
            fill="none" stroke="rgba(13, 202, 240, 0.4)" strokeWidth="2" strokeDasharray="5 5"
            style={{ pathLength: messyPathLength }}
          />
        </motion.svg>

        {/* Phase B: STRICT GEOMETRY SVG */}
        <motion.svg 
          width="100%" height="100%" viewBox="0 0 900 600" 
          className="position-absolute z-2"
          style={{ opacity: strictOpacity }}
        >
          <motion.rect x="10" y="10" width="880" height="580" rx="16" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
          <motion.rect x="10" y="10" width="220" height="580" rx="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
          <motion.rect x="230" y="10" width="660" height="80" rx="16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
          <motion.rect x="260" y="120" width="280" height="200" rx="12" fill="none" stroke="rgba(255,216,0,0.5)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
          <motion.rect x="580" y="120" width="280" height="200" rx="12" fill="none" stroke="rgba(255,216,0,0.5)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
          <motion.rect x="260" y="350" width="600" height="210" rx="12" fill="none" stroke="rgba(39, 201, 63, 0.5)" strokeWidth="2" style={{ pathLength: strictPathLength }} />
        </motion.svg>

        {/* Phase C: HIGH FIDELITY FILLS */}
        <motion.div className="position-absolute rounded-4 d-flex flex-column gap-3 p-4 z-3" style={{ top: '10px', left: '10px', width: '220px', height: '580px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', opacity: fillSidebar }}>
          <motion.div className="w-100 rounded bg-white opacity-25 mb-4" style={{ opacity: detailsOpacity, height: '30px' }}></motion.div>
          <motion.div className="w-75 rounded bg-white opacity-10" style={{ opacity: detailsOpacity, height: '15px' }}></motion.div>
          <motion.div className="w-100 rounded bg-white opacity-10" style={{ opacity: detailsOpacity, height: '15px' }}></motion.div>
          <motion.div className="w-50 rounded bg-white opacity-10" style={{ opacity: detailsOpacity, height: '15px' }}></motion.div>
        </motion.div>

        <motion.div className="position-absolute rounded-4 d-flex align-items-center justify-content-between p-4 z-3" style={{ top: '10px', left: '230px', width: '660px', height: '80px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(5px)', opacity: fillHeader }}>
          <motion.div className="w-25 rounded bg-white opacity-25" style={{ opacity: detailsOpacity, height: '20px' }}></motion.div>
          <motion.div className="rounded-circle bg-white opacity-25" style={{ opacity: detailsOpacity, width: '40px', height: '40px' }}></motion.div>
        </motion.div>
        
        <motion.div className="position-absolute rounded-4 p-4 z-3 d-flex flex-column justify-content-between shadow-lg" style={{ top: '120px', left: '260px', width: '280px', height: '200px', background: 'rgba(255,216,0,0.1)', border: '1px solid rgba(255,216,0,0.3)', opacity: innerCard1, x: innerCard1X }}>
          <div>
            <motion.div className="w-50 rounded bg-white opacity-50 mb-2" style={{ opacity: detailsOpacity, height: '12px' }}></motion.div>
            <motion.div className="w-75 rounded bg-warning mb-2" style={{ opacity: detailsOpacity, height: '24px' }}></motion.div>
          </div>
          <motion.div className="w-100 d-flex align-items-end gap-2" style={{ opacity: detailsOpacity, height: '60px' }}>
            <div className="flex-grow-1 bg-warning opacity-50 rounded-top" style={{ height: '30%' }}></div>
            <div className="flex-grow-1 bg-warning opacity-75 rounded-top" style={{ height: '60%' }}></div>
            <div className="flex-grow-1 bg-warning rounded-top" style={{ height: '100%' }}></div>
            <div className="flex-grow-1 bg-warning opacity-75 rounded-top" style={{ height: '80%' }}></div>
          </motion.div>
        </motion.div>

        <motion.div className="position-absolute rounded-4 p-4 z-3 d-flex flex-column justify-content-between shadow-lg" style={{ top: '120px', left: '580px', width: '280px', height: '200px', background: 'rgba(13, 202, 240, 0.05)', border: '1px solid rgba(13, 202, 240, 0.2)', opacity: innerCard2, x: innerCard2X }}>
          <div>
            <motion.div className="w-50 rounded bg-white opacity-50 mb-2" style={{ opacity: detailsOpacity, height: '12px' }}></motion.div>
            <motion.div className="w-75 rounded bg-info mb-2" style={{ opacity: detailsOpacity, height: '24px' }}></motion.div>
          </div>
          <motion.div style={{ opacity: detailsOpacity }} className="d-flex gap-2">
            <div className="rounded-circle bg-info opacity-50" style={{ width: '30px', height: '30px' }}></div>
            <div className="rounded-circle bg-info opacity-75" style={{ width: '30px', height: '30px' }}></div>
            <div className="rounded-circle bg-info" style={{ width: '30px', height: '30px' }}></div>
          </motion.div>
        </motion.div>

        <motion.div className="position-absolute rounded-4 p-4 z-3 shadow-lg" style={{ top: '350px', left: '260px', width: '600px', height: '210px', background: 'rgba(39, 201, 63, 0.05)', border: '1px solid rgba(39, 201, 63, 0.2)', opacity: innerCard3, y: innerCard3Y }}>
          <motion.div className="w-25 rounded bg-success opacity-75 mb-4" style={{ opacity: detailsOpacity, height: '20px' }}></motion.div>
          <div className="d-flex flex-column gap-3">
            <motion.div className="w-100 rounded bg-white opacity-25" style={{ opacity: detailsOpacity, height: '40px' }}></motion.div>
            <motion.div className="w-100 rounded bg-white opacity-10" style={{ opacity: detailsOpacity, height: '40px' }}></motion.div>
          </div>
        </motion.div>

        {/* Phase D: Final Polish Pulse Glow */}
        <motion.div 
          className="position-absolute top-50 start-50 translate-middle w-100 h-100 z-0"
          style={{ 
            background: 'radial-gradient(circle, rgba(255,216,0,0.15) 0%, rgba(0,0,0,0) 70%)',
            filter: 'blur(50px)',
            opacity: pulseGlow
          }}
        />
      </div>
    </motion.div>
  );
}
