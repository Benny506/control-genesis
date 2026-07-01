import React from 'react';
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import works from '../../contants/works';

function Works() {
  return (
    <>
      <div className="bg-02 min-vh-100">
        <Navigation />
        
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
      </div>
      <div className="bg-02"><Footer /></div>
    </>
  );
}

export default Works;
