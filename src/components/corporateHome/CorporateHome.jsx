import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import works from "../../contants/works";
import AnimatedLogo from "../customSvg/AnimatedLogo";
import SEO from "../common/SEO";
import "./CorporateHome.css";

function CorporateHome() {
  const navigate = useNavigate();

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
      "name": "Digital Solutions & Architecture",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Mobile Platform Architecture"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Software Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Digital Ecosystems"
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

      {/* Footer */}
      <div className="position-relative" style={{ zIndex: 1 }}>
        <Footer transparentBg={true} />
      </div>
    </div>
  );
}

export default CorporateHome;
