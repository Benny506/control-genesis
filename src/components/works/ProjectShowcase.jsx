import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../navigation/navigation';
import Footer from '../footer/footer';
import { showcasesData } from '../../contants/showcasesData';
import SEO from '../common/SEO';
import './ProjectShowcase.css';

export default function ProjectShowcase({ customSlug }) {
  const navigate = useNavigate();
  const { slug: routeSlug } = useParams();
  const slug = (customSlug || routeSlug || 'lavendercare').toLowerCase().replace(/[^a-z0-9]+/g, '');
  const project = showcasesData[slug] || showcasesData.lavendercare;

  // Scroll to top when project slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Compute next project for single-tap navigation with wrap-around
  const projectKeys = Object.keys(showcasesData);
  const currentProjectIndex = projectKeys.indexOf(project.slug);
  const nextProjectIndex = currentProjectIndex >= 0 ? (currentProjectIndex + 1) % projectKeys.length : 0;
  const nextProjectKey = projectKeys[nextProjectIndex];
  const nextProject = showcasesData[nextProjectKey];
  const isLastProject = currentProjectIndex === projectKeys.length - 1;

  // Next project preview image
  const nextProjectPreviewImage =
    nextProject?.gallery?.billboard?.image ||
    nextProject?.hero?.image ||
    nextProject?.appScreens?.[0]?.image ||
    nextProject?.gallery?.community?.image;

  const videoRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Set custom video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = project.hero?.playbackRate || 0.75;
    }
  }, [project]);

  const isDesktop = project.deviceType === 'desktop' || (!project.hero?.video && Boolean(project.hero?.image));
  const isLandscapeScreens = Boolean(project.isLandscapeScreens || isDesktop);

  // Extract all available screenshots for the auto-looping screen walkthrough
  const heroScreenshots = project.hero?.screenshots?.length
    ? project.hero.screenshots
    : project.appScreens?.map(s => s.image) || (project.hero?.image ? [project.hero.image] : []);

  // Reset active screen index when project changes
  useEffect(() => {
    setActiveScreenIndex(0);
  }, [project.slug]);

  // Seamless non-controllable auto-looping carousel (feels like a video walk-through)
  useEffect(() => {
    if (!project.hero?.video && heroScreenshots.length > 1) {
      const interval = setInterval(() => {
        setActiveScreenIndex((prev) => (prev + 1) % heroScreenshots.length);
      }, 3600);
      return () => clearInterval(interval);
    }
  }, [project.hero?.video, heroScreenshots.length, project.slug]);

  // Horizontal scroll controller for app/site screenshots gallery
  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = isLandscapeScreens ? 560 : 360;
      galleryRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const glowColor = project.hero?.glowColor || 'rgba(175, 140, 245, 0.18)';

  const pageTitle = `${project.title} — Case Study & Digital Architecture | Control Genesis`;
  const pageDescription = project.intro?.statement || `Explore how Control Genesis engineered the ${project.title} platform: ${project.meta?.projectType || 'Digital Architecture'}. We build digital solutions.`;
  const pageKeywords = `${project.title}, ${project.meta?.projectType || ''}, ${project.meta?.deliverables || ''}, Control Genesis, We build digital solutions, software architecture, app development`;
  const canonicalUrl = `https://controlgenesis.com/#/works/${slug}`;
  const previewImage = project.gallery?.billboard?.image || project.hero?.image || project.appScreens?.[0]?.image || "https://controlgenesis.com/assets/images/backgroundPattern.webp";

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "applicationCategory": project.meta?.projectType || "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": pageDescription,
    "url": canonicalUrl,
    "image": previewImage,
    "creator": {
      "@type": "Organization",
      "name": "Control Genesis",
      "url": "https://controlgenesis.com",
      "slogan": "We build digital solutions"
    }
  };

  const breadcrumbs = [
    { name: "Home", url: "/#/" },
    { name: "Works", url: "/#/works" },
    { name: project.title, url: `/#/works/${slug}` },
  ];

  return (
    <div className="bg-02 position-relative" style={{ width: '100vw', minHeight: '100vh', color: '#fff', overflowX: 'hidden' }}>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonical={canonicalUrl}
        image={previewImage}
        schema={projectSchema}
        breadcrumbs={breadcrumbs}
      />

      {/* Uniform Moving Background Canvas */}
      <div className="cg-moving-canvas-bg" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content Container */}
      <div className="container-fluid d-flex flex-column position-relative" style={{ padding: '0 5vw', paddingTop: '12vh', zIndex: 1 }}>

        {/* Title Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="ff-gro fw-400 m-0 showcase-main-title">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Metadata Section - MetaLab Style */}
        <div className="row mt-4 pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="col-md-4 mb-4">
            <p className="fw-700 ff-gro mb-2 fs-19">Project Type</p>
            <p className="txt-f5 fs-16 mb-0" style={{ opacity: 0.65 }}>{project.meta?.projectType}</p>
          </div>
          <div className="col-md-4 mb-4">
            <p className="fw-700 ff-gro mb-2 fs-19">Ecosystem Complexity</p>
            <p className="txt-f5 fs-16 mb-0" style={{ opacity: 0.65 }}>{project.meta?.ecosystemComplexity}</p>
          </div>
          <div className="col-md-4 mb-4">
            <p className="fw-700 ff-gro mb-2 fs-19">Deliverables</p>
            <p className="txt-f5 fs-16 mb-0" style={{ opacity: 0.65 }}>{project.meta?.deliverables}</p>
          </div>
        </div>

        {/* Hero Centerpiece: Elevated Display Stage with Side Annotations */}
        <div
          className={`position-relative d-flex align-items-center justify-content-center showcase-hero-stage ${isDesktop ? 'is-landscape' : 'is-phone'}`}
        >
          {/* Volumetric Stage Spotlight Halo */}
          <div
            className="showcase-halo"
            style={{
              position: 'absolute',
              top: '42%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: isDesktop ? 'min(1320px, 98vw)' : 'min(700px, 90vw)',
              height: '580px',
              background: `radial-gradient(ellipse at center, ${glowColor} 0%, rgba(255, 255, 255, 0.03) 40%, rgba(0,0,0,0) 70%)`,
              filter: 'blur(45px)',
              pointerEvents: 'none',
              zIndex: 1
            }}
          />

          {/* Left Side Annotation (Desktop) */}
          {project.hero?.annotationLeft && (
            <div
              className="d-none d-lg-flex flex-column position-absolute"
              style={{
                left: isDesktop ? '1%' : '4%',
                top: '38%',
                maxWidth: '240px',
                zIndex: 10,
                transform: 'translateY(-50%)'
              }}
            >
              <span
                className="ff-gro fw-600 mb-2"
                style={{ fontSize: '11px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' }}
              >
                {project.hero.annotationLeft.tag}
              </span>
              <h3 className="ff-gro fw-500 txt-ff mb-2" style={{ fontSize: '19px', lineHeight: 1.3 }}>
                {project.hero.annotationLeft.title}
              </h3>
              <p className="txt-f5 mb-0" style={{ fontSize: '13px', lineHeight: 1.6, opacity: 0.55 }}>
                {project.hero.annotationLeft.desc}
              </p>
            </div>
          )}

          {/* Centerpiece Stage Container */}
          <div className="d-flex flex-column align-items-center position-relative" style={{ zIndex: 5, width: '100%' }}>

            {/* Concentric Exhibit Floor Stage Rings (Behind & Underneath) */}
            <div
              className="showcase-stage-ring-outer"
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isDesktop ? 'min(1280px, 96vw)' : 'min(580px, 95vw)',
                height: isDesktop ? '540px' : '580px',
                borderRadius: '50%',
                border: '1px dashed rgba(255, 255, 255, 0.06)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />
            <div
              className="showcase-stage-ring-inner"
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isDesktop ? 'min(1080px, 90vw)' : 'min(440px, 80vw)',
                height: isDesktop ? '420px' : '440px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Viewport Centerpiece: Desktop Browser Mockup OR Titanium iPhone */}
            {isDesktop ? (
              /* Desktop Browser Viewport Mockup - Enforced Dimensions & Zero Cropping */
              <div
                style={{
                  position: 'relative',
                  zIndex: 5,
                  width: 'min(1152px, 94vw)',
                  backgroundColor: '#0c0c10',
                  borderRadius: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: `
                    0 35px 90px -15px rgba(0, 0, 0, 0.95),
                    0 15px 35px -8px rgba(0, 0, 0, 0.8),
                    inset 0 1px 1px rgba(255, 255, 255, 0.15)
                  `,
                  overflow: 'hidden',
                  transform: 'translateY(-6px)',
                  transition: 'transform 0.4s ease'
                }}
              >
                {/* Browser Top Chrome Header */}
                <div
                  style={{
                    height: '42px',
                    backgroundColor: '#16161b',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 16px',
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  {/* Traffic Light Dots */}
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>

                  {/* URL Address Bar */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '8px',
                      padding: '3px 18px',
                      fontSize: '12px',
                      color: 'rgba(255, 255, 255, 0.65)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      maxWidth: '360px',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                    className="ff-gro"
                  >
                    <span style={{ fontSize: '10px', opacity: 0.7 }}>🔒</span>
                    <span>{project.hero?.browserUrl || project.intro?.links?.find(l => l.primary)?.url?.replace(/^https?:\/\//, '') || `${project.slug}.com`}</span>
                  </div>

                  {/* Spacer */}
                  <div style={{ width: '45px' }} />
                </div>

                {/* Viewport Screen Content - Exact PC Screenshot Aspect Ratio (2880 / 1436) */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3080 / 1506',
                    backgroundColor: '#050507',
                    overflow: 'hidden'
                  }}
                >
                  {project.hero?.video ? (
                    <video
                      ref={videoRef}
                      autoPlay
                      loop
                      muted
                      playsInline
                      key={project.slug}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    >
                      <source src={project.hero.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : heroScreenshots.length > 0 ? (
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                      {heroScreenshots.map((imgSrc, idx) => (
                        <img
                          key={idx}
                          src={imgSrc}
                          alt={`${project.title} interface preview ${idx + 1}`}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                            opacity: activeScreenIndex === idx ? 1 : 0,
                            transform: activeScreenIndex === idx ? 'scale(1)' : 'scale(1.02)',
                            transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                            pointerEvents: 'none',
                            zIndex: activeScreenIndex === idx ? 2 : 1
                          }}
                        />
                      ))}

                      {/* Ambient Progress Indicator Pills */}
                      {heroScreenshots.length > 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '16px',
                            zIndex: 10,
                            display: 'flex',
                            gap: heroScreenshots.length > 12 ? '4px' : '6px',
                            backgroundColor: 'rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            border: '1px solid rgba(255,255,255,0.12)',
                            maxWidth: '85%',
                            flexWrap: 'wrap'
                          }}
                        >
                          {heroScreenshots.map((_, idx) => (
                            <div
                              key={idx}
                              style={{
                                width: activeScreenIndex === idx ? (heroScreenshots.length > 12 ? '10px' : '18px') : '4px',
                                height: '4px',
                                borderRadius: '2px',
                                backgroundColor: activeScreenIndex === idx ? '#fff' : 'rgba(255,255,255,0.3)',
                                transition: 'all 0.4s ease'
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : (
              /* iPhone 16 Pro Style Centerpiece */
              <div
                style={{
                  position: 'relative',
                  zIndex: 5,
                  width: '290px',
                  height: '595px',
                  backgroundColor: '#000',
                  borderRadius: '46px',
                  border: '11px solid #1a1a1d',
                  boxShadow: `
                    0 28px 60px -15px rgba(0, 0, 0, 0.95),
                    0 12px 24px -6px rgba(0, 0, 0, 0.8),
                    inset 0 0 0 1.5px rgba(255, 255, 255, 0.16),
                    inset 0 0 0 3px rgba(0, 0, 0, 0.85)
                  `,
                  overflow: 'hidden',
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.4s ease'
                }}
              >
                {/* Specular Light Reflection Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 35%, transparent 60%)',
                    pointerEvents: 'none',
                    zIndex: 25,
                    borderRadius: '35px'
                  }}
                />

                {/* Dynamic Island */}
                <div
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '94px',
                    height: '25px',
                    backgroundColor: '#000',
                    borderRadius: '16px',
                    zIndex: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingRight: '12px',
                    boxShadow: '0 0 1px 1px rgba(255,255,255,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 35% 35%, #2a3b5c 0%, #0d121d 60%, #000 100%)',
                      boxShadow: 'inset 0 0 2px rgba(255,255,255,0.3)'
                    }}
                  />
                </div>

                {/* Hardware Side Buttons */}
                <div style={{ position: 'absolute', top: '95px', left: '-11px', width: '3px', height: '22px', background: 'linear-gradient(to right, #444, #222)', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', top: '138px', left: '-11px', width: '3px', height: '44px', background: 'linear-gradient(to right, #444, #222)', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', top: '195px', left: '-11px', width: '3px', height: '44px', background: 'linear-gradient(to right, #444, #222)', borderRadius: '2px 0 0 2px' }} />
                <div style={{ position: 'absolute', top: '155px', right: '-11px', width: '3px', height: '68px', background: 'linear-gradient(to left, #444, #222)', borderRadius: '0 2px 2px 0' }} />

                {/* Screen Content: Video or Auto-Looping Mobile Screenshots */}
                {project.hero?.video ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    key={project.slug}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '35px',
                      display: 'block'
                    }}
                  >
                    <source src={project.hero.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : heroScreenshots.length > 0 ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '35px', overflow: 'hidden' }}>
                    {heroScreenshots.map((imgSrc, idx) => (
                      <img
                        key={idx}
                        src={imgSrc}
                        alt={`${project.title} screen preview ${idx + 1}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                          opacity: activeScreenIndex === idx ? 1 : 0,
                          transform: activeScreenIndex === idx ? 'scale(1)' : 'scale(1.04)',
                          transition: 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                          pointerEvents: 'none',
                          zIndex: activeScreenIndex === idx ? 2 : 1
                        }}
                      />
                    ))}

                    {/* Progress Dots in Phone Frame */}
                    {heroScreenshots.length > 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '24px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          zIndex: 10,
                          display: 'flex',
                          gap: '5px',
                          backgroundColor: 'rgba(0,0,0,0.55)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          padding: '3px 8px',
                          borderRadius: '10px',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}
                      >
                        {heroScreenshots.map((_, idx) => (
                          <div
                            key={idx}
                            style={{
                              width: activeScreenIndex === idx ? '14px' : '5px',
                              height: '4px',
                              borderRadius: '2px',
                              backgroundColor: activeScreenIndex === idx ? '#fff' : 'rgba(255,255,255,0.3)',
                              transition: 'all 0.3s ease'
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )}

            {/* Multi-Tiered Architectural Exhibition Pedestal */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                marginTop: isDesktop ? '-22px' : '-32px',
                width: isDesktop ? 'min(1140px, 94vw)' : 'min(440px, 85vw)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Contact Shadow immediately under the frame */}
              <div
                style={{
                  width: isDesktop ? '75%' : '220px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.7) 45%, transparent 80%)',
                  filter: 'blur(6px)',
                  marginBottom: '-10px',
                  zIndex: 4
                }}
              />

              {/* Pedestal Tier 1: Frosted Glass Top Disc */}
              <div
                style={{
                  width: '100%',
                  height: isDesktop ? '52px' : '65px',
                  borderRadius: '50%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 55%, rgba(12, 12, 14, 0.85) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: `
                    0 18px 36px rgba(0, 0, 0, 0.85),
                    inset 0 1.5px 1.5px rgba(255, 255, 255, 0.3),
                    inset 0 -2px 6px rgba(0, 0, 0, 0.7)
                  `,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  zIndex: 3
                }}
              />

              {/* Pedestal Tier 2: Slate Titanium Cylinder Step */}
              <div
                style={{
                  width: '88%',
                  height: isDesktop ? '20px' : '24px',
                  marginTop: '-18px',
                  borderRadius: '0 0 50% 50% / 0 0 100% 100%',
                  background: 'linear-gradient(180deg, #1c1c20 0%, #0d0d10 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderTop: 'none',
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.9)',
                  zIndex: 2
                }}
              />

              {/* Pedestal Tier 3: Floor Ambient Halo Glow */}
              <div
                style={{
                  width: '125%',
                  height: isDesktop ? '40px' : '45px',
                  marginTop: '-25px',
                  borderRadius: '50%',
                  background: `radial-gradient(ellipse at center, ${glowColor} 0%, rgba(0, 0, 0, 0.75) 50%, transparent 80%)`,
                  filter: 'blur(14px)',
                  zIndex: 1
                }}
              />
            </div>

          </div>

          {/* Right Side Annotation (Desktop) */}
          {project.hero?.annotationRight && (
            <div
              className="d-none d-lg-flex flex-column position-absolute"
              style={{
                right: '4%',
                top: '38%',
                maxWidth: '240px',
                zIndex: 10,
                transform: 'translateY(-50%)'
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <div
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#70d890',
                    boxShadow: '0 0 8px #70d890'
                  }}
                />
                <span
                  className="ff-gro fw-600"
                  style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#70d890', textTransform: 'uppercase' }}
                >
                  {project.hero.annotationRight.tag}
                </span>
              </div>
              <h3 className="ff-gro fw-500 txt-ff mb-2" style={{ fontSize: '19px', lineHeight: 1.3 }}>
                {project.hero.annotationRight.title}
              </h3>
              <p className="txt-f5 mb-0" style={{ fontSize: '13px', lineHeight: 1.6, opacity: 0.55 }}>
                {project.hero.annotationRight.desc}
              </p>
            </div>
          )}

        </div>

        {/* Section 2: Introduction Section (Matching preview-3.png) */}
        {project.intro && (
          <div
            className="row py-5 my-5 showcase-intro-section"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '8vh',
              paddingBottom: '8vh'
            }}
          >
            {/* Section Kicker */}
            <div className="col-12 mb-4">
              <span
                className="ff-gro"
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  opacity: 0.6,
                  letterSpacing: '-0.01em'
                }}
              >
                {project.intro.tag || 'Introduction'}
              </span>
            </div>

            {/* Huge Typography Paragraph */}
            <div className="col-12 col-xl-11">
              <p
                className="ff-gro fw-400 txt-ff m-0"
                style={{
                  fontSize: 'clamp(2.1rem, 4.4vw, 4.4rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.035em'
                }}
              >
                {project.intro.statement}
              </p>
            </div>

            {/* Action Links & Buttons */}
            {project.intro.links && project.intro.links.length > 0 && (
              <div className="col-12 mt-5 pt-3 d-flex flex-wrap gap-3 align-items-center">
                {project.intro.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <button
                      className={link.primary ? "bg-22 txt-ff ff-gro fw-500 rounded-pill d-flex align-items-center gap-2" : "bg-trans txt-ff ff-gro fw-400 rounded-pill d-flex align-items-center gap-2"}
                      style={{
                        padding: '12px 28px',
                        fontSize: '15px',
                        border: link.primary ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.22)',
                        backdropFilter: 'blur(10px)',
                        transition: 'border-color 0.2s, background-color 0.2s'
                      }}
                    >
                      <span>{link.label}</span>
                      <span style={{ opacity: link.primary ? 0.7 : 0.5 }}>↗</span>
                    </button>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Section: Stats & Impact (Conditional) */}
        {project.stats && project.stats.length > 0 && (
          <div
            className="row py-5 my-5"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '8vh',
              paddingBottom: '8vh'
            }}
          >
            {/* Section Kicker */}
            <div className="col-12 mb-4">
              <span
                className="ff-gro"
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  opacity: 0.6,
                  letterSpacing: '-0.01em'
                }}
              >
                Impact & Ecosystem Growth
              </span>
            </div>

            {/* Metrics Cards */}
            {project.stats.map((stat, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div
                  className="p-4 p-lg-5 h-100"
                  style={{
                    backgroundColor: '#0c0c0f',
                    borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 15px 35px -10px rgba(0,0,0,0.7)'
                  }}
                >
                  <h2
                    className="ff-gro fw-400 m-0"
                    style={{
                      fontSize: 'clamp(3.4rem, 5vw, 5.2rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.04em',
                      color: '#ffd800'
                    }}
                  >
                    {stat.number}
                  </h2>
                  <h4 className="ff-gro fw-500 txt-ff mt-3 mb-2" style={{ fontSize: '19px' }}>
                    {stat.label}
                  </h4>
                  <p className="txt-f5 mb-0" style={{ fontSize: '14px', lineHeight: 1.6, opacity: 0.55 }}>
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Section: Horizontal App Interface Gallery (Conditional) */}
        {project.appScreens && project.appScreens.length > 0 && (
          <div
            className="row py-5 my-5 showcase-carousel-section"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '8vh',
              paddingBottom: '10vh'
            }}
          >
            {/* Header Row: Title & Navigation Controls */}
            <div className="col-12 d-flex justify-content-between align-items-end mb-4 flex-wrap gap-3">
              <div>
                <span
                  className="ff-gro d-block mb-2"
                  style={{
                    fontSize: '18px',
                    color: '#fff',
                    opacity: 0.6,
                    letterSpacing: '-0.01em'
                  }}
                >
                  Core Interfaces & UX
                </span>
                <h2 className="ff-gro fw-400 txt-ff m-0" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
                  Thoughtful Architecture
                </h2>
              </div>

              {/* Carousel Navigation Buttons */}
              <div className="d-flex gap-2 align-items-center">
                <button
                  onClick={() => scrollGallery('left')}
                  className="bg-trans txt-ff rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '46px',
                    height: '46px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  aria-label="Scroll left"
                >
                  ←
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  className="bg-trans txt-ff rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '46px',
                    height: '46px',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontSize: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  aria-label="Scroll right"
                >
                  →
                </button>
              </div>
            </div>

            {/* Horizontal Gallery Scroll View */}
            <div className="col-12 px-0 mt-3">
              <div
                ref={galleryRef}
                className="no-scrollbar d-flex gap-4"
                style={{
                  overflowX: 'auto',
                  paddingBottom: '24px',
                  paddingTop: '8px',
                  scrollSnapType: 'x mandatory',
                  WebkitOverflowScrolling: 'touch',
                  cursor: 'grab'
                }}
              >
                {project.appScreens.map((screen, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: isLandscapeScreens ? 'clamp(320px, 46vw, 620px)' : '310px',
                      flexShrink: 0,
                      scrollSnapAlign: 'start',
                      backgroundColor: '#0c0c0f',
                      borderRadius: isLandscapeScreens ? '24px' : '32px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      padding: '16px',
                      boxShadow: '0 20px 45px -15px rgba(0,0,0,0.85)',
                      transition: 'transform 0.3s ease, border-color 0.3s ease'
                    }}
                  >
                    {/* Screenshot Image Frame */}
                    <div
                      style={{
                        borderRadius: isLandscapeScreens ? '16px' : '20px',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        border: '1px solid rgba(255,255,255,0.06)',
                        aspectRatio: isLandscapeScreens ? '16 / 9' : 'auto'
                      }}
                    >
                      <img
                        src={screen.image}
                        alt={screen.title}
                        style={{
                          width: '100%',
                          height: isLandscapeScreens ? '100%' : 'auto',
                          objectFit: isLandscapeScreens ? 'cover' : 'contain',
                          display: 'block'
                        }}
                      />
                    </div>

                    {/* Caption & Metadata */}
                    <div className="pt-3 px-2">
                      <span
                        className="ff-gro fw-600 d-block"
                        style={{
                          fontSize: '11px',
                          letterSpacing: '0.12em',
                          color: 'rgba(255,255,255,0.45)',
                          textTransform: 'uppercase'
                        }}
                      >
                        {screen.category}
                      </span>
                      <h4 className="ff-gro fw-500 txt-ff mb-2 mt-1" style={{ fontSize: '18px', lineHeight: 1.3 }}>
                        {screen.title}
                      </h4>
                      <p className="txt-f5 mb-0" style={{ fontSize: '13px', lineHeight: 1.5, opacity: 0.55 }}>
                        {screen.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Section: Visual Identity & Community Gallery (Conditional) */}
        {project.gallery && (
          <div
            className="row py-5 my-5 showcase-gallery-section"
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '8vh',
              paddingBottom: '14vh'
            }}
          >
            {/* Section Kicker */}
            <div className="col-12 mb-5">
              <span
                className="ff-gro"
                style={{
                  fontSize: '18px',
                  color: '#fff',
                  opacity: 0.6,
                  letterSpacing: '-0.01em'
                }}
              >
                {project.gallery.kicker || 'Visual Identity & Community'}
              </span>
            </div>

            {/* Top Row: 2-Column Split */}
            {project.gallery.billboard && (
              <div className={`${project.gallery.brandArtwork ? 'col-lg-7' : 'col-lg-6'} mb-5`}>
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: '#0a0a0c',
                    height: '460px'
                  }}
                >
                  <img
                    src={project.gallery.billboard.image}
                    alt={project.gallery.billboard.alt || project.gallery.billboard.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                  <p className="ff-gro fw-500 txt-ff fs-16 mb-0">{project.gallery.billboard.title}</p>
                  <p className="txt-f5 fs-13 mb-0" style={{ opacity: 0.5 }}>{project.gallery.billboard.category}</p>
                </div>
              </div>
            )}

            {project.gallery.community && (
              <div className={`${project.gallery.brandArtwork ? 'col-lg-5' : 'col-lg-6'} mb-5`}>
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: '#0a0a0c',
                    height: '460px'
                  }}
                >
                  <img
                    src={project.gallery.community.image}
                    alt={project.gallery.community.alt || project.gallery.community.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                  <p className="ff-gro fw-500 txt-ff fs-16 mb-0">{project.gallery.community.title}</p>
                  <p className="txt-f5 fs-13 mb-0" style={{ opacity: 0.5 }}>{project.gallery.community.category}</p>
                </div>
              </div>
            )}

            {/* Bottom Row: Core Brand Identity Artwork Frame */}
            {project.gallery.brandArtwork && (
              <div className="col-12 mt-3 mb-4">
                <div
                  className="position-relative d-flex justify-content-center align-items-center overflow-hidden"
                  style={{
                    borderRadius: '28px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'radial-gradient(ellipse at center, rgba(120, 80, 190, 0.12) 0%, rgba(10, 10, 14, 0.95) 75%)',
                    padding: '4vw 2vw',
                    minHeight: '520px'
                  }}
                >
                  <img
                    src={project.gallery.brandArtwork.image}
                    alt={project.gallery.brandArtwork.alt || project.gallery.brandArtwork.title}
                    style={{
                      maxHeight: '580px',
                      width: 'auto',
                      maxWidth: '100%',
                      objectFit: 'contain',
                      borderRadius: '16px',
                      boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8)'
                    }}
                  />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3 px-1">
                  <p className="ff-gro fw-500 txt-ff fs-16 mb-0">{project.gallery.brandArtwork.title}</p>
                  <p className="txt-f5 fs-13 mb-0" style={{ opacity: 0.5 }}>{project.gallery.brandArtwork.category}</p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* Next Project Section (Single-Tap Transition with Wrap-Around) */}
      {nextProject && (
        <section
          data-transition-path={`/works/${nextProject.slug}`}
          onClick={() => {
            navigate(`/works/${nextProject.slug}`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="position-relative overflow-hidden"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'linear-gradient(180deg, #050507 0%, #0d0d12 100%)',
            padding: '90px 5vw',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'linear-gradient(180deg, #08080c 0%, #14141e 100%)';
            const arrow = e.currentTarget.querySelector('.next-project-arrow');
            if (arrow) arrow.style.transform = 'translateX(8px)';
            const img = e.currentTarget.querySelector('.next-project-img');
            if (img) img.style.transform = 'scale(1.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'linear-gradient(180deg, #050507 0%, #0d0d12 100%)';
            const arrow = e.currentTarget.querySelector('.next-project-arrow');
            if (arrow) arrow.style.transform = 'translateX(0)';
            const img = e.currentTarget.querySelector('.next-project-img');
            if (img) img.style.transform = 'scale(1)';
          }}
        >
          {/* Ambient Glow */}
          <div
            className="position-absolute"
            style={{
              top: '50%',
              right: '8%',
              transform: 'translateY(-50%)',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: nextProject.hero?.glowColor || 'rgba(255, 216, 0, 0.12)',
              filter: 'blur(100px)',
              pointerEvents: 'none',
              opacity: 0.55
            }}
          />

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center g-5">
              {/* Left Column: Project Info */}
              <div className="col-12 col-lg-7">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <span
                    className="txt-ffd ff-gro fw-600 text-uppercase"
                    style={{ fontSize: '13px', letterSpacing: '0.12em' }}
                  >
                    {isLastProject ? 'Cycle Complete · Back to Start' : 'Next Case Study'}
                  </span>
                  <span
                    className="px-3 py-1 rounded-pill"
                    style={{
                      fontSize: '11px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'rgba(255, 255, 255, 0.75)'
                    }}
                  >
                    {nextProject.meta?.projectType || 'Featured Platform'}
                  </span>
                </div>

                <h2
                  className="txt-ff fw-700 ff-gro mb-3 d-flex align-items-center gap-3"
                  style={{
                    fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.03em'
                  }}
                >
                  <span>{nextProject.title}</span>
                  <span
                    className="next-project-arrow txt-ffd"
                    style={{
                      display: 'inline-block',
                      transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                  >
                    →
                  </span>
                </h2>

                <p
                  className="txt-f5 opacity-75 fs-19 mb-4"
                  style={{ maxWidth: '560px', lineHeight: 1.6 }}
                >
                  {nextProject.meta?.ecosystemComplexity || (nextProject.intro?.statement?.slice(0, 160) + '...')}
                </p>

                <div className="d-inline-flex align-items-center gap-2 txt-ffd ff-gro fw-600 fs-16">
                  <span>View Project Showcase</span>
                  <span>↗</span>
                </div>
              </div>

              {/* Right Column: Visual Preview Thumbnail */}
              <div className="col-12 col-lg-5">
                <div
                  className="rounded-4 overflow-hidden position-relative"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
                    aspectRatio: '16 / 10',
                    background: '#111'
                  }}
                >
                  {nextProjectPreviewImage && (
                    <img
                      src={nextProjectPreviewImage}
                      alt={nextProject.title}
                      className="next-project-img"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)'
                      }}
                    />
                  )}
                  <div
                    className="position-absolute w-100 h-100"
                    style={{
                      top: 0,
                      left: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(5, 5, 7, 0.85) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                  <div
                    className="position-absolute d-flex justify-content-between align-items-end w-100 px-4 pb-3"
                    style={{ bottom: 0, left: 0, zIndex: 3 }}
                  >
                    <div>
                      <p className="txt-ffd fs-11 fw-700 text-uppercase mb-0" style={{ letterSpacing: '0.08em' }}>Next Up</p>
                      <p className="txt-ff fw-600 ff-gro fs-19 mb-0">{nextProject.title}</p>
                    </div>
                    <span className="txt-ff opacity-50 fs-13 ff-gro">Tap to transition ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <Footer transparentBg={true} />
      </div>
    </div>
  );
}
