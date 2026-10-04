import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import works from "../../contants/works";
import AnimatedLogo from "../customSvg/AnimatedLogo";
import SEO from "../common/SEO";
import "./CorporateHome.css";

function CorporateHome() {
  const navigate = useNavigate();
  const clientsScrollRef = useRef(null);

  const scrollClients = (direction) => {
    if (clientsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      clientsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const clientHighlights = [
    {
      companyName: 'LavenderCare',
      logo: works.find(w => w.companyName === 'LavenderCare')?.logo,
      type: 'App & Ecosystem',
      sector: 'Healthcare & Motherhood Companion',
      summary: 'Complete maternal health app, hospital management system, laboratory dashboards, and pharmacy management suite.'
    },
    {
      companyName: 'flexXxa',
      logo: works.find(w => w.companyName === 'flexXxa')?.logo,
      type: 'Social Platform (Mobile)',
      sector: 'Event Ticketing & Social Discovery',
      summary: 'High-speed event ticketing, real-time venue discovery, and community connection platform built for iOS and Android.'
    },
    {
      companyName: 'Scrap2Style',
      logo: works.find(w => w.companyName === 'Scrap2Style')?.logo,
      type: 'E-Commerce',
      sector: 'Sustainable Fashion & Wholesale',
      summary: 'Automated wholesale, retail, and pre-order commerce architecture with streamlined inventory and multi-channel fulfillment.'
    },
    {
      companyName: 'LaTej-Creations',
      logo: works.find(w => w.companyName === 'LaTej-Creations')?.logo,
      type: 'E-Commerce',
      sector: 'Bespoke Fashion & Lifestyle',
      summary: 'High-touch lifestyle e-commerce experience with interactive lookbooks, bespoke sizing engine, and global checkout.'
    },
    {
      companyName: 'My-Uni-Map',
      logo: works.find(w => w.companyName === 'My-Uni-Map')?.logo,
      type: 'Navigation',
      sector: 'Campus Navigation & Lifestyle',
      summary: 'Geospatial indoor/outdoor campus navigation and student lifestyle platform serving thousands across higher institutions.'
    },
    {
      companyName: 'ForeStance',
      logo: works.find(w => w.companyName === 'ForeStance')?.logo,
      type: 'Brand Studio',
      sector: 'Brand Direction & Interactive Design',
      summary: 'Strategic brand identity, editorial digital storytelling, and interactive creative direction for ambitious ventures.'
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Control Genesis",
    "url": "https://controlgenesis.com/#/",
    "logo": "https://controlgenesis.com/favicon.svg",
    "image": "https://controlgenesis.com/assets/images/backgroundPattern.webp",
    "slogan": "We build digital solutions",
    "description": "Since our inception, we’ve helped the most innovative startups and enterprise businesses architect, build, and ship platforms worth talking about.",
    "telephone": "+2347010915889",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://wa.me/2347010915889"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Solutions & Business Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer-Facing Mobile & Web Platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Operations & Workflow Automation Systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Grant-Ready Platforms & Institutional Ecosystems"
          }
        }
      ]
    }
  };

  return (
    <div className="bg-02 position-relative" style={{ width: '100%', overflowX: 'hidden' }}>
      <SEO
        title="We Build Digital Solutions | Control Genesis"
        description="We build digital solutions. Since our inception, we’ve helped the most innovative startups and enterprise businesses architect, build, and ship platforms worth talking about."
        keywords="Control Genesis, We build digital solutions, software development, web architecture, enterprise engineering, digital platforms, full-stack systems, Lagos tech agency"
        canonical="https://controlgenesis.com/#/"
        schema={homeSchema}
      />

      {/* Uniform Panning Background spanning entire home page and footer */}
      <div className="cg-moving-canvas-bg" />

      {/* Global Navigation - sits on top of all page sections & footer */}
      <Navigation />

      {/* Hero Viewport */}
      <div className="corporate-home-hero position-relative">
        {/* Main Content Area */}
        <div className="corporate-home-content h-100 position-relative d-flex flex-column" style={{ zIndex: 1, padding: '0 5vw' }}>

          {/* Title Wrapper (Positioned absolute at bottom on desktop, static at top on mobile) */}
          <div className="corporate-home-title-wrapper">
            <h1 className="corporate-home-title txt-ff fw-500 ff-gro m-0">
              We build <br />
              digital solutions
            </h1>
          </div>

          {/* Grid for Pills and Pitch */}
          <div className="corporate-home-grid d-flex flex-column flex-lg-row justify-content-between align-items-start align-items-lg-center flex-grow-1 gap-4">

            {/* Left Side (Desktop) / Below Pitch (Mobile): Works Stack */}
            <div className="corporate-home-works d-flex flex-column gap-2 align-items-start">
              <span className="txt-ffd ff-gro fw-600 text-uppercase d-lg-none mb-1" style={{ fontSize: '11px', letterSpacing: '0.12em' }}>
                Featured Platforms
              </span>
              <div className="corporate-home-pills-container d-flex flex-wrap flex-lg-column gap-2 align-items-start">
                {works.map((work, index) => (
                  <button
                    key={index}
                    data-transition-path={`/works/${work.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '')}`}
                    onClick={() => navigate(`/works/${work.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '')}`)}
                    className="corporate-home-pill bg-trans txt-f5 ff-gro fw-400 rounded-pill text-start"
                    style={{
                      padding: '8px 24px',
                      fontSize: '16px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      transition: 'border-color 0.2s, background-color 0.2s, transform 0.2s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 216, 0, 0.4)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {work.companyName}
                  </button>
                ))}
                <button
                  data-transition-path="/works"
                  onClick={() => navigate('/works')}
                  className="corporate-home-pill bg-22 txt-ff ff-gro fw-500 rounded-pill text-start"
                  style={{
                    padding: '8px 24px',
                    fontSize: '16px',
                    border: '1px solid rgba(255,255,255,0.3)',
                    transition: 'border-color 0.2s, background-color 0.2s, transform 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#ffd800';
                    e.currentTarget.style.backgroundColor = '#2c2c2c';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.backgroundColor = '#222';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  All Work →
                </button>
              </div>
            </div>

            {/* Right Side (Desktop) / Below Title (Mobile): Pitch */}
            <div className="corporate-home-pitch d-flex flex-column gap-4 align-items-start">
              <div className="d-flex gap-3">
                <div style={{ width: '8px', height: '8px', backgroundColor: '#ffd800', borderRadius: '50%', marginTop: '8px', flexShrink: 0, boxShadow: '0 0 10px #ffd800' }}></div>
                <p className="txt-f5 fs-19 fw-400 mb-0" style={{ lineHeight: 1.5 }}>
                  Since our inception, we’ve helped the most innovative startups and enterprise businesses architect, build, and ship platforms worth talking about.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* =========================================================================
          SECTION 2: SELECTED CLIENTS (Horizontal Filmstrip Reel)
          ========================================================================= */}
      <section className="corporate-filmstrip-section">
        <div className="filmstrip-header">
          <div>
            <span className="editorial-kicker">01 / Selected Platforms</span>
            <h2 className="editorial-heading ff-gro fw-600 m-0" style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}>
              Building for real-world impact.
            </h2>
          </div>

          <div className="d-none d-md-flex align-items-center gap-3">
            <span className="txt-f5 fs-14 opacity-50 me-2">Drag or scroll to explore</span>
            <button
              onClick={() => scrollClients('left')}
              className="filmstrip-nav-btn"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scrollClients('right')}
              className="filmstrip-nav-btn"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Filmstrip Track */}
        <div
          ref={clientsScrollRef}
          className="filmstrip-track"
        >
          {clientHighlights.map((client, index) => {
            const slug = client.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '');
            return (
              <div
                key={index}
                data-transition-path={`/works/${slug}`}
                onClick={() => navigate(`/works/${slug}`)}
                className="filmstrip-panel"
              >
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <span
                      className="text-uppercase fw-600"
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        color: '#ffd800'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')} / 06
                    </span>
                    <span className="filmstrip-type-badge">
                      {client.type}
                    </span>
                  </div>

                  {client.logo && (
                    <div className="filmstrip-logo-wrapper mb-3">
                      <img
                        src={client.logo}
                        alt={`${client.companyName} logo`}
                        className="filmstrip-logo-img"
                      />
                    </div>
                  )}

                  <h3 className="txt-ff ff-gro fw-600 fs-28 mb-2">{client.companyName}</h3>
                  <div className="fs-14 fw-500 mb-3" style={{ letterSpacing: '0.02em', color: 'rgba(255, 255, 255, 0.8)' }}>
                    {client.sector}
                  </div>
                  <p className="fs-15 m-0" style={{ lineHeight: 1.65, color: 'rgba(245, 245, 245, 0.85)' }}>
                    {client.summary}
                  </p>
                </div>

                <div className="d-flex justify-content-between align-items-center pt-4 mt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="txt-ff ff-gro fw-500 fs-14">View Showcase</span>
                  <span className="filmstrip-arrow">↗</span>
                </div>
              </div>
            );
          })}

          {/* End Panel linking to Works */}
          <div
            data-transition-path="/works"
            onClick={() => navigate('/works')}
            className="filmstrip-panel d-flex flex-column justify-content-between"
            style={{
              background: 'rgba(255, 216, 0, 0.03)',
              borderColor: 'rgba(255, 216, 0, 0.25)'
            }}
          >
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span
                  className="text-uppercase fw-600"
                  style={{ fontSize: '11px', letterSpacing: '0.14em', color: '#ffd800' }}
                >
                  ALL WORKS
                </span>
                <span
                  className="filmstrip-type-badge"
                  style={{
                    color: '#ffd800',
                    borderColor: 'rgba(255, 216, 0, 0.3)',
                    background: 'rgba(255, 216, 0, 0.08)'
                  }}
                >
                  PORTFOLIO
                </span>
              </div>

              <div className="filmstrip-logo-wrapper mb-3">
                <div className="filmstrip-endpanel-icon">
                  →
                </div>
              </div>

              <h3 className="txt-ff ff-gro fw-600 fs-28 mb-2">Complete Footprint</h3>
              <div className="txt-f5 fs-13 fw-500 mb-3 opacity-60" style={{ letterSpacing: '0.04em' }}>
                Full Systems & Ecosystems
              </div>
              <p className="txt-f5 fs-15 m-0" style={{ lineHeight: 1.6, opacity: 0.8 }}>
                Explore our full engineering portfolio across health systems, campus mobility, social ticketing, and custom commerce platforms.
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center pt-4 mt-4" style={{ borderTop: '1px solid rgba(255, 216, 0, 0.15)' }}>
              <span className="txt-ffd ff-gro fw-600 fs-14">Explore All Projects</span>
              <span className="filmstrip-arrow" style={{ color: '#ffd800' }}>→</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <Footer transparentBg={true} />
      </div>
    </div>
  );
}

export default CorporateHome;
