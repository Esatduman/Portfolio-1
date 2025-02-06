import './Header.css';
import EsatD from '../assets/EsatD.png';
import dot from '../assets/image 7.png';
import dot2 from '../assets/image 7.png';
import EsatL from '../assets/EsatD_Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import the Link component
import Nav from './Nav';
import React, { useState } from 'react';
import Hamburger from './Hamburger'; // Import the hamburger component

function Header() {

    // State to control drawer (hamburger) open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

    return (
        <header className="header">
            <Nav />
            <div className="header-content">
                <div className="logo-container">
                    <img className="Logo" src={EsatL} alt="Logo" />
                </div>

                <div className="intro-container">
                    <h1 className="intro">
                        <span className="hello">HELLO MY NAME IS</span>
                        <br />
                        <span className="name">ESAT DUMAN</span>
                    </h1>
                    <div className="button-wrapper">
                    <Link to="/projects" className="myproj-btn">
                            My Projects
                    </Link>
                    <a href="https://www.linkedin.com/in/esat-duman" target="_blank" rel="noopener noreferrer">
                     <FontAwesomeIcon icon={faLinkedin} className="icon-linkedin" />
                    </a>
                    <a href="https://github.com/Esatduman" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon-Github" />
                    </a>

                    </div>
                </div>

                <div className="header-images">
                    <img className="cpu2" src={dot2} alt="dot2" />
                    <img className="EsatD" src={EsatD} alt="EsatsPic" />
                    <img className="cpu" src={dot} alt="dot" />
                </div>
                {/* Hamburger Menu Button */}
        <div className="hamburger-container">
          <Hamburger onClick={toggleDrawer} /> {/* Toggle drawer on click */}
        </div>

      </div>

      {/* Add the Drawer (Sidebar) */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleDrawer}>X</button>
        {/* You can add links or other elements here for the drawer */}
        <Link to="/" onClick={toggleDrawer}>Home</Link>
        <Link to="/projects" onClick={toggleDrawer}>Projects</Link>
        <Link to="/contact" onClick={toggleDrawer}>Contact</Link>
            </div>
        <div className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>
        </header>
    );
}

export default Header;
