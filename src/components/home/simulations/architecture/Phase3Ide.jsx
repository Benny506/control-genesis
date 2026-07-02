import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { FiTerminal, FiAlertCircle, FiCheck, FiLayout, FiUser, FiLock } from 'react-icons/fi';

export default function Phase3Ide({ scrollYProgress, isMobile = false }) {
  // ==================
  // SPRINT 1: PROFILE (0.49 - 0.58)
  // ==================
  const profileTabOpacity = useTransform(scrollYProgress, [0.48, 0.49, 0.58, 0.59], [0, 1, 1, 0]);
  const profileCode1 = useTransform(scrollYProgress, [0.49, 0.50], [0, 1]);
  const profileCode2 = useTransform(scrollYProgress, [0.50, 0.51], [0, 1]);
  const profileCode3 = useTransform(scrollYProgress, [0.51, 0.52], [0, 1]);
  const profileCode4 = useTransform(scrollYProgress, [0.52, 0.53], [0, 1]);
  const profileTermSuccess = useTransform(scrollYProgress, [0.53, 0.54, 0.59, 0.60], [0, 1, 1, 0]);

  // ==================
  // SPRINT 2: DASHBOARD (0.59 - 0.70)
  // ==================
  const dashTabOpacity = useTransform(scrollYProgress, [0.58, 0.59, 0.72, 0.73], [0, 1, 1, 1]);
  const dashCode1 = useTransform(scrollYProgress, [0.59, 0.60], [0, 1]);
  const dashCode2 = useTransform(scrollYProgress, [0.60, 0.61], [0, 1]);
  const dashCodeError = useTransform(scrollYProgress, [0.61, 0.63, 0.66, 0.67], [0, 1, 1, 0]);
  const dashSquiggly = useTransform(scrollYProgress, [0.63, 0.64, 0.66, 0.67], [0, 1, 1, 0]);
  const dashCodeFixed = useTransform(scrollYProgress, [0.67, 0.68], [0, 1]);
  const dashTermError = useTransform(scrollYProgress, [0.63, 0.64, 0.67, 0.68], [0, 1, 1, 0]);
  const dashTermSuccess = useTransform(scrollYProgress, [0.68, 0.69, 0.72, 0.73], [0, 1, 1, 1]);

  const termIdleOpacity = useTransform(scrollYProgress, [0.49, 0.52], [1, 0]);

  return (
    <div className="d-flex flex-column rounded-4 shadow-lg overflow-hidden border border-secondary border-opacity-25" style={{ background: '#0a0a0c', width: isMobile ? '100%' : '50%', flex: isMobile ? 2 : 1 }}>
      {/* Editor Header with dynamic tabs */}
      <div className="d-flex align-items-end px-3 position-relative" style={{ background: '#111115', height: '45px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="d-flex gap-2 me-4 mb-3">
          <div className="rounded-circle bg-danger" style={{ width: '12px', height: '12px' }}></div>
          <div className="rounded-circle bg-warning" style={{ width: '12px', height: '12px' }}></div>
          <div className="rounded-circle bg-success" style={{ width: '12px', height: '12px' }}></div>
        </div>
        
        <motion.div className="position-absolute px-3 py-2 bg-dark rounded-top text-white text-opacity-75 fs-14 ff-mono" style={{ opacity: profileTabOpacity, bottom: 0, left: '90px', borderTop: '1px solid #333', borderRight: '1px solid #333', borderLeft: '1px solid #333' }}>
          <FiUser className="me-2"/>Profile.jsx
        </motion.div>

        <motion.div className="position-absolute px-3 py-2 bg-dark rounded-top text-white text-opacity-75 fs-14 ff-mono" style={{ opacity: dashTabOpacity, bottom: 0, left: '90px', borderTop: '1px solid #333', borderRight: '1px solid #333', borderLeft: '1px solid #333' }}>
          <FiLayout className="me-2"/>Dashboard.jsx
        </motion.div>
      </div>

      {/* Code Area */}
      <div className={`flex-grow-1 p-3 p-md-4 ff-mono ${isMobile ? 'fs-12' : 'fs-15'} position-relative overflow-hidden`} style={{ lineHeight: '1.8', color: '#abb2bf' }}>
        
        {/* SPRINT 1: PROFILE CODE */}
        <motion.div style={{ opacity: profileTabOpacity }} className="position-absolute w-100 h-100 top-0 start-0 p-4">
          <motion.div style={{ opacity: profileCode1 }}>
            <span style={{ color: '#c678dd' }}>export default function</span> <span style={{ color: '#61afef' }}>UserProfile</span>() {`{`}
          </motion.div>
          <motion.div style={{ opacity: profileCode2 }}>
            &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>const</span> user = <span style={{ color: '#56b6c2' }}>useQuery</span>(<span style={{ color: '#98c379' }}>'user'</span>);
          </motion.div>
          <motion.div style={{ opacity: profileCode3 }}>
            &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>return</span> (
          </motion.div>
          <motion.div style={{ opacity: profileCode4 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>div</span> <span style={{ color: '#d19a66' }}>className</span>=<span style={{ color: '#98c379' }}>"profile-card"</span>&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>Avatar</span> <span style={{ color: '#d19a66' }}>src</span>={`{user.image}`} /&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>h3</span>&gt;{`{`}user.name{`}`}&lt;/<span style={{ color: '#e06c75' }}>h3</span>&gt;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#e06c75' }}>div</span>&gt;
            <br/>&nbsp;&nbsp;)
            <br/>{`}`}
          </motion.div>
        </motion.div>

        {/* SPRINT 2: DASHBOARD CODE */}
        <motion.div style={{ opacity: dashTabOpacity }} className="position-absolute w-100 h-100 top-0 start-0 p-4">
          <motion.div style={{ opacity: dashCode1 }}>
            <span style={{ color: '#c678dd' }}>export default function</span> <span style={{ color: '#61afef' }}>Dashboard</span>({`{ data }`}) {`{`}
          </motion.div>
          <motion.div style={{ opacity: dashCode2 }}>
            &nbsp;&nbsp;<span style={{ color: '#c678dd' }}>return</span> (
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>div</span> <span style={{ color: '#d19a66' }}>className</span>=<span style={{ color: '#98c379' }}>"grid"</span>&gt;
          </motion.div>
          <div className="position-relative" style={{ height: '6rem' }}>
            <motion.div className="position-absolute w-100" style={{ opacity: dashCodeError }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{`}data.<span className="position-relative">
                iteems
                <motion.div 
                  className="position-absolute w-100" 
                  style={{ opacity: dashSquiggly, bottom: '-2px', height: '3px', background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 6 3\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0 2.5 L1.5 0.5 L4.5 2.5 L6 0.5\' fill=\'none\' stroke=\'%23e06c75\' stroke-width=\'1\'/%3E%3C/svg%3E") repeat-x' }} 
                />
              </span>.<span style={{ color: '#61afef' }}>map</span>(item =&gt; (
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>DataCard</span> <span style={{ color: '#d19a66' }}>metric</span>={`{item.value}`} /&gt;
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){`}`}
            </motion.div>
            <motion.div className="position-absolute w-100" style={{ opacity: dashCodeFixed }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`{`}data.items.<span style={{ color: '#61afef' }}>map</span>(item =&gt; (
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style={{ color: '#e06c75' }}>DataCard</span> <span style={{ color: '#d19a66' }}>metric</span>={`{item.value}`} /&gt;
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)){`}`}
            </motion.div>
          </div>
          <motion.div style={{ opacity: dashCode2 }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span style={{ color: '#e06c75' }}>div</span>&gt;
            <br/>&nbsp;&nbsp;)
            <br/>{`}`}
          </motion.div>
        </motion.div>
      </div>

      {/* Integrated Terminal */}
      <div className="position-relative" style={{ height: isMobile ? '100px' : '140px', background: '#050506', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div className={`position-absolute w-100 h-100 p-2 p-md-3 ff-mono ${isMobile ? 'fs-12' : 'fs-14'} text-white text-opacity-50`} style={{ opacity: termIdleOpacity }}>
          <div className="d-flex align-items-center gap-2 mb-2"><FiTerminal /> <span>bash</span></div>
          <div>$ npm run dev</div>
          <div className="txt-success">ready - started server on 0.0.0.0:3000</div>
          <div>wait  - compiling...</div>
        </motion.div>
        <motion.div className={`position-absolute w-100 h-100 p-2 p-md-3 ff-mono ${isMobile ? 'fs-12' : 'fs-14'}`} style={{ opacity: profileTermSuccess, background: 'rgba(152, 195, 121, 0.1)' }}>
          <div className="d-flex align-items-center gap-2 mb-2 txt-success fw-bold"><FiCheck /> <span>Compiled successfully!</span></div>
          <div className="txt-success opacity-75">✓ Hot reloaded Profile.jsx in 92ms.</div>
        </motion.div>
        <motion.div className={`position-absolute w-100 h-100 p-2 p-md-3 ff-mono ${isMobile ? 'fs-12' : 'fs-14'}`} style={{ opacity: dashTermError, background: 'rgba(224, 108, 117, 0.1)' }}>
          <div className="d-flex align-items-center gap-2 mb-2 txt-danger fw-bold"><FiAlertCircle /> <span>Failed to compile</span></div>
          <div className="txt-danger">./src/Dashboard.jsx:4:17</div>
          <div className="txt-ff opacity-75">TypeError: Cannot read properties of undefined (reading 'map')</div>
          <div className="txt-ff opacity-50">&gt; 4 | {`{`}data.items.map(item =&gt; (</div>
        </motion.div>
        <motion.div className={`position-absolute w-100 h-100 p-2 p-md-3 ff-mono ${isMobile ? 'fs-12' : 'fs-14'}`} style={{ opacity: dashTermSuccess, background: 'rgba(152, 195, 121, 0.1)' }}>
          <div className="d-flex align-items-center gap-2 mb-2 txt-success fw-bold"><FiCheck /> <span>Compiled successfully!</span></div>
          <div className="txt-success opacity-75">✓ Hot reloaded Dashboard.jsx in 124ms.</div>
        </motion.div>
      </div>
    </div>
  );
}
