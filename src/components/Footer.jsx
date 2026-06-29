import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input) {
      input.value = '';
    }
    // simple UI feedback instead of inline script
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand" style={{ marginBottom: '20px' }}>
              <img src="/logo.png" alt="Tarbiyyah Support Foundation" style={{ height: '44px', width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="footer-tagline">"Prosperity for All" — education and moral guidance for every child, regardless of where they're born.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/impact">Impact &amp; Goals</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><p>Kam Salem Road, Malali GRA, Kaduna</p></li>
              <li><a href="mailto:contact@tarbiyyah.org">contact@tarbiyyah.org</a></li>
              <li><a href="tel:+2348136934004">0813 693 4004</a></li>
              <li><a href="tel:+2348091581000">0809 158 1000</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p style={{ marginBottom: '14px' }}>Field notes from classrooms we've built — no spam, a few times a year.</p>
            <form style={{ display: 'flex', gap: '8px' }} onSubmit={handleSubmit}>
              <input 
                type="email" 
                required 
                placeholder="Your email" 
                style={{ 
                  flex: 1, 
                  padding: '11px 12px', 
                  borderRadius: '4px', 
                  border: '1px solid rgba(250,246,238,0.25)', 
                  background: 'rgba(250,246,238,0.06)', 
                  color: 'var(--canvas)', 
                  fontFamily: 'var(--font-body)' 
                }} 
              />
              <button className="btn btn-primary" style={{ padding: '11px 16px' }} type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tarbiyyah Support Foundation. All rights reserved.</span>
          <div className="social-row">
            <a href="#" aria-label="Facebook" onClick={(e) => e.preventDefault()}>f</a>
            <a href="#" aria-label="TikTok" onClick={(e) => e.preventDefault()}>tt</a>
            <a href="#" aria-label="Instagram" onClick={(e) => e.preventDefault()}>ig</a>
            <a href="#" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>ln</a>
            <a href="#" aria-label="X" onClick={(e) => e.preventDefault()}>x</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
