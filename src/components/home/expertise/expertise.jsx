import React from 'react';
import { motion } from 'framer-motion';

function Expertise() {
  const services = [
    { title: "Ideation & Branding", desc: "Crafting a digital identity that commands attention from day one." },
    { title: "UI/UX Architecture", desc: "Designing intuitive, conversion-optimized interfaces that feel like magic." },
    { title: "Full-Stack Production", desc: "Building scalable frontend clients and robust backend ecosystems." }
  ];

  return (
    <div className="container py-5 my-5">
      <div className="row">
        {/* Sticky Left Column */}
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <div className="position-sticky" style={{ top: '150px' }}>
            <h2 className="txt-ff fw-700 ff-gro" style={{ fontSize: '3rem' }}>Your <span className="txt-ffd">Genesis</span>.</h2>
            <p className="txt-f5 fs-19 mt-3" style={{ maxWidth: '400px' }}>
              Whether you're an ambitious underdog scaling from zero, or an enterprise heavyweight demanding a massive structural overhaul—we engineer solutions tailored to your weight class.
            </p>
          </div>
        </div>
        
        {/* Scroll Right Column */}
        <div className="col-12 col-md-7 d-flex flex-column gap-5">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-5 rounded-4 shadow-lg"
              style={{ background: '#111', border: '1px solid rgba(255, 255, 255, 0.05)' }}
            >
              <h3 className="txt-ffd fw-600 ff-gro mb-3">{service.title}</h3>
              <p className="txt-f5 fs-19 m-0">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
