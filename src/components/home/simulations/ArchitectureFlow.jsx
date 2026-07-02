import React, { useRef, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { FiPlay } from 'react-icons/fi';

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
import { Play, PlayCircle } from 'lucide-react';
import { FaPlay } from 'react-icons/fa';

function ArchitectureFlow() {
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const scrollDirRef = useRef("up");
  const lastScrollY = useRef(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Since we removed the Auth phase and compressed the timeline, Phase 4 finishes at exactly 0.78.
  // We map the 0->1 scroll to 0->0.78 so that the container ends right as Phase 4 finishes, eliminating any dead space.
  const mappedProgress = useTransform(scrollYProgress, [0, 1], [0, 0.78]);

  // Intro transition to cover the blank space
  const introOpacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  const phase5Ref = useRef(null);
  const { scrollYProgress: phase5Scroll } = useScroll({
    target: phase5Ref,
    offset: ["start start", "end end"]
  });

  // Map phase 5 scroll to precisely cut off at 0.85, eliminating the 15% dead time at the end
  const mappedPhase5Progress = useTransform(phase5Scroll, [0, 1], [0, 0.85]);

  // Outro transition to cover the blank space at the end
  const outroOpacity = useTransform(mappedPhase5Progress, [0.8, 0.85], [0, 1]);

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

  const stopAutoScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    setIsAutoScrolling(false);
    setIsScrollingUp(true);
    scrollDirRef.current = "up";
  };

  const startAutoScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setIsAutoScrolling(true);
    let lastTime = performance.now();

    const scrollLoop = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      const scrollSpeed = 0.1;
      const distance = scrollSpeed * delta;

      // Use instant behavior to bypass any CSS smooth scrolling which breaks requestAnimationFrame
      window.scrollBy({ top: distance, left: 0, behavior: 'instant' });

      // Stop condition: end of the entire page
      const maxScrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      if (Math.ceil(window.scrollY + window.innerHeight) >= maxScrollHeight - 10) {
        stopAutoScroll();
        return;
      }

      rafRef.current = requestAnimationFrame(scrollLoop);
    };

    rafRef.current = requestAnimationFrame(scrollLoop);
  };

  useEffect(() => {
    const handleUserInterrupt = (e) => {
      // Allow the button click itself to not trigger an interrupt if it's the mousedown on the button
      if (rafRef.current) {
        stopAutoScroll();
      }
    };

    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchstart', handleUserInterrupt, { passive: true });
    window.addEventListener('keydown', handleUserInterrupt, { passive: true });
    // We remove mousedown because clicking the button triggers mousedown and immediately cancels the scroll we just started!
    // Instead we rely on wheel, touchstart, and keydown.

    return () => {
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchstart', handleUserInterrupt);
      window.removeEventListener('keydown', handleUserInterrupt);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latestY) => {
    // Scroll direction detection
    if (latestY > lastScrollY.current + 5) {
      if (scrollDirRef.current !== "down") {
        scrollDirRef.current = "down";
        setIsScrollingUp(false);
      }
    } else if (latestY < lastScrollY.current - 5) {
      if (scrollDirRef.current !== "up") {
        scrollDirRef.current = "up";
        setIsScrollingUp(true);
      }
    }
    lastScrollY.current = latestY;

    // Hide button if we are at the very bottom of the page
    if (window.innerHeight + latestY >= document.body.offsetHeight - 50) {
      setShowPlayBtn(false);
    } else {
      setShowPlayBtn(true);
    }

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
      <div id="architecture-start" ref={containerRef} style={{ height: '900vh', position: 'relative' }}>
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
            <h3 className="txt-ff fw-700 ff-gro mt-3 text-center" style={{ fontSize: '3rem', letterSpacing: '-1px' }}>Curious how we operate?</h3>
            <p className="txt-f5 fs-18 mt-2 ff-mono text-light text-center">Scroll down to explore our architectural flow...</p>
          </motion.div>

          <Phase1Spark scrollYProgress={mappedProgress} avatarClient={avatarClient} avatarDev={avatarDev} />

          <Phase2Blueprint scrollYProgress={mappedProgress} uiAnimation={uiAnimation} />

          <Phase3Engine scrollYProgress={mappedProgress} />

          <Phase4Impact scrollYProgress={mappedProgress} dashboardMockup={dashboardMockup} />
        </div>
      </div>

      <div ref={phase5Ref} style={{ height: '425vh', position: 'relative' }}>
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

          <Phase5Conclusion scrollYProgress={mappedPhase5Progress} avatarClient={avatarClient} avatarDev={avatarDev} />
        </div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <motion.div
          className="position-fixed d-flex justify-content-end w-100 pointer-events-none"
          style={{ bottom: '2rem', right: '0', zIndex: 99999, paddingRight: '2rem' }}
        >
          <motion.button
            className="btn rounded-circle px-3 py-3 fw-bold shadow-lg d-flex align-items-center justify-content-center pointer-events-auto"
            style={{
              opacity: (isAutoScrolling || !showPlayBtn || !isScrollingUp) ? 0 : 1,
              transition: 'opacity 0.3s, transform 0.2s',
              pointerEvents: (isAutoScrolling || !showPlayBtn || !isScrollingUp) ? 'none' : 'auto',
              background: '#FFD800',
              color: 'black',
              border: 'none',
              cursor: 'pointer',
              transform: (isAutoScrolling || !showPlayBtn || !isScrollingUp) ? 'scale(0.8)' : 'scale(1)'
            }}
            onClick={startAutoScroll}
          >
            <FaPlay />
          </motion.button>
        </motion.div>,
        document.body
      )}
    </>
  );
}

export default ArchitectureFlow;
