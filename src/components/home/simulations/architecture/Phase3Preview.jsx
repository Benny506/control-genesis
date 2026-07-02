import React from 'react';
import { motion, useTransform } from 'framer-motion';

export default function Phase3Preview({ scrollYProgress, isMobile = false }) {
  // --- RESPONSIVE WIDTH ANIMATION ---
  // Sprint 1 (Auth) = Desktop (100% of half screen)
  // Sprint 2 (Profile, 0.59-0.69) = Mobile (35% width on desktop, 85% on mobile)
  // Sprint 3 (Dashboard, 0.69-0.80) = Desktop
  const containerWidth = useTransform(
    scrollYProgress, 
    [0.57, 0.59, 0.67, 0.69], 
    ["100%", isMobile ? "85%" : "38%", isMobile ? "85%" : "38%", "100%"]
  );
  // Optional notch for mobile layout
  const notchOpacity = useTransform(
    scrollYProgress, 
    [0.58, 0.59, 0.67, 0.68], 
    [0, 1, 1, 0]
  );
  const containerBorderRadius = useTransform(
    scrollYProgress, 
    [0.57, 0.59, 0.67, 0.69], 
    ["1rem", "2.5rem", "2.5rem", "1rem"] // more rounded for phone
  );

  // ==================
  // SPRINT 1: AUTH (0.49 - 0.59)
  // ==================
  const previewAuthSkeleton = useTransform(scrollYProgress, [0.50, 0.51, 0.58, 0.59], [0, 1, 1, 0]);
  const previewAuthError = useTransform(scrollYProgress, [0.53, 0.54, 0.57, 0.58], [0, 1, 1, 0]);
  const previewAuthUI = useTransform(scrollYProgress, [0.58, 0.59, 0.60, 0.61], [0, 1, 1, 0]);

  // ==================
  // SPRINT 2: PROFILE (0.59 - 0.69)
  // ==================
  const previewProfileSkeleton = useTransform(scrollYProgress, [0.61, 0.62, 0.66, 0.67], [0, 1, 1, 0]);
  const previewProfileUI = useTransform(scrollYProgress, [0.66, 0.67, 0.70, 0.71], [0, 1, 1, 0]);

  // ==================
  // SPRINT 3: DASHBOARD (0.69 - 0.80)
  // ==================
  const previewDashSkeleton = useTransform(scrollYProgress, [0.71, 0.72, 0.78, 0.79], [0, 1, 1, 0]);
  const previewDashError = useTransform(scrollYProgress, [0.74, 0.75, 0.77, 0.78], [0, 1, 1, 0]);
  // We leave it at 1 for the seamless transition to Phase 4
  const previewDashUI = useTransform(scrollYProgress, [0.78, 0.79, 0.82, 0.83], [0, 1, 1, 1]);

  return (
    <div className="d-flex justify-content-center align-items-center h-100" style={{ width: isMobile ? '100%' : '50%', flex: 1 }}>
      <motion.div 
        className="d-flex flex-column shadow-lg overflow-hidden border border-secondary border-opacity-25 h-100" 
        style={{ width: containerWidth, borderRadius: containerBorderRadius, background: '#0a0a0e' }}
      >
        
        {/* Browser / Mobile Header */}
        <div className="d-flex align-items-center justify-content-center position-relative px-3" style={{ background: '#111116', height: '45px', borderBottom: '1px solid #222' }}>
          
          {/* Mobile Notch (Only visible when shrunk) */}
          <motion.div 
            className="position-absolute top-0 bg-black rounded-bottom-4"
            style={{ width: '120px', height: '20px', opacity: notchOpacity, zIndex: 10 }}
          />

          {/* Desktop Browser Dots (Fade out when mobile) */}
          <motion.div className="position-absolute start-0 ms-3 d-flex gap-2" style={{ opacity: useTransform(notchOpacity, [0, 1], [1, 0]) }}>
            <div className="rounded-circle bg-danger" style={{ width: '12px', height: '12px' }}></div>
            <div className="rounded-circle bg-warning" style={{ width: '12px', height: '12px' }}></div>
            <div className="rounded-circle bg-success" style={{ width: '12px', height: '12px' }}></div>
          </motion.div>

          <div className="bg-dark rounded-pill px-3 py-1 fs-12 text-muted text-center border border-secondary border-opacity-25">
            localhost:3000
          </div>
        </div>

        {/* Browser Viewport (Dark Mode) */}
        <div className="flex-grow-1 position-relative overflow-hidden" style={{ background: '#0a0a0c' }}>
          
          {/* --- SPRINT 1: AUTH PREVIEW (Dark Mode) --- */}
          <motion.div className="position-absolute w-100 h-100 p-4 d-flex align-items-center justify-content-center" style={{ opacity: previewAuthSkeleton }}>
             <div className="bg-white bg-opacity-10 rounded-4 w-75 h-75 d-flex flex-column p-4 gap-3 align-items-center justify-content-center border border-white border-opacity-10">
                <div className="w-50 bg-white bg-opacity-25 rounded mb-3" style={{ height: '30px' }}></div>
                <div className="w-100 bg-white bg-opacity-10 rounded" style={{ height: '40px' }}></div>
                <div className="w-100 bg-white bg-opacity-10 rounded" style={{ height: '40px' }}></div>
             </div>
          </motion.div>

          <motion.div className="position-absolute w-100 h-100 p-4 d-flex flex-column justify-content-center" style={{ opacity: previewAuthError, background: '#2d1114', color: '#ff6b6b' }}>
            <h3 className="fw-bold mb-3 ff-mono fs-18">Build Error</h3>
            <div className="p-3 rounded border border-danger border-opacity-50 shadow-sm fs-14 ff-mono" style={{ background: '#1a0507' }}>
              SyntaxError: Unterminated JSX contents. (Auth.jsx)
            </div>
          </motion.div>

          <motion.div className="position-absolute w-100 h-100 p-4 d-flex align-items-center justify-content-center" style={{ opacity: previewAuthUI, background: '#0a0a0c' }}>
             <div className="rounded-4 w-75 shadow-sm p-4 text-center border border-white border-opacity-10" style={{ background: '#111116' }}>
                <h4 className="fw-bold text-white mb-4">Welcome Back</h4>
                <div className="w-100 border border-secondary border-opacity-25 rounded p-2 mb-3 text-start text-muted bg-dark">Email Address</div>
                <div className="w-100 border border-secondary border-opacity-25 rounded p-2 mb-4 text-start text-muted bg-dark">Password</div>
                <div className="w-100 bg-info rounded p-2 text-dark fw-bold shadow-sm">Sign In</div>
             </div>
          </motion.div>


          {/* --- SPRINT 2: PROFILE PREVIEW (Mobile Dark Mode) --- */}
          <motion.div className="position-absolute w-100 h-100 p-4" style={{ opacity: previewProfileSkeleton }}>
             <div className="d-flex flex-column gap-4 align-items-center mb-5 mt-4">
               <div className="rounded-circle bg-white bg-opacity-25" style={{ width: '80px', height: '80px' }}></div>
               <div className="w-50 bg-white bg-opacity-25 rounded" style={{ height: '24px' }}></div>
               <div className="w-25 bg-white bg-opacity-10 rounded" style={{ height: '16px' }}></div>
             </div>
             <div className="w-100 bg-white bg-opacity-10 rounded-3 h-50"></div>
          </motion.div>

          <motion.div className="position-absolute w-100 h-100 p-4 d-flex flex-column align-items-center" style={{ opacity: previewProfileUI, background: '#0a0a0c' }}>
             <div className="d-flex flex-column align-items-center mb-4 mt-4 text-center">
               <div className="rounded-circle bg-info d-flex align-items-center justify-content-center text-dark fs-1 shadow-sm mb-3" style={{ width: '80px', height: '80px' }}>
                 JS
               </div>
               <h3 className="text-white fw-bold mb-0">Jane Smith</h3>
               <span className="text-info mt-1 fs-14">Lead UX Engineer</span>
             </div>
             <div className="w-100 rounded-4 shadow-sm p-4 border border-white border-opacity-10" style={{ background: '#111116' }}>
               <h6 className="fw-bold text-white mb-3 text-opacity-50 text-uppercase fs-12">Preferences</h6>
               <div className="d-flex justify-content-between align-items-center mb-3 border-bottom border-white border-opacity-10 pb-3">
                 <span className="text-white">Dark Mode</span>
                 <div className="bg-success rounded-pill" style={{ width: '40px', height: '20px' }}></div>
               </div>
               <div className="d-flex justify-content-between align-items-center">
                 <span className="text-white">Notifications</span>
                 <div className="bg-success rounded-pill" style={{ width: '40px', height: '20px' }}></div>
               </div>
             </div>
          </motion.div>


          {/* --- SPRINT 3: DASHBOARD PREVIEW (Dark Mode) --- */}
          <motion.div className="position-absolute w-100 h-100 p-4" style={{ opacity: previewDashSkeleton }}>
            <div className="w-25 bg-white bg-opacity-25 rounded mb-4" style={{ height: '24px' }}></div>
            <div className="d-flex gap-3 mb-4">
              <div className="flex-grow-1 bg-white bg-opacity-10 rounded-3" style={{ height: '120px' }}></div>
              <div className="flex-grow-1 bg-white bg-opacity-10 rounded-3" style={{ height: '120px' }}></div>
              <div className="flex-grow-1 bg-white bg-opacity-10 rounded-3" style={{ height: '120px' }}></div>
            </div>
            <div className="w-100 bg-white bg-opacity-10 rounded-3" style={{ height: '200px' }}></div>
          </motion.div>

          <motion.div 
            className="position-absolute w-100 h-100 p-4 d-flex flex-column justify-content-center" 
            style={{ opacity: previewDashError, background: '#2d1114', color: '#ff6b6b' }}
          >
            <h3 className="fw-bold mb-3 ff-mono fs-24">Unhandled Runtime Error</h3>
            <div className="p-3 rounded border border-danger border-opacity-50 shadow-sm" style={{ background: '#1a0507' }}>
              <div className="fw-bold ff-mono mb-2">TypeError: Cannot read properties of undefined</div>
              <div className="text-danger text-opacity-75 fs-14 ff-mono">Call Stack</div>
              <div className="fs-14 ff-mono mt-1 text-white">
                Dashboard<br/>
                <span className="text-danger text-opacity-50">src/Dashboard.jsx (4:17)</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="position-absolute w-100 h-100 p-4 d-flex flex-column" 
            style={{ opacity: previewDashUI, background: '#0a0a0c' }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0 fw-bold text-white">Analytics Overview</h4>
              <div className="bg-info bg-opacity-10 rounded-pill px-3 py-1 text-info border border-info border-opacity-25 fs-14 fw-bold">Live Data</div>
            </div>
            <div className="d-flex gap-3 mb-4">
              <div className="flex-grow-1 p-3 rounded-4 shadow-sm border-start border-info border-3" style={{ background: '#111116' }}>
                <div className="text-white text-opacity-50 fs-14">Total Revenue</div>
                <div className="fs-3 fw-bold text-white mt-1">$124,500</div>
                <div className="text-success fs-14 mt-2">↑ 12% vs last month</div>
              </div>
              <div className="flex-grow-1 p-3 rounded-4 shadow-sm border-start border-warning border-3" style={{ background: '#111116' }}>
                <div className="text-white text-opacity-50 fs-14">Active Users</div>
                <div className="fs-3 fw-bold text-white mt-1">8,234</div>
                <div className="text-success fs-14 mt-2">↑ 5% vs last month</div>
              </div>
              <div className="flex-grow-1 p-3 rounded-4 shadow-sm border-start border-danger border-3" style={{ background: '#111116' }}>
                <div className="text-white text-opacity-50 fs-14">Conversion Rate</div>
                <div className="fs-3 fw-bold text-white mt-1">3.2%</div>
                <div className="text-danger fs-14 mt-2">↓ 0.4% vs last month</div>
              </div>
            </div>
            <div className="flex-grow-1 rounded-4 shadow-sm p-4 d-flex flex-column border border-white border-opacity-10" style={{ background: '#111116' }}>
               <div className="text-white fw-bold mb-3">User Growth</div>
               {/* Fake Chart Lines */}
               <div className="flex-grow-1 position-relative mt-2">
                  <svg width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M0,100 Q50,80 100,90 T200,50 T300,70 T400,20 T500,30 L500,150 L0,150 Z" fill="rgba(13, 202, 240, 0.1)" />
                    <path d="M0,100 Q50,80 100,90 T200,50 T300,70 T400,20 T500,30" fill="none" stroke="#0dcaf0" strokeWidth="3" />
                  </svg>
               </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
