import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

import Phase1Spark from './architecture/Phase1Spark';
import Phase2Blueprint from './architecture/Phase2Blueprint';
import Phase3Engine from './architecture/Phase3Engine';
import Phase4Impact from './architecture/Phase4Impact';
import Phase5Conclusion from './architecture/Phase5Conclusion';

import uiAnimation from '../../../assets/lotties/ui.json';
import avatarClient from '../../../assets/images/avatar_client.png';
import avatarDev from '../../../assets/images/avatar_dev.png';
import dashboardMockup from '../../../assets/images/dashboard_mockup.png';
import Lottie from 'lottie-react';
import devSkillsLottie from '../../../assets/lotties/developer skills.json';
import handShakeLottie from '../../../assets/lotties/Hand Shake.json';

function ArchitectureFlow() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Intro transition to cover the blank space
  const introOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  const phase5Ref = useRef(null);
  const { scrollYProgress: phase5Scroll } = useScroll({
    target: phase5Ref,
    offset: ["start start", "end end"]
  });

  // Outro transition to cover the blank space at the end
  const outroOpacity = useTransform(phase5Scroll, [0.9, 0.95], [0, 1]);

  // --- ROBUST AUTO SNAP BACK LOGIC ---
  const { scrollY } = useScroll();
  const wasAtEnd = useRef(false);
  const maxReachedY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    if (!containerRef.current || !phase5Ref.current) return;

    // Calculate where the bottom of the screen currently is
    const viewportBottom = latestY + window.innerHeight;

    // Calculate the exact absolute pixel position of the bottom of Phase 5
    const phase5Bottom = latestY + phase5Ref.current.getBoundingClientRect().bottom;

    // 1. If the bottom of the screen is at (or past) the bottom of Phase 5 (with a 200px forgiving margin)
    if (viewportBottom >= phase5Bottom - 200) {
      wasAtEnd.current = true;
      // Keep tracking their maximum downward scroll depth
      if (latestY > maxReachedY.current) {
        maxReachedY.current = latestY;
      }
    }
    // 2. If they were at the end, and have now scrolled UPWARDS by at least 300 pixels
    else if (wasAtEnd.current && latestY < maxReachedY.current - 300) {
      wasAtEnd.current = false;
      maxReachedY.current = 0; // reset

      // 3. Bruteforce snap to top
      const topPos = latestY + containerRef.current.getBoundingClientRect().top;
      window.scrollTo(0, topPos);
    }
  });

  return (
    <>
      <div id="architecture-start" ref={containerRef} style={{ height: '1500vh', position: 'relative' }}>
        {/* Sticky Cinematic Viewport */}
        <div
          className="sticky-top w-100 overflow-hidden d-flex align-items-center justify-content-center"
          style={{ height: '100svh', background: '#050505' }}
        >
          {/* Static Loading Screen */}
          <motion.div
            className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100 z-5"
            style={{ opacity: introOpacity, pointerEvents: 'none' }}
          >
            <div style={{ width: '280px', height: '280px' }}>
              <Lottie animationData={devSkillsLottie} loop={true} />
            </div>
            <h3 className="txt-ff fw-700 ff-gro mt-3, text-center" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>Curious how we operate?</h3>
            <p className="txt-f5 fs-18 mt-2 ff-mono text-light text-center">Scroll down to explore our architectural flow...</p>
          </motion.div>

          <Phase1Spark scrollYProgress={scrollYProgress} avatarClient={avatarClient} avatarDev={avatarDev} />

          <Phase2Blueprint scrollYProgress={scrollYProgress} uiAnimation={uiAnimation} />

          <Phase3Engine scrollYProgress={scrollYProgress} />

          <Phase4Impact scrollYProgress={scrollYProgress} dashboardMockup={dashboardMockup} />
        </div>
      </div>

      <div ref={phase5Ref} style={{ height: '500vh', position: 'relative' }}>
        <div
          className="sticky-top w-100 overflow-hidden d-flex align-items-center justify-content-center"
          style={{ height: '100svh', background: '#050505' }}
        >
          {/* Static Outro Screen */}
          <motion.div
            className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100 z-5"
            style={{ opacity: outroOpacity, pointerEvents: 'none' }}
          >
            <div style={{ width: '280px', height: '280px' }}>
              <Lottie animationData={handShakeLottie} loop={true} />
            </div>
            <h3 className="txt-ff fw-700 ff-gro mt-3 text-center" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>Ready to build?</h3>
            <p className="txt-f5 fs-18 mt-2 ff-mono text-light text-center">Let's shake on it and start your next big project.</p>
          </motion.div>

          <Phase5Conclusion scrollYProgress={phase5Scroll} avatarClient={avatarClient} avatarDev={avatarDev} />
        </div>
      </div>
    </>
  );
}

export default ArchitectureFlow;
