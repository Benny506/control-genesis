import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import Phase3Ide from './Phase3Ide';
import Phase3Preview from './Phase3Preview';

export default function Phase3Engine({ scrollYProgress }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Global Entry / Exit
  const phase3Opacity = useTransform(scrollYProgress, [0.47, 0.49, 0.80, 0.82], [0, 1, 1, 0]);
  const phase3Scale = useTransform(scrollYProgress, [0.47, 0.49], [0.8, 1]);

  return (
    <motion.div 
      className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center"
      style={{ opacity: phase3Opacity, scale: phase3Scale }}
    >
      <div className={`text-center ${isMobile ? 'mb-2' : 'mb-4'} z-2`}>
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: isMobile ? '1.8rem' : '3rem' }}>The <span className="txt-ffd">Engine Room</span>.</h2>
        <p className="txt-f5 fs-19 mt-2 d-none d-md-block">Iterative implementation across the entire stack.</p>
      </div>

      {/* Main Layout Container */}
      <div className={`d-flex ${isMobile ? 'flex-column' : 'flex-row'} gap-4 w-100 px-3 px-md-5`} style={{ maxWidth: '1400px', height: isMobile ? '85vh' : '65vh' }}>
        <Phase3Ide scrollYProgress={scrollYProgress} isMobile={isMobile} />
        <Phase3Preview scrollYProgress={scrollYProgress} isMobile={isMobile} />
      </div>
    </motion.div>
  );
}
