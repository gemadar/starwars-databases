// Popup.jsx

import React from 'react';
import './Popup.css'; // Import CSS file for styling

const Popup = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={onClose}>Close</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
