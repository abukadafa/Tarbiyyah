import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('nav-open');
    };
  }, []);

  return (
    <>
      <div className="header-top-bar">
        <div className="wrap top-bar-wrap">
          <div className="top-bar-left">
            <span>Operating in rural Northern Nigeria</span>
            <span className="dot">·</span>
            <span>Registered NGO: RC 9624530</span>
          </div>
          <div className="top-bar-right">
            <Link to="/about#faq">FAQs</Link>
            <span className="dot">·</span>
            <Link to="/about#contact">Contact Support</Link>
          </div>
        </div>
      </div>

      <header className="site-header">
      <nav className="nav">
        <Link to="/" className="brand" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', padding: '4px 0' }}>
          <img src="/logo.png" alt="Tarbiyyah Support Foundation" style={{ height: '44px', width: 'auto', display: 'block' }} />
        </Link>
        <ul className="nav-links">
          <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
          <li><NavLink to="/impact" onClick={closeMenu}>Impact &amp; Goals</NavLink></li>
          <li><NavLink to="/donate" onClick={closeMenu}>Donate</NavLink></li>
        </ul>
        <div className="nav-cta">
          <Link to="/donate" className="btn btn-dark" onClick={closeMenu}>Donate Now</Link>
          <button 
            className="nav-toggle" 
            aria-label="Toggle menu" 
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
    </>
  );
}
