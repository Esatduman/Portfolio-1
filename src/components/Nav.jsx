import { Link } from 'react-router-dom';
import './Header.css';
function Nav() {

  return (
    <header className="proj-header">
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/projects">Projects</Link></li>
        <li><a href="/EsatDuman_Resume2024.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="#about">About Me</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    
    </header>
  );
}

export default Nav;