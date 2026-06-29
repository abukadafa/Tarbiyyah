import React from 'react';
import { Link } from 'react-router-dom';
import VideoGallery from '../components/VideoGallery.jsx';


export default function Impact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '760px' }} data-reveal>
          <p className="eyebrow">Impact &amp; Goals</p>
          <h1>What's been built, and what's next.</h1>
          <p className="lede" style={{ color: 'rgba(250,246,238,0.78)' }}>Every objective below is tied to a fund, a community, or a teacher waiting on it. Here's where things stand.</p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="stat-row" data-reveal="stagger" style={{ color: 'var(--green)' }}>
            <div className="stat" style={{ background: 'var(--canvas)', border: '1px solid var(--line)', borderRadius: '4px', padding: '28px 16px' }}>
              <b data-count="32" style={{ color: 'var(--terracotta)' }}>0</b><span style={{ color: '#5B5D50' }}>Classrooms built &amp; renovated</span>
            </div>
            <div className="stat" style={{ background: 'var(--canvas)', border: '1px solid var(--line)', borderRadius: '4px', padding: '28px 16px' }}>
              <b data-count="58" style={{ color: 'var(--terracotta)' }}>0</b><span style={{ color: '#5B5D50' }}>Teachers supported with stipends</span>
            </div>
            <div className="stat" style={{ background: 'var(--canvas)', border: '1px solid var(--line)', borderRadius: '4px', padding: '28px 16px' }}>
              <b data-count="2400" data-suffix="+" style={{ color: 'var(--terracotta)' }}>0</b><span style={{ color: '#5B5D50' }}>Children reached</span>
            </div>
            <div className="stat" style={{ background: 'var(--canvas)', border: '1px solid var(--line)', borderRadius: '4px', padding: '28px 16px' }}>
              <b data-count="9" style={{ color: 'var(--terracotta)' }}>0</b><span style={{ color: '#5B5D50' }}>Rural communities served</span>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIVES GRID */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '620px', margin: '0 auto 52px' }} data-reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Our Objectives</p>
            <h2>Seven objectives. One foundation underneath all of them.</h2>
          </div>
          <div className="obj-grid" data-reveal="stagger">
            <div className="obj-card">
              <span className="obj-icon">🏗️</span>
              <h3>Build classrooms &amp; learning facilities</h3>
              <p>Raise funds and mobilise resources to construct safe, durable classrooms where lessons currently happen outdoors or in failing structures.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">📖</span>
              <h3>Support Qur'anic &amp; Islamic education</h3>
              <p>Establish and sustain literacy programs that integrate Qur'anic and Islamic education alongside formal academic learning.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">🎓</span>
              <h3>Provide scholarships &amp; school materials</h3>
              <p>Deliver scholarships, books, uniforms, and financial aid directly to disadvantaged students who would otherwise drop out.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">📣</span>
              <h3>Organise community outreach</h3>
              <p>Run outreach programs, seminars, and awareness campaigns on the value of education and moral upbringing.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">🤝</span>
              <h3>Collaborate with partners</h3>
              <p>Work alongside donors, partners, and stakeholders to expand educational opportunities further than we could reach alone.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">🏠</span>
              <h3>Develop safe learning environments</h3>
              <p>Build dormitories and support structures so that distance from home is no longer a reason a child can't attend school.</p>
            </div>
            <div className="obj-card">
              <span className="obj-icon">📊</span>
              <h3>Monitor &amp; evaluate every project</h3>
              <p>Track the projects we start to ensure real, lasting impact — not just a ribbon-cutting and a photo.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="arch-divider" style={{ background: 'var(--canvas-deep)' }}>
        <svg viewBox="0 0 1180 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 36 C 40 4, 80 4, 120 36 C 160 4, 200 4, 240 36 C 280 4, 320 4, 360 36 C 400 4, 440 4, 480 36 C 520 4, 560 4, 600 36 C 640 4, 680 4, 720 36 C 760 4, 800 4, 840 36 C 880 4, 920 4, 960 36 C 1000 4, 1040 4, 1080 36 C 1100 18, 1140 18, 1180 36" stroke="#13402E" strokeWidth="1.5" fill="none" opacity="0.4"/>
        </svg>
      </div>

      {/* CASE STUDY */}
      <section className="section bg-deep">
        <div className="wrap grid-2">
          <div className="arch-frame" data-reveal>
            <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=900&q=80" alt="Students attentively following a lesson in a renovated classroom" loading="lazy" />
          </div>
          <div data-reveal>
            <p className="eyebrow">Case in Point</p>
            <h2>From three crumbling walls to a classroom that holds 40 students.</h2>
            <p className="lede" style={{ maxWidth: 'none' }}>One of our earliest projects took a classroom missing its roof and two of its walls and rebuilt it from the foundation up — block walls, a proper roof, desks, and a teacher placed on a stipend. It now runs both academic lessons and Qur'anic instruction on a rotating schedule, serving a community that previously sent children to the nearest town, an hour's walk away.</p>
            <Link to="/donate" className="btn btn-dark" style={{ marginTop: '8px' }}>Help fund the next one →</Link>
          </div>
        </div>
      </section>

      <VideoGallery />

      {/* ROADMAP */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '560px', margin: '0 auto 52px' }} data-reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Looking Ahead</p>
            <h2>What we're working toward this year.</h2>
          </div>
          <div className="roadmap" data-reveal="stagger">
            <div className="roadmap-item">
              <span className="pill">In progress</span>
              <h3>Two new classroom blocks</h3>
              <p>Foundations laid in two communities; construction continues as funds allow.</p>
            </div>
            <div className="roadmap-item">
              <span className="pill" style={{ background: 'var(--gold-soft)', color: 'var(--terracotta)' }}>Next up</span>
              <h3>20 new teacher stipends</h3>
              <p>Identifying and onboarding rural teachers in three additional communities.</p>
            </div>
            <div className="roadmap-item">
              <span className="pill" style={{ background: 'var(--sage)', color: 'var(--canvas)' }}>Planned</span>
              <h3>A dormitory pilot</h3>
              <p>Our first support structure for children traveling long distances to attend school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight bg-green">
        <div className="wrap center" data-reveal>
          <h2 style={{ marginBottom: '18px' }}>Every objective above needs funding to move forward.</h2>
          <p className="lede mx-auto" style={{ textAlign: 'center', marginBottom: '28px', color: 'rgba(250,246,238,0.78)' }}>Pick the one that matters most to you, and see exactly what your gift builds.</p>
          <Link to="/donate" className="btn btn-primary">Donate Now</Link>
        </div>
      </section>
    </>
  );
}
