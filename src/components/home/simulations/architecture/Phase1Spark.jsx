import React from 'react';
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

export default function Phase1Spark({ scrollYProgress, avatarClient, avatarDev }) {
  // Phase 1 Global Transform
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.01, 0.14, 0.17], [0, 1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0.14, 0.17], [1, 10]);

  // Message 1 (Client)
  const chat1Y = useTransform(scrollYProgress, [0.0, 0.02], [50, 0]);
  const chat1BgOpacity = useTransform(scrollYProgress, [0.0, 0.01], [0, 1]);

  // Message 2 (Dev)
  const chat2Y = useTransform(scrollYProgress, [0.03, 0.05], [50, 0]);
  const chat2BgOpacity = useTransform(scrollYProgress, [0.03, 0.04], [0, 1]);

  // Message 3 (Client)
  const chat3Y = useTransform(scrollYProgress, [0.06, 0.08], [50, 0]);
  const chat3BgOpacity = useTransform(scrollYProgress, [0.06, 0.07], [0, 1]);

  // Message 4 (Dev)
  const chat4Y = useTransform(scrollYProgress, [0.09, 0.11], [50, 0]);
  const chat4BgOpacity = useTransform(scrollYProgress, [0.09, 0.10], [0, 1]);

  return (
    <motion.div
      className="position-absolute d-flex flex-column align-items-center w-100"
      style={{ opacity: phase1Opacity, scale: phase1Scale }}
    >
      <div className="text-center mb-5">
        <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: '3rem' }}>The <span className="txt-ffd">Spark</span>.</h2>
        <p className="txt-f5 fs-19 mt-2">Every great product starts with a conversation.</p>
      </div>

      <div className="d-flex flex-column gap-4" style={{ maxWidth: '800px', width: '90%' }}>
        {/* Chat 1: Client */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-start" style={{ y: chat1Y }}>
          <motion.img src={avatarClient} alt="Client" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat1BgOpacity, width: '45px', height: '45px', objectFit: 'cover' }} />
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: '450px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderBottomLeftRadius: '0px', opacity: chat1BgOpacity }}>
            <p className="txt-ff mb-0 fw-500 fs-18" style={{ lineHeight: '1.5' }}>
              <TypingText text="Hi Team! We are ready to start building our new platform. It needs to be scalable and feel like a native app." progress={scrollYProgress} start={0.01} end={0.03} />
            </p>
          </motion.div>
        </motion.div>

        {/* Chat 2: Dev */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-end" style={{ y: chat2Y }}>
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: '450px', background: 'rgba(255, 216, 0, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 216, 0, 0.3)', borderBottomRightRadius: '0px', opacity: chat2BgOpacity }}>
            <p className="txt-ffd mb-0 fw-500 fs-18" style={{ lineHeight: '1.5' }}>
              <TypingText text="Hey! Absolutely, we can achieve that. Will you need a custom backend and admin dashboard too?" progress={scrollYProgress} start={0.04} end={0.06} />
            </p>
          </motion.div>
          <motion.img src={avatarDev} alt="Dev" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat2BgOpacity, width: '45px', height: '45px', objectFit: 'cover' }} />
        </motion.div>

        {/* Chat 3: Client */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-start" style={{ y: chat3Y }}>
          <motion.img src={avatarClient} alt="Client" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat3BgOpacity, width: '45px', height: '45px', objectFit: 'cover' }} />
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: '450px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.05)', borderBottomLeftRadius: '0px', opacity: chat3BgOpacity }}>
            <p className="txt-ff mb-0 fw-500 fs-18" style={{ lineHeight: '1.5' }}>
              <TypingText text="Yes, a fully custom dashboard. Also, can we ensure the UI is modern with dark mode?" progress={scrollYProgress} start={0.07} end={0.09} />
            </p>
          </motion.div>
        </motion.div>

        {/* Chat 4: Dev */}
        <motion.div className="d-flex align-items-end gap-3 w-100 justify-content-end" style={{ y: chat4Y }}>
          <motion.div className="p-3 rounded-4 shadow" style={{ maxWidth: '450px', background: 'rgba(255, 216, 0, 0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 216, 0, 0.3)', borderBottomRightRadius: '0px', opacity: chat4BgOpacity }}>
            <p className="txt-ffd mb-0 fw-500 fs-18" style={{ lineHeight: '1.5' }}>
              <TypingText text="Definitely. We'll implement a premium glassmorphism design system. Let's map out the blueprint!" progress={scrollYProgress} start={0.10} end={0.12} />
            </p>
          </motion.div>
          <motion.img src={avatarDev} alt="Dev" className="rounded-circle shadow flex-shrink-0" style={{ opacity: chat4BgOpacity, width: '45px', height: '45px', objectFit: 'cover' }} />
        </motion.div>

      </div>
    </motion.div>
  );
}
