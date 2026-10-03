import React from 'react';
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import works from '../../contants/works';
import SEO from "../common/SEO";

function Works() {
  const worksSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Selected Works & Platforms | Control Genesis",
    "description": "Explore digital platforms, healthcare ecosystems, fintech apps, and enterprise applications engineered by Control Genesis.",
    "url": "https://controlgenesis.com/#/works",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": works.map((w, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": w.companyName,
        "description": `${w.companyName} (${w.type}): ${w.tags ? w.tags.join(', ') : 'Digital Platform'}`
      }))
    }
  };

  return (
    <>
      <SEO
        title="Selected Works & Digital Footprint | Control Genesis"
        description="Explore our digital footprint. Ecosystems, platforms, and experiences engineered for dominance across healthcare, e-commerce, campus lifestyle, and creative direction."
        keywords="Control Genesis portfolio, client case studies, LavenderCare, Flexxxa, MyUniMap, Scrap2Style, ForeStance, digital platforms, software engineering"
        canonical="https://controlgenesis.com/#/works"
        schema={worksSchema}
        breadcrumbs={[
          { name: "Home", url: "/#/" },
          { name: "Works", url: "/#/works" }
        ]}
      />

      <div className="bg-02 position-relative" style={{ width: '100%', minHeight: '100vh', overflowX: 'hidden' }}>
        {/* Uniform Moving Background Canvas */}
        <div className="cg-moving-canvas-bg" />

        {/* Global Navigation - sits above all content and footer */}
        <Navigation />

        <div className="position-relative" style={{ zIndex: 1 }}>
          <div className="container pt-5 mt-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center my-5 py-5"
            >
              <h1 className="txt-ff fw-700 ff-gro" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Our Digital <span className="txt-ffd">Footprint</span>.</h1>
              <p className="txt-f5 fs-19 mt-3">Ecosystems, platforms, and experiences engineered for dominance.</p>
            </motion.div>

            <div className="row g-4 mb-5 pb-5">
              {works.map((project, i) => (
                <div key={i} className="col-12 col-lg-6">
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>
          <Footer transparentBg={true} />
        </div>
      </div>
    </>
  );
}

export default Works;
