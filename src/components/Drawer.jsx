import React from 'react';
import './Drawer.css';

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Drawer;
