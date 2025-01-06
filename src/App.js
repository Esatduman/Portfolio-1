import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Layout() {
  const location = useLocation();
  
  // Updated condition to hide Header for both projects and contact routes
  const hideHeader = ['/projects', '/contact'].includes(location.pathname);

  return (
    <div className="layout-wrapper">
      {/* Render Header only if not on projects or contact pages */}
      {!hideHeader && <Header />}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
