import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useTransition } from '../../context/TransitionContext';
import AnimatedLogo from '../customSvg/AnimatedLogo';
import './PageTransitionOverlay.css';

const generateGridColumns = () => {
  const colCount = 20;
  const rowCount = 40;
  return Array.from({ length: colCount }).map((_, colIndex) => {
    // Elegant monochrome tile pattern: deep black base with subtle translucent white highlights
    const pattern = Array.from({ length: rowCount / 2 }).map(() => {
      const rand = Math.random();
      if (rand > 0.94) return 'highlight';
      if (rand > 0.86) return 'dim';
      return null;
    });
    const fullPattern = [...pattern, ...pattern];
    const isUp = colIndex % 2 === 0;

    return (
      <div
        key={colIndex}
        className={`d-flex flex-column flex-shrink-0 ${isUp ? 'cg-grid-col-up' : 'cg-grid-col-down'}`}
        style={{
          width: '5vw',
          minWidth: '50px',
          borderRight: '1px solid rgba(255, 255, 255, 0.035)',
          height: 'max-content',
        }}
      >
        {fullPattern.map((type, rowIndex) => (
          <div
            key={rowIndex}
            className="w-100 cg-transition-grid-tile"
            style={{
              aspectRatio: '1 / 1',
              borderBottom: '1px solid rgba(255, 255, 255, 0.035)',
              backgroundColor:
                type === 'highlight'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : type === 'dim'
                  ? 'rgba(255, 255, 255, 0.02)'
                  : 'transparent',
            }}
          />
        ))}
      </div>
    );
  });
};

export const PageTransitionOverlay = () => {
  const { isTransitioning, logoRect, phase } = useTransition();

  const gridCols = useMemo(() => generateGridColumns(), []);

  if (!isTransitioning || !logoRect) return null;

  const cx = logoRect.left + logoRect.width / 2;
  const cy = logoRect.top + logoRect.height / 2;
  const isCentered = phase === 'center-hold';

  // Responsive target logo dimensions in the center of viewport
  const centerSize = typeof window !== 'undefined'
    ? Math.min(window.innerWidth * 0.42, 220)
    : 180;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        pointerEvents: 'auto',
        overflow: 'hidden',
      }}
    >
      {/* 1. Deep solid black background with circular expanding/collapsing mask */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, #0d0d10 0%, #050507 55%, #000000 100%)',
        }}
        initial={{ clipPath: `circle(0px at ${cx}px ${cy}px)` }}
        animate={{
          clipPath:
            phase === 'opening-out'
              ? `circle(0px at ${cx}px ${cy}px)`
              : `circle(150% at ${cx}px ${cy}px)`,
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* 2. Scrolling monochrome matrix grid columns with same circular mask */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          width: '120vw',
          overflow: 'hidden',
          opacity: 0.8,
          pointerEvents: 'none',
        }}
        initial={{ clipPath: `circle(0px at ${cx}px ${cy}px)` }}
        animate={{
          clipPath:
            phase === 'opening-out'
              ? `circle(0px at ${cx}px ${cy}px)`
              : `circle(150% at ${cx}px ${cy}px)`,
        }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {gridCols}
      </motion.div>

      {/* 3. Subtle ambient white glow in viewport center during center-hold */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: centerSize * 2.2,
          height: centerSize * 2.2,
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 10,
        }}
        animate={{
          opacity: isCentered ? 1 : 0,
          scale: isCentered ? [0.95, 1.05, 1] : 0.8,
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* 4. Brand logo in crisp white traveling from navbar origin to center and back */}
      <motion.div
        style={{
          position: 'absolute',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        initial={{
          left: logoRect.left,
          top: logoRect.top,
          width: logoRect.width,
          height: logoRect.height,
          x: 0,
          y: 0,
        }}
        animate={
          isCentered || phase === 'closing-in'
            ? {
                left: '50%',
                top: '50%',
                width: centerSize,
                height: centerSize,
                x: '-50%',
                y: '-50%',
              }
            : {
                left: logoRect.left,
                top: logoRect.top,
                width: logoRect.width,
                height: logoRect.height,
                x: 0,
                y: 0,
              }
        }
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <AnimatedLogo
          size="100%"
          color="#FAFAFF"
          style={{
            width: '100%',
            height: '100%',
            filter: isCentered
              ? 'drop-shadow(0 0 24px rgba(255, 255, 255, 0.45))'
              : 'drop-shadow(0 0 0px rgba(255, 255, 255, 0))',
            transition: 'filter 0.4s ease',
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageTransitionOverlay;
