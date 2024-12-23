import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Projects from './components/Projects';

function Layout() {
  const location = useLocation();

  return (
    <div className="layout-wrapper">
      {/* Render Header only if the current path is not '/projects' */}
      {location.pathname !== '/projects' && <Header />}
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
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
