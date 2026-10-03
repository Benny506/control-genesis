import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const TransitionContext = createContext(undefined);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'idle' | 'closing-in' | 'center-hold' | 'opening-out'
  const [logoRect, setLogoRect] = useState(null);
  const navigate = useNavigate();
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
  }, []);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  const completeTransition = useCallback(() => {
    clearTimers();
    setIsTransitioning(false);
    setLogoRect(null);
    setPhase('idle');
  }, [clearTimers]);

  const startTransition = useCallback((path, rect) => {
    if (isTransitioning) return;

    clearTimers();

    // Determine initial logo bounding box
    const effectiveRect = (rect && rect.width > 0)
      ? rect
      : (document.getElementById('navbar-logo')?.getBoundingClientRect() || {
          top: 18,
          left: 24,
          width: 38,
          height: 38
        });

    setLogoRect({
      top: effectiveRect.top,
      left: effectiveRect.left,
      width: effectiveRect.width,
      height: effectiveRect.height
    });

    setIsTransitioning(true);
    setPhase('closing-in');

    // Phase 1: 0ms -> 800ms: circular curtain expands from navbar logo, logo moves to center
    // Phase 2: 800ms -> 1600ms: screen fully occluded, held at center
    const holdTimer = setTimeout(() => {
      setPhase('center-hold');
    }, 800);
    timersRef.current.push(holdTimer);

    // Navigating and scroll reset happen at 1150ms while completely covered
    const navTimer = setTimeout(() => {
      if (path) {
        navigate(path);
      }
      if (window.lenis && typeof window.lenis.scrollTo === 'function') {
        window.lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }, 1150);
    timersRef.current.push(navTimer);

    // Phase 3: 1600ms -> 2400ms: curtain collapses back into navbar logo, revealing new page
    const openTimer = setTimeout(() => {
      setPhase('opening-out');
    }, 1600);
    timersRef.current.push(openTimer);

    // Phase 4: 2400ms: complete transition and reset
    const completeTimer = setTimeout(() => {
      completeTransition();
    }, 2400);
    timersRef.current.push(completeTimer);

  }, [isTransitioning, clearTimers, navigate, completeTransition]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        phase,
        logoRect,
        startTransition,
        completeTransition
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

export default TransitionContext;
