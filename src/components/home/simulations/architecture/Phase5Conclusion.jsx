import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';

function TypingText({ text, progress, start, end }) {
  const words = text.split(" ");
  const step = (end - start) / words.length;

  return (
    <>
      {words.map((word, i) => {
        const wordStart = start + step * i;
        const wordEnd = wordStart + step;
        const opacity = useTransform(progress, [wordStart, wordEnd], [0, 1]);
        return (
          <React.Fragment key={i}>
            <motion.span style={{ opacity }}>
              {word}
            </motion.span>
            {" "}
          </React.Fragment>
        );
      })}
    </>
  );
}

export default function Phase5Conclusion({ scrollYProgress, avatarClient, avatarDev }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Master opacity (Starts at 1 so it seamlessly scrolls into view under Phase 4)
  const phase5Opacity = useTransform(scrollYProgress, [0, 0.7, 0.8], [1, 1, 0]);

  // Message 1 (Dev)
  const chat1Y = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);
  const chat1BgOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);

  // Message 2 (Client)
  const chat2Y = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);
  const chat2BgOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  // Message 3 (Dev)
  const chat3Y = useTransform(scrollYProgress, [0.5, 0.6], [50, 0]);
  const chat3BgOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  // Message 4 (Client)
  const chat4Y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);
  const chat4BgOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  return (
    <motion.div
      className="position-absolute d-flex flex-column align-items-center w-100"
      style={{ opacity: phase5Opacity }}
    >
      <div className="text-center mb-5">
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: isMobile ? '2.5rem' : '3rem' }}>The <span className="text-success">Launch</span>.</h2>
        <p className={`txt-f5 ${isMobile ? 'fs-16' : 'fs-19'} mt-2`}>Delivered on time. Beyond expectations.</p>
      </div>

      <div className="d-flex flex-column gap-4" style={{ maxWidth: '800px', width: '90%' }}>
        
        {/* Chat 1: Dev */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-end" style={{ y: chat1Y }}>
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: isMobile ? '85%' : '450px', background: 'rgba(255, 216, 0, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 216, 0, 0.3)', borderBottomRightRadius: '0px', opacity: chat1BgOpacity }}>
            <p className={`txt-ffd mb-0 fw-500 ${isMobile ? 'fs-14' : 'fs-18'}`} style={{ lineHeight: '1.5' }}>
              <TypingText text="Hey! The MVP is officially complete and deployed to production. The dashboard is fully responsive!" progress={scrollYProgress} start={0.2} end={0.3} />
            </p>
          </motion.div>
          <motion.img src={avatarDev} alt="Dev" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat1BgOpacity, width: isMobile ? '35px' : '45px', height: isMobile ? '35px' : '45px', objectFit: 'cover' }} />
        </motion.div>

        {/* Chat 2: Client */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-start" style={{ y: chat2Y }}>
          <motion.img src={avatarClient} alt="Client" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat2BgOpacity, width: isMobile ? '35px' : '45px', height: isMobile ? '35px' : '45px', objectFit: 'cover' }} />
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: isMobile ? '85%' : '450px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderBottomLeftRadius: '0px', opacity: chat2BgOpacity }}>
            <p className={`txt-ff mb-0 fw-500 ${isMobile ? 'fs-14' : 'fs-18'}`} style={{ lineHeight: '1.5' }}>
              <TypingText text="This is absolutely wonderful! I'm amazed at how fast and fluid the mobile view feels." progress={scrollYProgress} start={0.4} end={0.5} />
            </p>
          </motion.div>
        </motion.div>

        {/* Chat 3: Dev */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-end" style={{ y: chat3Y }}>
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: isMobile ? '85%' : '450px', background: 'rgba(255, 216, 0, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 216, 0, 0.3)', borderBottomRightRadius: '0px', opacity: chat3BgOpacity }}>
            <p className={`txt-ffd mb-0 fw-500 ${isMobile ? 'fs-14' : 'fs-18'}`} style={{ lineHeight: '1.5' }}>
              <TypingText text="Glad you love it! We optimized the transitions and assets so it runs at a solid 60fps." progress={scrollYProgress} start={0.6} end={0.7} />
            </p>
          </motion.div>
          <motion.img src={avatarDev} alt="Dev" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat3BgOpacity, width: isMobile ? '35px' : '45px', height: isMobile ? '35px' : '45px', objectFit: 'cover' }} />
        </motion.div>

        {/* Chat 4: Client */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-start" style={{ y: chat4Y }}>
          <motion.img src={avatarClient} alt="Client" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat4BgOpacity, width: isMobile ? '35px' : '45px', height: isMobile ? '35px' : '45px', objectFit: 'cover' }} />
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: isMobile ? '85%' : '450px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderBottomLeftRadius: '0px', opacity: chat4BgOpacity }}>
            <p className={`txt-ff mb-0 fw-500 ${isMobile ? 'fs-14' : 'fs-18'}`} style={{ lineHeight: '1.5' }}>
              <TypingText text="Incredible work, team! Let's schedule a call tomorrow to review the launch metrics." progress={scrollYProgress} start={0.8} end={0.9} />
            </p>
          </motion.div>
        </motion.div>
        
      </div>
    </motion.div>
  );
}
