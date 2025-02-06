import React from 'react';
import './Hamburger.css';

const Hamburger = ({ onClick }) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  );
};

export default Hamburger;
