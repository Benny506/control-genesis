import React from 'react';
import { motion } from 'framer-motion';

function Trust() {
  const clients = ['MUM', 'Awambe', 'Lavendercare', 'FlexXxa', 'Amaeti', 'Control Genesis'];

  return (
    <div className="container py-5 my-5 text-center">
      <h2 className="txt-ff fw-700 ff-gro mb-5">Companies that <span className="txt-ffd">Trust Us</span>.</h2>
      
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, color: '#FFD800' }}
            className="p-4 rounded-3 d-flex align-items-center justify-content-center"
            style={{ 
              background: '#0a0a0a', 
              border: '1px solid #222', 
              color: '#888',
              minWidth: '200px',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            <span className="fw-600 ff-gro fs-4">{client}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Trust;
