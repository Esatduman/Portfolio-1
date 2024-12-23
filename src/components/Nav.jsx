import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Nav() {
  return (
    <header className="proj-header">
    <nav className="navbar">
      <ul>
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="/EsatDuman_Resume2024.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    </header>
  );
}

export default Nav;