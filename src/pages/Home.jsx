import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const heroSlides = [
  {
    id: 'hero_slide_1',
    type: 'video',
    src: 'https://assets.mixkit.co/videos/preview/mixkit-kids-in-a-classroom-smiling-at-the-camera-34289-large.mp4',
    title: 'Prosperity for All.',
    subtitle: 'Tarbiyyah Support Foundation',
    description: 'Empowering underserved children and uplifting dedicated teachers through quality education and moral guidance across rural Nigeria.'
  },
  {
    id: 'hero_slide_2',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    title: 'Uplifting Dedicated Teachers.',
    subtitle: 'Welfare Stipends & Resources',
    description: 'We provide monthly support stipends and instructional materials to rural educators so they can focus entirely on teaching.'
  },
  {
    id: 'hero_slide_3',
    type: 'image',
    src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1600&q=80',
    title: 'Building Safe Classrooms.',
    subtitle: 'Educational Infrastructure Outreach',
    description: 'Renovating roofless school blocks and creating safe, weather-proof learning environments in remote communities.'
  }
];

const heroVisualImages = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHero = () => {
    setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const activeHero = heroSlides[heroIndex];

  return (
    <>
      {/* HERO SLIDESHOW */}
      <section className="hero video-hero">
        {/* Active Slide Background */}
        <div className="hero-video-bg">
          {activeHero.type === 'video' ? (
            <video key={activeHero.src} autoPlay muted loop playsInline>
              <source src={activeHero.src} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={activeHero.src} 
              alt={activeHero.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          )}
          <div className="hero-video-overlay"></div>
        </div>

        {/* Navigation Arrows */}
        <button className="hero-nav-arrow arrow-left" onClick={prevHero} aria-label="Previous slide" type="button">
          ←
        </button>
        <button className="hero-nav-arrow arrow-right" onClick={nextHero} aria-label="Next slide" type="button">
          →
        </button>

        {/* Navigation Dots */}
        <div className="hero-dots-container">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx}
              className={`hero-dot ${heroIndex === idx ? 'is-active' : ''}`}
              onClick={() => setHeroIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              type="button"
            ></button>
          ))}
        </div>

        <div className="wrap hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>{activeHero.subtitle}</p>
            <h1 style={{ color: 'var(--canvas)' }}>{activeHero.title}</h1>
            <p className="lede" style={{ color: 'rgba(255, 255, 255, 0.85)' }}>{activeHero.description}</p>
            <div className="hero-actions">
              <Link to="/donate" className="btn btn-primary">Donate Now</Link>
              <Link to="/impact" className="btn btn-outline">See Our Impact →</Link>
            </div>
            <div className="hero-trust" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <span>Registered non-profit</span><span className="dot" style={{ color: 'rgba(255,255,255,0.3)' }}>·</span><span>Operating in rural Northern Nigeria</span>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <div className="arch-frame" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              <img src={heroVisualImages[heroIndex]} alt="Outreach events highlighting pupils and educators" loading="eager" />
            </div>
            <div className="hero-badge" style={{ background: 'var(--canvas)', border: '1px solid var(--line)' }}>
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

      {/* QUICK PORTALS & SERVICES (NOU Style) */}
      <section className="portals-section">
        <div className="wrap">
          <div className="portals-grid" data-reveal="stagger">
            
            <div className="portal-card">
              <div className="portal-icon">🎓</div>
              <h4>Student Sponsorship Portal</h4>
              <p>Explore candidate profiles of students in Kano, Kaduna, and Sokoto who need sponsorship for registration and kits.</p>
              <Link to="/donate" className="portal-link">Access Portal →</Link>
            </div>

            <div className="portal-card">
              <div className="portal-icon">🍎</div>
              <h4>Teacher Support Registry</h4>
              <p>Check teacher stipend disbursements, welfare status reports, and apply for rural educator allowances.</p>
              <Link to="/about" className="portal-link">View Registry →</Link>
            </div>

            <div className="portal-card">
              <div className="portal-icon">🧱</div>
              <h4>Infrastructure Project Board</h4>
              <p>Track ongoing classroom constructions, roof installations, and supply deliveries in real-time.</p>
              <Link to="/impact" className="portal-link">Track Projects →</Link>
            </div>

            <div className="portal-card">
              <div className="portal-icon">📚</div>
              <h4>Moral &amp; Academic E-Library</h4>
              <p>Download our integrated Tarbiyyah curriculum guides, moral training cards, and standard textbooks.</p>
              <Link to="/about" className="portal-link">Open E-Library →</Link>
            </div>

          </div>
        </div>
      </section>

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

      {/* NEWS, VIDEO & ANNOUNCEMENTS (NOU Style) */}
      <section className="news-board-section">
        <div className="wrap news-board-grid">
          
          {/* LEFT: Featured Video Player */}
          <div className="board-left" data-reveal>
            <h3 className="section-title-alt">Documentary &amp; Media</h3>
            <div className="video-player-container">
              <video 
                className="board-video" 
                controls 
                muted 
                loop 
                autoPlay
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-kids-in-a-classroom-smiling-at-the-camera-34289-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-caption">🎥 Documenting classroom environments and pupil learning across Kano outreach schools.</p>
            </div>
          </div>

          {/* RIGHT: Announcements Bulletin Board */}
          <div className="board-right" data-reveal>
            <h3 className="section-title-alt">Latest News &amp; Bulletins</h3>
            <div className="announcements-container">
              
              <div className="announcement-item">
                <span className="announcement-date">June 25, 2026</span>
                <h5>June 2026 Teacher Welfare Allowances Disbursed</h5>
                <p>Support stipends for all 45 registered rural schoolteachers have been successfully paid out for the month of June.</p>
                <Link to="/about" className="announcement-more">Read More →</Link>
              </div>

              <div className="announcement-item">
                <span className="announcement-date">June 18, 2026</span>
                <h5>Kano State School Renovation Completed</h5>
                <p>Our team completed the installation of a new aluminum roof sheet system and double blackboards for the local Kano school block.</p>
                <Link to="/impact" className="announcement-more">Read More →</Link>
              </div>

              <div className="announcement-item">
                <span className="announcement-date">June 05, 2026</span>
                <h5>Distribution of 500+ Learning Packages</h5>
                <p>Pupils in underserved Sokoto local schools received learning kits including pencils, slates, and academic guides.</p>
                <Link to="/impact" className="announcement-more">Read More →</Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* OPERATIONS MAP SECTION */}
      <section className="map-section">
        <div className="wrap map-grid">
          
          {/* LEFT: Google Maps Iframe */}
          <div className="map-container-box" data-reveal>
            <iframe 
              className="map-iframe"
              title="Tarbiyyah Operations Map (Malali GRA, Kaduna)"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3837968536836!2d7.447547074783935!3d10.549219689592473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b3fe049bba3577%3A0xc07a4a7541f4ffde!2sKam%20Salem%20Rd%2C%20Malali%2C%20Kaduna%20800244%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* RIGHT: Operational Information */}
          <div className="map-details" data-reveal>
            <h3>Our Areas of Operation</h3>
            <p>Our headquarters is located at Kam Salem Road, Malali GRA, Kaduna. From this central base, our field teams coordinate logistics, classroom renovations, and teacher stipends across remote communities in Northern Nigeria.</p>
            
            <div className="hubs-list">
              <div className="hub-item">
                <h5>Kaduna Headquarters Hub</h5>
                <span>Kam Salem Road, Malali GRA · 6 Classrooms · 10 Teachers</span>
              </div>
              <div className="hub-item">
                <h5>Kano Operations Hub</h5>
                <span>12 Classrooms Renovated · 18 Teachers Supported</span>
              </div>
              <div className="hub-item">
                <h5>Sokoto Outreach Hub</h5>
                <span>8 Classrooms Renovated · 12 Teachers Supported</span>
              </div>
              <div className="hub-item">
                <h5>Borno Reconstruction Hub</h5>
                <span>4 Classrooms Renovated · 8 Teachers Supported</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OUR PARTNERS SECTION */}
      <section className="partners-section">
        <div className="wrap">
          <h3>Our Trusted Partners &amp; Supporters</h3>
          <div className="partners-grid" data-reveal="stagger">
            <span className="partner-logo">Kano MoE</span>
            <span className="partner-logo">Northern Trust</span>
            <span className="partner-logo">Al-Qalam Council</span>
            <span className="partner-logo">GlobalGiving Fund</span>
            <span className="partner-logo">Tarbiyyah Union</span>
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
