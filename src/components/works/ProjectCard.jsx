import React from 'react';
import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="rounded-4 p-4 p-md-5 h-100 shadow-lg d-flex flex-column"
      style={{ background: '#111', border: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="d-flex justify-content-between align-items-start mb-4">
        {project.logo ? (
          <img src={project.logo} alt={project.companyName} style={{ height: '60px', objectFit: 'contain', maxWidth: '180px' }} />
        ) : (
          <h3 className="txt-ff fw-700 ff-gro m-0">{project.companyName}</h3>
        )}
        <div className="text-tiny fw-bold text-uppercase px-3 py-1 rounded-pill" style={{ background: 'rgba(255, 216, 0, 0.1)', color: '#FFD800', border: '1px solid rgba(255, 216, 0, 0.2)' }}>
          {project.type}
        </div>
      </div>

      {project.logo && <h3 className="txt-ff fw-700 ff-gro mb-3">{project.companyName}</h3>}

      <div className="d-flex flex-wrap gap-2 mb-4">
        {project.tags?.map((tag, i) => (
          <span key={i} className="text-uppercase fw-500 rounded-pill px-3 py-1" style={{ fontSize: '10px', background: '#222', color: '#999', letterSpacing: '0.5px' }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        {project.ecosystem && project.ecosystem.length > 0 && (
          <div className="mb-4">
            <h6 className="txt-f5 text-uppercase text-tiny mb-3 opacity-50 fw-bold" style={{ letterSpacing: '1px' }}>Ecosystem</h6>
            <div className="d-flex flex-column gap-2">
              {project.ecosystem.map((eco, i) => (
                <a key={i} href={eco.url} target="_blank" rel="noreferrer" className="text-decoration-none txt-ff fs-16 d-flex align-items-center gap-2" style={{ transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = '#FFD800'} onMouseOut={(e) => e.target.style.color = '#fff'}>
                  <FaExternalLinkAlt size={12} className="opacity-50" /> {eco.title}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="d-flex flex-wrap gap-3 pt-4" style={{ borderTop: '1px solid #222' }}>
          {project.siteUrl && (
            <a href={project.siteUrl} target="_blank" rel="noreferrer" className="text-decoration-none txt-00 fw-600 px-4 py-2 rounded-3 d-flex align-items-center gap-2" style={{ background: '#FFD800', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <FaExternalLinkAlt size={14} /> Visit Site
            </a>
          )}
          {project.appUrls?.map((app, i) => {
            if (!app.url) return null;
            return (
              <a key={i} href={app.url} target="_blank" rel="noreferrer" className="text-decoration-none txt-ff px-4 py-2 rounded-3 d-flex align-items-center gap-2 fw-600" style={{ background: '#333', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = '#444'} onMouseOut={(e) => e.currentTarget.style.background = '#333'}>
                {app.for === 'IOS' ? <FaApple size={18} /> : <FaGooglePlay size={16} />}
                {app.for}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
