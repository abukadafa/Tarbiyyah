import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Tarbiyyah Support Foundation</p>
            <h1>Prosperity for All.</h1>
            <p className="lede">Empowering underserved children and uplifting dedicated teachers through quality education and moral guidance across rural Nigeria.</p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/impact" className="btn btn-ghost">See Our Impact →</Link>
            </div>
            <div className="hero-trust">
              <span>Registered non-profit</span><span className="dot">·</span><span>Operating in rural Northern Nigeria</span>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="arch-frame">
              <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80" alt="A child writing at a wooden desk in a rural classroom" loading="eager" />
            </div>
            <div className="hero-badge">
              <b>14</b>
              <span>years serving rural communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY BANNER */}
      <div className="urgency-banner">
        <div className="wrap">
          <span>📍</span>
          <span>Over <strong>10 million</strong> children remain out of school across Nigeria — most in rural communities still waiting for a classroom.</span>
          <Link to="/donate" style={{ textDecoration: 'underline', fontWeight: 800 }}>Help build one →</Link>
        </div>
      </div>

      {/* ARCH DIVIDER */}
      <div className="arch-divider" style={{ background: 'var(--canvas)' }}>
        <svg viewBox="0 0 1180 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 36 C 40 4, 80 4, 120 36 C 160 4, 200 4, 240 36 C 280 4, 320 4, 360 36 C 400 4, 440 4, 480 36 C 520 4, 560 4, 600 36 C 640 4, 680 4, 720 36 C 760 4, 800 4, 840 36 C 880 4, 920 4, 960 36 C 1000 4, 1040 4, 1080 36 C 1100 18, 1140 18, 1180 36" stroke="#DCD3BC" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="wrap">
          <div className="center" data-reveal style={{ maxWidth: '640px', margin: '0 auto 56px' }}>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>What We Do</p>
            <h2>Three commitments, one purpose.</h2>
            <p className="lede mx-auto" style={{ textAlign: 'center' }}>Education in rural Nigeria fails for structural reasons — no building, no balance, no support for the people doing the teaching. We work on all three at once.</p>
          </div>
          <div className="grid-3" data-reveal="stagger">
            <div className="pillar-card">
              <span className="pillar-num">01</span>
              <svg className="pillar-icon" viewBox="0 0 46 46" fill="none">
                <rect x="6" y="18" width="34" height="22" rx="1" stroke="#13402E" strokeWidth="2"/>
                <path d="M23 6L40 18H6L23 6Z" stroke="#C8932B" strokeWidth="2"/>
                <path d="M18 40V28H28V40" stroke="#13402E" strokeWidth="2"/>
              </svg>
              <h3>Educational Infrastructure</h3>
              <p>We fund and build safe, weatherproof classrooms in communities where lessons currently happen under trees or in collapsing structures.</p>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">02</span>
              <svg className="pillar-icon" viewBox="0 0 46 46" fill="none">
                <path d="M23 12C18 8 10 8 6 11V34C10 31 18 31 23 35C28 31 36 31 40 34V11C36 8 28 8 23 12Z" stroke="#13402E" strokeWidth="2"/>
                <path d="M23 12V35" stroke="#C8932B" strokeWidth="2"/>
              </svg>
              <h3>Holistic Learning</h3>
              <p>Formal academics taught alongside Tarbiyyah — moral and Islamic upbringing — so children grow in knowledge and in character together.</p>
            </div>
            <div className="pillar-card">
              <span className="pillar-num">03</span>
              <svg className="pillar-icon" viewBox="0 0 46 46" fill="none">
                <circle cx="23" cy="15" r="7" stroke="#13402E" strokeWidth="2"/>
                <path d="M9 40C9 31 15 27 23 27C31 27 37 31 37 40" stroke="#13402E" strokeWidth="2"/>
                <path d="M23 27V40" stroke="#C8932B" strokeWidth="2" strokeDasharray="2 3"/>
              </svg>
              <h3>Teacher &amp; Student Welfare</h3>
              <p>Scholarships, stipends, and material support for the rural teachers and students who carry this work forward every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCH DIVIDER reversed */}
      <div className="arch-divider" style={{ background: 'var(--canvas-deep)' }}>
        <svg viewBox="0 0 1180 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C 40 32, 80 32, 120 0 C 160 32, 200 32, 240 0 C 280 32, 320 32, 360 0 C 400 32, 440 32, 480 0 C 520 32, 560 32, 600 0 C 640 32, 680 32, 720 0 C 760 32, 800 32, 840 0 C 880 32, 920 32, 960 0 C 1000 32, 1040 32, 1080 0 C 1100 18, 1140 18, 1180 0" stroke="#C8B385" strokeWidth="1.5" fill="none"/>
        </svg>
      </div>

      {/* STORY / MISSION TEASER */}
      <section className="section bg-deep">
        <div className="wrap grid-2">
          <div className="arch-frame wide" data-reveal>
            <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80" alt="A teacher guiding students in a rural Nigerian classroom" loading="lazy" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Why We Exist</p>
            <h2>A teacher's dedication shouldn't outpace what they're given to work with.</h2>
            <p className="lede" style={{ maxWidth: 'none' }}>Across rural Northern Nigeria, teachers walk hours to classrooms with no roof, no books, and stipends that arrive months late — and they show up anyway. Tarbiyyah Support Foundation exists to meet that commitment with real resources: buildings, materials, and fair support, so that showing up is enough.</p>
            <Link to="/about" className="btn btn-dark" style={{ marginTop: '8px' }}>Read our story →</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section bg-green">
        <div className="wrap">
          <div className="stat-row" data-reveal="stagger">
            <div className="stat"><b data-count="32">0</b><span>Classrooms built &amp; renovated</span></div>
            <div className="stat"><b data-count="58">0</b><span>Teachers supported with stipends</span></div>
            <div className="stat"><b data-count="2400" data-suffix="+">0</b><span>Children reached</span></div>
            <div className="stat"><b data-count="9">0</b><span>Rural communities served</span></div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section-tight">
        <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }} data-reveal>
          <div style={{ maxWidth: '520px' }}>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.1rem)' }}>Your gift reaches a classroom, a teacher, or a child within weeks — not years.</h2>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link to="/donate" className="btn btn-primary">Donate Now</Link>
            <Link to="/impact" className="btn btn-dark">View Our Objectives</Link>
          </div>
        </div>
      </section>
    </>
  );
}
