import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Tarbiyyah Support Foundation's primary mission?",
      a: "We aim to uplift underserved children and support dedicated teachers through educational materials, classroom infrastructure development, and moral guidance (Tarbiyyah) across rural Northern Nigeria."
    },
    {
      q: "How are donation funds allocated?",
      a: "62% goes directly to student sponsorships and teacher welfare support, 24% is spent on classroom materials and building infrastructure, and 14% covers project monitoring, operations, and logistics."
    },
    {
      q: "Where does Tarbiyyah Support Foundation operate?",
      a: "Our headquarters is located at Kam Salem Road, Malali GRA, Kaduna. We actively run project hubs and school renovations in rural regions across Kano, Sokoto, Kaduna, and Borno states."
    },
    {
      q: "Is Tarbiyyah Support Foundation a registered organization?",
      a: "Yes, we are fully registered with the Corporate Affairs Commission (CAC) of Nigeria as a non-governmental organization (NGO) under registration number RC 9624530."
    },
    {
      q: "How can I sponsor a specific classroom or teacher?",
      a: "You can visit our Donate page, select a dedicated tier (such as a monthly teacher stipend or a classroom construction block), or contact our Kaduna office directly at 0813 693 4004 to set up a direct partnership."
    }
  ];
  return (
    <>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: '760px' }} data-reveal>
          <p className="eyebrow">About Us</p>
          <h1>Built on a single conviction: where a child is born shouldn't decide what they can become.</h1>
          <p className="lede" style={{ color: 'rgba(250,246,238,0.78)' }}>Tarbiyyah Support Foundation is a registered Nigerian non-profit advancing educational development in underserved rural communities — mobilising resources for both literacy and Islamic education, and standing behind the teachers who deliver it.</p>
        </div>
      </section>

      <div className="arch-divider" style={{ background: 'var(--canvas)' }}>
        <svg viewBox="0 0 1180 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 C 40 32, 80 32, 120 0 C 160 32, 200 32, 240 0 C 280 32, 320 32, 360 0 C 400 32, 440 32, 480 0 C 520 32, 560 32, 600 0 C 640 32, 680 32, 720 0 C 760 32, 800 32, 840 0 C 880 32, 920 32, 960 0 C 1000 32, 1040 32, 1080 0 C 1100 18, 1140 18, 1180 0" stroke="#13402E" strokeWidth="1.5" fill="none" opacity="0.45"/>
        </svg>
      </div>

      {/* ORIGIN STORY */}
      <section className="section">
        <div className="wrap grid-2">
          <div data-reveal>
            <p className="eyebrow">Our Story</p>
            <h2>Why "Tarbiyyah"?</h2>
            <p className="lede" style={{ maxWidth: 'none' }}>Tarbiyyah means upbringing — the deliberate, patient work of shaping character alongside knowledge. We chose it as our name because it names what's missing when education is treated as academics alone. In the communities we serve, a child's schooling and a child's moral formation were never meant to be separate things, and the teachers who hold both together deserve to be supported, not stretched thin.</p>
            <p style={{ maxWidth: '46ch', color: '#4A4C40' }}>We started as a small group of well-meaning individuals pooling resources for one collapsing classroom. What we learned there — that infrastructure, curriculum, and teacher welfare all have to move together, or none of them hold — still shapes how we work today.</p>
          </div>
          <div className="arch-frame" data-reveal>
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80" alt="Children seated together during a lesson" loading="lazy" />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section bg-deep">
        <div className="wrap">
          <div className="vm-grid" data-reveal="stagger">
            <div className="vm-card">
              <span className="pill">Vision</span>
              <p className="vm-statement">"To build a society where every child, regardless of background or location, has access to knowledge, moral guidance, and equal opportunities to achieve prosperity and contribute meaningfully to the development of their communities."</p>
            </div>
            <div className="vm-card vm-card-dark">
              <span className="pill" style={{ background: 'rgba(250,246,238,0.14)', color: 'var(--gold)' }}>Mission</span>
              <p className="vm-statement" style={{ color: 'var(--canvas)' }}>"To promote access to quality education by supporting the development of educational infrastructure, empowering underprivileged children through formal learning opportunities, and uplifting dedicated teachers who serve rural communities with commitment and sacrifice."</p>
            </div>
          </div>
        </div>
      </section>

      {/* AIMS */}
      <section className="section">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '600px', margin: '0 auto 52px' }} data-reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Our Aims</p>
            <h2>Five commitments that guide every project.</h2>
          </div>
          <div className="aims-list" data-reveal="stagger">
            <div className="aim-row">
              <span className="aim-mark">01</span>
              <p>Promote access to quality education for children and youth, especially in underserved rural communities.</p>
            </div>
            <div className="aim-row">
              <span className="aim-mark">02</span>
              <p>Support moral and Islamic upbringing (Tarbiyyah) alongside academic development.</p>
            </div>
            <div className="aim-row">
              <span className="aim-mark">03</span>
              <p>Reduce illiteracy and empower individuals through knowledge and skills acquisition.</p>
            </div>
            <div className="aim-row">
              <span className="aim-mark">04</span>
              <p>Uplift vulnerable and less privileged children by providing educational and welfare support.</p>
            </div>
            <div className="aim-row">
              <span className="aim-mark">05</span>
              <p>Contribute to community development through sustainable educational initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-green">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '600px', margin: '0 auto 52px' }} data-reveal>
            <p className="eyebrow" style={{ color: 'var(--gold)' }}>How We Work</p>
            <h2>Three values that shape every decision.</h2>
          </div>
          <div className="grid-3" data-reveal="stagger">
            <div className="value-card">
              <h3>Sustainability over spectacle</h3>
              <p>We monitor and evaluate every project we start, because a classroom that falls apart in two years helped no one.</p>
            </div>
            <div className="value-card">
              <h3>Dignity for teachers</h3>
              <p>Rural teachers carry this work on their backs. We treat their welfare as core to the mission, not an afterthought.</p>
            </div>
            <div className="value-card">
              <h3>Knowledge with character</h3>
              <p>We don't separate academic learning from moral guidance — both are part of what it means to educate a child well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs SECTION (NOU Style Accordion) */}
      <section className="faq-section" id="faq">
        <div className="wrap">
          <div className="center" style={{ maxWidth: '600px', margin: '0 auto 48px' }} data-reveal>
            <p className="eyebrow" style={{ justifyContent: 'center' }}>Frequently Asked Questions</p>
            <h2>Have Questions? We Have Answers.</h2>
          </div>
          
          <div className="faq-container" data-reveal>
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className={`faq-question ${openFaq === idx ? 'is-active' : ''}`}
                  onClick={() => toggleFaq(idx)}
                  type="button"
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">+</span>
                </button>
                <div className={`faq-answer ${openFaq === idx ? 'is-open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="about-contact-section" id="contact">
        <div className="wrap contact-grid-alt">
          
          {/* Left: Contact Info details */}
          <div className="contact-info-col" data-reveal>
            <h3>Get In Touch</h3>
            
            <div className="contact-detail-item">
              <h5>Office Address</h5>
              <p>Kam Salem Road, Malali GRA, Kaduna, Nigeria</p>
            </div>

            <div className="contact-detail-item">
              <h5>Phone Numbers</h5>
              <p style={{ marginBottom: '6px' }}><a href="tel:+2348136934004">0813 693 4004</a></p>
              <p><a href="tel:+2348091581000">0809 158 1000</a></p>
            </div>

            <div className="contact-detail-item">
              <h5>Email Address</h5>
              <p><a href="mailto:contact@tarbiyyah.org">contact@tarbiyyah.org</a> (Domain incoming)</p>
            </div>
          </div>

          {/* Right: Social Media channels placeholders */}
          <div className="contact-socials-col" data-reveal>
            <h3>Connect With Us</h3>
            <p style={{ color: '#5B5D50', marginBottom: '24px', fontSize: '0.95rem' }}>We are opening our official social channels soon. Connect with us on our temporary profiles or follow our announcements:</p>
            
            <div className="social-links-list">
              <a href="#" className="social-link-item" onClick={(e) => e.preventDefault()}>
                <div className="social-icon-box">FB</div>
                <span>facebook.com/tarbiyyahsupport</span>
              </a>
              <a href="#" className="social-link-item" onClick={(e) => e.preventDefault()}>
                <div className="social-icon-box">TT</div>
                <span>tiktok.com/@tarbiyyahsupport</span>
              </a>
              <a href="#" className="social-link-item" onClick={(e) => e.preventDefault()}>
                <div className="social-icon-box">IG</div>
                <span>instagram.com/tarbiyyahsupport</span>
              </a>
              <a href="#" className="social-link-item" onClick={(e) => e.preventDefault()}>
                <div className="social-icon-box">LN</div>
                <span>linkedin.com/company/tarbiyyahsupport</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="wrap center" data-reveal>
          <h2 style={{ marginBottom: '18px' }}>Want to see this work up close?</h2>
          <p className="lede mx-auto" style={{ textAlign: 'center', marginBottom: '28px' }}>Our Impact &amp; Goals page breaks down exactly what we've built and what's next.</p>
          <Link to="/impact" className="btn btn-dark">View Impact &amp; Goals →</Link>
        </div>
      </section>
    </>
  );
}
