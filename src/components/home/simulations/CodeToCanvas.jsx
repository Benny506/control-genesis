import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiCode, FiMousePointer } from 'react-icons/fi';

function CodeToCanvas() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Milestones in 500vh container
  // 0% - 20%: Nav
  // 20% - 40%: Hero
  // 40% - 60%: Features
  // 60% - 80%: App
  // 80% - 90%: Breakout
  // 90% - 100%: Tour

  // Breakout Transitions
  const ideOpacity = useTransform(scrollYProgress, [0.65, 0.75], [1, 0]);
  const ideWidth = useTransform(scrollYProgress, [0.65, 0.8], ["48%", "0%"]);
  const canvasWidth = useTransform(scrollYProgress, [0.65, 0.8], ["48%", "100%"]);

  const iphoneOpacity = useTransform(scrollYProgress, [0.7, 0.75], [1, 0]);
  const iphoneScale = useTransform(scrollYProgress, [0.65, 0.75], [1, 1.15]);

  const fullscreenOpacity = useTransform(scrollYProgress, [0.72, 0.78], [0, 1]);

  // Tour Pan (Disabled since no content to pan into)
  const appPanY = useTransform(scrollYProgress, [0.8, 0.85], ["0%", "0%"]);

  // Cursor
  const cursorX = useTransform(scrollYProgress, [0.82, 0.88], ["150%", "50%"]);
  const cursorY = useTransform(scrollYProgress, [0.82, 0.88], ["150%", "45%"]);
  const cursorScale = useTransform(scrollYProgress, [0.88, 0.9, 0.92], [1, 0.8, 1]);

  // Modal Open
  const modalOpacity = useTransform(scrollYProgress, [0.92, 0.95], [0, 1]);
  const modalScale = useTransform(scrollYProgress, [0.92, 0.95], [0.8, 1]);

  // Code Strings
  const navCode = `function Navigation() {\n  return (\n    <nav className="glass d-flex justify-content-between p-3">\n      <div className="logo txt-ffd fw-bold">CG.</div>\n      <div className="links">\n        <a href="#work">Works</a>\n      </div>\n    </nav>\n  );\n}`;
  const navTypedCount = useTransform(scrollYProgress, [0, 0.15], [0, navCode.length]);

  const heroCode = `function Hero() {\n  return (\n    <header className="hero-section text-center py-5">\n      <h1 className="display-4 fw-900 txt-ff">\n        Control <span className="txt-ffd">Genesis</span>\n      </h1>\n      <p className="txt-f5 opacity-75 mt-3">\n        Engineering Digital Dominance.\n      </p>\n      <button className="btn btn-warning mt-4 rounded-pill">\n        Get Started\n      </button>\n    </header>\n  );\n}`;
  const heroTypedCount = useTransform(scrollYProgress, [0.15, 0.35], [0, heroCode.length]);

  const featuresCode = `function Features() {\n  return (\n    <section className="features grid gap-3 px-3">\n      <div className="card glass p-3 rounded-4">\n        <h4 className="txt-ffd fs-6">UI/UX</h4>\n        <p className="txt-f5 opacity-50 m-0 small">Pixel perfect precision.</p>\n      </div>\n      <div className="card glass p-3 rounded-4">\n        <h4 className="txt-ffd fs-6">Engineering</h4>\n        <p className="txt-f5 opacity-50 m-0 small">Built to scale infinitely.</p>\n      </div>\n    </section>\n  );\n}`;
  const featuresTypedCount = useTransform(scrollYProgress, [0.35, 0.5], [0, featuresCode.length]);

  const appCode = `import Navigation from './Navigation';\nimport Hero from './Hero';\nimport Features from './Features';\n\nexport default function App() {\n  return (\n    <main className="bg-02 min-vh-100">\n      <Navigation />\n      <Hero />\n      <Features />\n    </main>\n  );\n}`;
  const appTypedCount = useTransform(scrollYProgress, [0.5, 0.65], [0, appCode.length]);

  // IDE Rendering Logic
  const activeTab = useTransform(scrollYProgress, (v) => {
    if (v < 0.15) return 'Navigation.jsx';
    if (v < 0.35) return 'HeroSection.jsx';
    if (v < 0.5) return 'Features.jsx';
    return 'App.jsx';
  });

  const activeCodeString = useTransform(
    [activeTab, navTypedCount, heroTypedCount, featuresTypedCount, appTypedCount],
    ([tab, navCount, heroCount, featCount, appCount]) => {
      if (tab === 'Navigation.jsx') return navCode.slice(0, Math.floor(navCount));
      if (tab === 'HeroSection.jsx') return heroCode.slice(0, Math.floor(heroCount));
      if (tab === 'Features.jsx') return featuresCode.slice(0, Math.floor(featCount));
      return appCode.slice(0, Math.floor(appCount));
    }
  );

  // Canvas Boolean States
  const [showNav, setShowNav] = React.useState(false);
  const [showHeroText, setShowHeroText] = React.useState(false);
  const [showHeroButton, setShowHeroButton] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [showAppBg, setShowAppBg] = React.useState(false);

  useScroll({ target: containerRef }).scrollYProgress.onChange((v) => {
    setShowNav(v > 0.05);
    setShowHeroText(v > 0.20);
    setShowHeroButton(v > 0.30);
    setShowFeatures(v > 0.40);
    setShowAppBg(v > 0.55);
  });

  const AppUI = ({ isFullscreen }) => (
    <motion.div
      className="w-100 h-100 position-relative d-flex flex-column"
      style={{
        background: showAppBg ? '#0a0a0a' : '#111',
        y: isFullscreen ? appPanY : 0,
        overflow: 'hidden'
      }}
    >
      {/* Navigation */}
      {showNav && (
        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="d-flex justify-content-between align-items-center p-3" style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="fw-bold txt-ffd fs-5" style={{ letterSpacing: '-1px' }}>CG.</div>
          <div className="d-flex gap-3">
            <div style={{ width: '30px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
            <div style={{ width: '20px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
          </div>
        </motion.div>
      )}

      {/* Hero */}
      <div className="d-flex flex-column align-items-center justify-content-center text-center px-3 position-relative flex-grow-1 py-3">

        {/* Abstract Background for Desktop */}
        {isFullscreen && (
          <div className="position-absolute w-100 h-100" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0 }}></div>
        )}

        {showHeroText && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ zIndex: 1 }}>
            <h1 className="txt-ff fw-800 m-0" style={{ fontSize: isFullscreen ? 'clamp(3rem, 5vw, 5rem)' : '1.8rem', lineHeight: 1.1 }}>
              Control <span className="txt-ffd">Genesis</span>
            </h1>
            <p className="txt-f5 opacity-75 mt-3" style={{ fontSize: isFullscreen ? '1.2rem' : '0.8rem', maxWidth: isFullscreen ? '600px' : '100%', margin: '0 auto' }}>
              Engineering Digital Dominance. From ideation to production.
            </p>
          </motion.div>
        )}

        {showHeroButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn btn-warning rounded-pill mt-4 fw-bold"
            style={{ padding: isFullscreen ? '15px 40px' : '10px 20px', fontSize: isFullscreen ? '1.1rem' : '0.9rem', boxShadow: '0 10px 30px rgba(255, 216, 0, 0.3)', zIndex: 1 }}
          >
            Get Started
          </motion.button>
        )}
      </div>

      {/* Features Section */}
      {showFeatures && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pb-4"
        >
          <div className="row g-3">
            <div className="col-12 col-md-6">
              <div className="p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <h4 className="txt-ffd m-0" style={{ fontSize: isFullscreen ? '1.2rem' : '0.9rem' }}>UI/UX Design</h4>
                <p className="txt-f5 opacity-50 m-0 mt-1" style={{ fontSize: isFullscreen ? '1rem' : '0.75rem' }}>Pixel perfect precision.</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-3 rounded-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <h4 className="txt-ffd m-0" style={{ fontSize: isFullscreen ? '1.2rem' : '0.9rem' }}>Coding</h4>
                <p className="txt-f5 opacity-50 m-0 mt-1" style={{ fontSize: isFullscreen ? '1rem' : '0.75rem' }}>Built to scale infinitely.</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}



      {/* Tour Modal & Cursor */}
      {isFullscreen && (
        <>
          <motion.div
            className="position-absolute"
            style={{
              top: '50%', left: '50%',
              x: '-50%', y: '-50%',
              opacity: modalOpacity,
              scale: modalScale,
              background: 'rgba(30,30,30,0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              zIndex: 100,
              width: '400px',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}
          >
            <h3 className="txt-ffd fw-bold">Let's Build.</h3>
            <p className="txt-f5 mb-4">Your digital dominance starts here.</p>
            <input type="text" placeholder="Email Address" className="form-control mb-3 bg-dark text-white border-secondary" />
            <button className="btn btn-warning w-100 rounded-pill fw-bold py-2">Send Request</button>
          </motion.div>

          <motion.div
            className="position-absolute"
            style={{
              left: cursorX, top: cursorY, scale: cursorScale,
              zIndex: 1000,
              pointerEvents: 'none'
            }}
          >
            <FiMousePointer size={40} color="#fff" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }} />
          </motion.div>
        </>
      )}

    </motion.div>
  );

  return (
    <div ref={containerRef} style={{ height: '250vh', position: 'relative' }}>

      {/* Sticky Container */}
      <div className="position-sticky top-0 w-100 d-flex flex-column justify-content-center overflow-hidden" style={{ height: '100vh', background: '#050505' }}>
        <div className="container position-relative h-100 py-4 d-flex flex-column">

          <div className="text-center mb-4 pb-2 flex-shrink-0" style={{ zIndex: 10 }}>
            <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>From <span className="txt-ffd">Code</span> to <span className="txt-ffd">Canvas</span>.</h2>
            <p className="txt-f5 fs-19 mt-2 mb-0">Scroll to control the build process. From modular files to a fullscreen experience.</p>
          </div>

          <div className="d-flex align-items-stretch justify-content-between mx-auto flex-grow-1" style={{ width: '100%', maxWidth: '1200px', minHeight: 0 }}>

            {/* Left Pane - IDE */}
            <motion.div
              className="h-100"
              style={{ width: ideWidth, opacity: ideOpacity, flexShrink: 0 }}
            >
              <div className="rounded-4 overflow-hidden shadow-lg h-100 d-flex flex-column" style={{ background: '#1e1e1e', border: '1px solid #333' }}>
                <div className="d-flex align-items-center px-3 py-3" style={{ background: '#2d2d2d', borderBottom: '1px solid #111' }}>
                  <div className="d-flex gap-2">
                    <div className="rounded-circle" style={{ width: '12px', height: '12px', background: '#ff5f56' }}></div>
                    <div className="rounded-circle" style={{ width: '12px', height: '12px', background: '#ffbd2e' }}></div>
                    <div className="rounded-circle" style={{ width: '12px', height: '12px', background: '#27c93f' }}></div>
                  </div>
                  <div className="ms-3 txt-f5 text-tiny ff-mono opacity-50 d-flex align-items-center gap-2">
                    <FiCode /> <motion.span>{activeTab}</motion.span>
                  </div>
                </div>

                <div className="p-4 p-md-5 ff-mono position-relative flex-grow-1 overflow-hidden" style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', lineHeight: '1.6', color: '#d4d4d4' }}>
                  <pre className="m-0" style={{ whiteSpace: 'pre-wrap' }}>
                    <motion.span>{activeCodeString}</motion.span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      style={{ borderRight: '2px solid #FFD800', marginLeft: '2px' }}
                    />
                  </pre>
                </div>
              </div>
            </motion.div>

            {/* Right Pane - Canvas UI */}
            <motion.div
              className="position-relative h-100 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{ width: canvasWidth }}
            >

              {/* iPhone Mockup (Fades out during breakout) */}
              <motion.div
                className="position-absolute shadow-lg"
                style={{
                  width: '250px', height: '500px',
                  background: '#000', borderRadius: '35px', border: '10px solid #222',
                  opacity: iphoneOpacity, scale: iphoneScale,
                  zIndex: 2, overflow: 'hidden'
                }}
              >
                {/* Notch */}
                <div className="position-absolute" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', width: '130px', height: '30px', background: '#222', borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', zIndex: 10 }}></div>
                <AppUI isFullscreen={false} />
              </motion.div>

              {/* Fullscreen Breakout (Fades in during breakout) */}
              <motion.div
                className="position-absolute w-100 h-100 rounded-4 overflow-hidden shadow-lg"
                style={{
                  opacity: fullscreenOpacity,
                  zIndex: 1,
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <AppUI isFullscreen={true} />
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default CodeToCanvas;
