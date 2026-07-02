import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';
import { FiMenu, FiX, FiPieChart, FiUsers, FiFolder, FiSettings, FiBell, FiSearch } from 'react-icons/fi';

export default function Phase4Impact({ scrollYProgress }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Global opacity (fades in exactly when Phase 3 fades out at 0.80 - 0.82)
  const phase4Opacity = useTransform(scrollYProgress, [0.80, 0.82, 1, 1], [0, 1, 1, 1]);

  // --- SEAMLESS EXPANSION (0.82 - 0.85) AND SQUEEZE (0.90 - 0.95) ---
  const dashWidth = useTransform(scrollYProgress, [0.82, 0.85, 0.90, 0.95], isMobile ? ["100%", "100%", "100%", "85%"] : ["50%", "100%", "100%", "30%"]);
  // Push the shrinking container back to the center for desktop, then to the right for mobile
  const leftSpacerWidth = useTransform(scrollYProgress, [0.82, 0.85, 0.90, 0.95], isMobile ? ["0%", "0%", "0%", "7.5%"] : ["50%", "0%", "0%", "60%"]);
  const gapSpace = useTransform(scrollYProgress, [0.82, 0.85], ["1.5rem", "0rem"]);
  // Make the phone taller than the desktop
  const mainHeight = useTransform(scrollYProgress, [0.82, 0.85, 0.90, 0.95], isMobile ? ["55vh", "60vh", "60vh", "65vh"] : ["55vh", "70vh", "70vh", "85vh"]);
  const headerHeight = useTransform(scrollYProgress, [0.82, 0.85], ["45px", "70px"]);
  const innerScale = useTransform(scrollYProgress, [0.82, 0.85], [0.95, 1]);
  const containerBorderRadius = useTransform(scrollYProgress, [0.90, 0.95], ["1rem", "2.5rem"]);

  // Mobile Notch and Dots
  const notchOpacity = useTransform(scrollYProgress, [0.90, 0.95], [0, 1]);
  const browserDotsOpacity = useTransform(scrollYProgress, [0.90, 0.92], [1, 0]);
  const searchOpacity = useTransform(scrollYProgress, [0.90, 0.92], [1, 0]);

  // --- TEXT ANIMATIONS ---
  // Desktop text (Title only, centered)
  const desktopTextOpacity = useTransform(scrollYProgress, [0.85, 0.86, 0.90, 0.92], [0, 1, 1, 0]);
  const desktopTextY = useTransform(scrollYProgress, [0.85, 0.86], [30, 0]);

  // Mobile text (Title + Description, left aligned)
  const mobileTextOpacity = useTransform(scrollYProgress, [0.92, 0.95], [0, 1]);
  const mobileTextY = useTransform(scrollYProgress, [0.92, 0.95], [30, 0]);

  // --- UI CROSSFADE ---
  const desktopOpacity = useTransform(scrollYProgress, [0.90, 0.93], [1, 0]);
  const mobileOpacity = useTransform(scrollYProgress, [0.93, 0.95, 0.99, 1.0], [0, 1, 1, 1]);

  const finalGlow = useTransform(scrollYProgress, [0.95, 0.98], [0, 1]);

  return (
    <motion.div
      className="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center pointer-events-none"
      style={{ opacity: phase4Opacity }}
    >
      {/* Desktop Title (Centered, No Description) */}
      <motion.div className="text-center position-absolute top-0 w-100 z-2" style={{ opacity: desktopTextOpacity, y: desktopTextY, paddingTop: '10vh' }}>
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: '3rem' }}>The <span className="txt-ffd">Impact</span>.</h2>
      </motion.div>

      {/* Mobile Title + Description (Left Aligned on Desktop, Top Centered on Mobile) */}
      <motion.div className="position-absolute z-4" style={{ 
        opacity: mobileTextOpacity, 
        y: mobileTextY, 
        x: isMobile ? '-50%' : '0%',
        left: isMobile ? '50%' : '10%', 
        top: isMobile ? '6%' : '40%', 
        maxWidth: '400px',
        textAlign: isMobile ? 'center' : 'left',
        width: isMobile ? '90%' : 'auto'
      }}>
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', lineHeight: 1.1 }}>The <span className="txt-ffd">Impact</span>.</h2>
        <p className={`txt-f5 ${isMobile ? 'fs-16' : 'fs-19'} mt-3`}>Flawless execution. Production ready. Highly interactive.</p>
      </motion.div>

      <motion.div className="d-flex w-100 px-3 px-md-5 z-3 position-relative" style={{ maxWidth: '1400px', height: mainHeight, gap: gapSpace, marginTop: isMobile ? '60px' : '100px' }}>
        <motion.div style={{ width: leftSpacerWidth, minWidth: leftSpacerWidth }}></motion.div>

        {/* The Dashboard App (Dark Mode) */}
        <motion.div
          className="d-flex flex-column shadow-lg overflow-hidden border border-secondary border-opacity-25 position-relative"
          style={{ width: dashWidth, background: '#0a0a0c', borderRadius: containerBorderRadius }}
        >
          {/* Header */}
          <motion.div className="d-flex align-items-center px-4 justify-content-between z-2 position-relative" style={{ background: '#111116', height: headerHeight, borderBottom: '1px solid #222' }}>

            {/* Mobile Notch */}
            <motion.div
              className="position-absolute top-0 start-50 translate-middle-x bg-black rounded-bottom-4"
              style={{ width: '120px', height: '20px', opacity: notchOpacity, zIndex: 10 }}
            />

            <div className="d-flex align-items-center gap-3">
              <motion.div style={{ opacity: browserDotsOpacity }} className="d-none d-md-flex gap-2 me-2">
                <div className="rounded-circle bg-danger" style={{ width: '12px', height: '12px' }}></div>
                <div className="rounded-circle bg-warning" style={{ width: '12px', height: '12px' }}></div>
                <div className="rounded-circle bg-success" style={{ width: '12px', height: '12px' }}></div>
              </motion.div>
              <FiMenu className="fs-4 text-white pointer" />
              <div className="fw-bold fs-5 text-info d-flex align-items-center gap-2">
                <div className="rounded-circle bg-info" style={{ width: '24px', height: '24px' }}></div>
                Analytics<span className="text-white">Pro</span>
              </div>
            </div>

            <motion.div className="d-none d-md-flex flex-grow-1 mx-5 position-relative" style={{ opacity: searchOpacity }}>
              <FiSearch className="position-absolute text-muted" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" className="w-100 border-0 rounded-pill px-5 py-2 fs-14 text-white" placeholder="Search data, reports, users..." readOnly style={{ background: '#1e1e26' }} />
            </motion.div>

            <motion.div className="d-flex align-items-center gap-4" style={{ opacity: searchOpacity }}>
              <div className="position-relative">
                <FiBell className="fs-5 text-muted" />
                <div className="position-absolute bg-danger rounded-circle" style={{ width: '8px', height: '8px', top: '0', right: '0' }}></div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="rounded-circle bg-info text-dark d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '35px', height: '35px' }}>JS</div>
              </div>
            </motion.div>
          </motion.div>

          {/* App Body */}
          <div className="d-flex flex-grow-1 overflow-hidden position-relative">

            {/* Desktop UI */}
            <motion.div className="d-flex w-100 h-100 position-absolute top-0 start-0" style={{ opacity: desktopOpacity }}>
              {/* Sidebar */}
              <div className="d-none d-md-flex flex-column border-end border-secondary border-opacity-25 py-4 px-3 gap-2 z-1" style={{ width: '240px', background: '#0a0a0e' }}>
                <div className="d-flex align-items-center gap-3 px-3 py-2 rounded text-info bg-info bg-opacity-10 fw-bold border border-info border-opacity-25">
                  <FiPieChart /> Overview
                </div>
                <div className="d-flex align-items-center gap-3 px-3 py-2 rounded text-muted">
                  <FiFolder /> Projects
                </div>
                <div className="d-flex align-items-center gap-3 px-3 py-2 rounded text-muted">
                  <FiUsers /> Team
                </div>
                <div className="mt-auto d-flex align-items-center gap-3 px-3 py-2 rounded text-muted">
                  <FiSettings /> Settings
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow-1 p-4 p-md-5 overflow-hidden" style={{ background: '#050508' }}>
                <motion.div style={{ scale: innerScale }} className="h-100 w-100 d-flex flex-column gap-4">

                  <div className="d-flex justify-content-between align-items-end">
                    <div>
                      <h3 className="fw-bold text-white mb-1">Dashboard</h3>
                      <div className="text-white text-opacity-50 fs-14">Welcome back, Jane. Here's what's happening today.</div>
                    </div>
                    <div className="bg-info text-dark px-4 py-2 rounded-pill fs-14 fw-bold shadow-sm">
                      Generate Report
                    </div>
                  </div>

                  {/* Top Metrics */}
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="p-4 rounded-4 shadow-sm border border-secondary border-opacity-25" style={{ background: '#111116', borderLeft: '4px solid #0dcaf0 !important' }}>
                        <div className="text-white text-opacity-50 fs-14 mb-2">Total Revenue</div>
                        <div className="fs-2 fw-bold text-white">$124,500</div>
                        <div className="text-success fs-14 mt-2 bg-success bg-opacity-10 d-inline-block px-2 py-1 rounded">↑ 12% vs last month</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 rounded-4 shadow-sm border border-secondary border-opacity-25" style={{ background: '#111116', borderLeft: '4px solid #ffc107 !important' }}>
                        <div className="text-white text-opacity-50 fs-14 mb-2">Active Users</div>
                        <div className="fs-2 fw-bold text-white">8,234</div>
                        <div className="text-success fs-14 mt-2 bg-success bg-opacity-10 d-inline-block px-2 py-1 rounded">↑ 5% vs last month</div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="p-4 rounded-4 shadow-sm border border-secondary border-opacity-25" style={{ background: '#111116', borderLeft: '4px solid #dc3545 !important' }}>
                        <div className="text-white text-opacity-50 fs-14 mb-2">Conversion Rate</div>
                        <div className="fs-2 fw-bold text-white">3.2%</div>
                        <div className="text-danger fs-14 mt-2 bg-danger bg-opacity-10 d-inline-block px-2 py-1 rounded">↓ 0.4% vs last month</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity List */}
                  <div className="flex-grow-1 rounded-4 shadow-sm p-4 border border-secondary border-opacity-25 d-flex flex-column" style={{ background: '#111116' }}>
                    <div className="text-white fw-bold mb-4 fs-5">Recent Activity</div>

                    <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-10">
                      <div className="rounded-circle bg-info bg-opacity-25" style={{ width: '45px', height: '45px' }}></div>
                      <div className="flex-grow-1">
                        <div className="text-white fs-16 fw-bold">Sarah deployed v2.4.1</div>
                        <div className="text-white text-opacity-50 fs-14">Production Environment</div>
                      </div>
                      <div className="text-white text-opacity-25 fs-14">2m ago</div>
                    </div>

                    <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-10">
                      <div className="rounded-circle bg-warning bg-opacity-25" style={{ width: '45px', height: '45px' }}></div>
                      <div className="flex-grow-1">
                        <div className="text-white fs-16 fw-bold">DB Migration Completed</div>
                        <div className="text-white text-opacity-50 fs-14">14,203 records updated</div>
                      </div>
                      <div className="text-white text-opacity-25 fs-14">1h ago</div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-circle bg-danger bg-opacity-25" style={{ width: '45px', height: '45px' }}></div>
                      <div className="flex-grow-1">
                        <div className="text-white fs-16 fw-bold">Error Spikes Detected</div>
                        <div className="text-white text-opacity-50 fs-14">API Gateway US-East</div>
                      </div>
                      <div className="text-white text-opacity-25 fs-14">3h ago</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile UI Preview */}
            <motion.div
              className="d-flex flex-column w-100 h-100 position-absolute top-0 start-0"
              style={{ opacity: mobileOpacity, background: '#050508' }}
            >
              {/* Mobile Scrollable Content */}
              <div className="flex-grow-1 p-3 overflow-hidden d-flex flex-column gap-3">
                {/* Mobile Stat Card 1 */}
                <div className="p-3 rounded-4 border border-secondary border-opacity-25 d-flex justify-content-between align-items-center" style={{ background: '#111116' }}>
                  <div>
                    <div className="text-white text-opacity-50 fs-12 fw-bold mb-1">Revenue</div>
                    <div className="fs-4 fw-bold text-white">$124K</div>
                  </div>
                  <div className="bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-12 fw-bold">+12%</div>
                </div>

                {/* Mobile Stat Card 2 */}
                <div className="p-3 rounded-4 border border-secondary border-opacity-25 d-flex justify-content-between align-items-center" style={{ background: '#111116' }}>
                  <div>
                    <div className="text-white text-opacity-50 fs-12 fw-bold mb-1">Users</div>
                    <div className="fs-4 fw-bold text-white">8.2K</div>
                  </div>
                  <div className="bg-success bg-opacity-25 text-success px-2 py-1 rounded fs-12 fw-bold">+5%</div>
                </div>

                {/* Mobile Recent Activity */}
                <div className="flex-grow-1 rounded-4 p-3 border border-secondary border-opacity-25 d-flex flex-column" style={{ background: '#111116' }}>
                  <div className="text-white fw-bold mb-3 fs-14">Recent Activity</div>
                  <div className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom border-white border-opacity-10">
                    <div className="rounded-circle bg-info bg-opacity-25" style={{ width: '35px', height: '35px' }}></div>
                    <div className="flex-grow-1">
                      <div className="text-white fs-14 fw-bold">Sarah deployed v2.4.1</div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle bg-warning bg-opacity-25" style={{ width: '35px', height: '35px' }}></div>
                    <div className="flex-grow-1">
                      <div className="text-white fs-14 fw-bold">DB Migration</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Bottom Nav */}
              <div className="d-flex justify-content-around align-items-center p-3 border-top border-secondary border-opacity-25" style={{ background: '#111116' }}>
                <div className="d-flex flex-column align-items-center gap-1 text-info">
                  <FiPieChart className="fs-5" />
                  <div className="fs-10 fw-bold">Home</div>
                </div>
                <div className="d-flex flex-column align-items-center gap-1 text-muted">
                  <FiFolder className="fs-5" />
                  <div className="fs-10">Projects</div>
                </div>
                <div className="d-flex flex-column align-items-center gap-1 text-muted">
                  <FiUsers className="fs-5" />
                  <div className="fs-10">Team</div>
                </div>
                <div className="d-flex flex-column align-items-center gap-1 text-muted">
                  <FiSettings className="fs-5" />
                  <div className="fs-10">Settings</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Final Glow Overlay */}
          <motion.div
            className="position-absolute w-100 h-100 top-0 start-0 z-5 pointer-events-none"
            style={{
              opacity: finalGlow,
              background: 'radial-gradient(circle at 50% 50%, rgba(13,202,240,0) 0%, rgba(13,202,240,0.15) 100%)',
              boxShadow: 'inset 0 0 100px rgba(13,202,240,0.3)'
            }}
          />

        </motion.div>
      </motion.div>
    </motion.div>
  );
}
