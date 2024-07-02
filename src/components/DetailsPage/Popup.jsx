import React from 'react';
import './Popup.css'; 
import ProfilePage from './ProfilePage';

const Popup = ({ isOpen, onClose, data }) => {

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <ProfilePage data={data}/>
          </div>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      )}
    </>
  );
};

export default Popup;
