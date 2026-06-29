import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Impact from './pages/Impact.jsx';
import Donate from './pages/Donate.jsx';

function PageLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll reveal animation observer
    const revealEls = document.querySelectorAll('[data-reveal]');
    let obs;
    if ('IntersectionObserver' in window && revealEls.length) {
      obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(el => obs.observe(el));
    } else {
      revealEls.forEach(el => el.classList.add('is-visible'));
    }

    // Counter animation observer
    const counters = document.querySelectorAll('[data-count]');
    let counterObs;
    
    const animateCount = (el) => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    if ('IntersectionObserver' in window && counters.length) {
      counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(el => counterObs.observe(el));
    }

    // Scroll to top on navigation, or scroll to hash if it exists
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }

    // Page Title & Meta Description mapping for SPA SEO
    const metaData = {
      '/': {
        title: 'Tarbiyyah Support Foundation | Empowering Rural Education',
        description: 'Empowering underserved children and uplifting dedicated teachers through quality education and moral guidance across rural Northern Nigeria.'
      },
      '/about': {
        title: 'About Us | Tarbiyyah Support Foundation',
        description: 'Learn about our history, moral training principles, and our team dedicated to raising educational standards in underserved rural communities.'
      },
      '/impact': {
        title: 'Impact & Goals | Tarbiyyah Support Foundation',
        description: 'Explore our progress, completed school builds, classrooms renovated, teacher welfare projects, and core strategic objectives.'
      },
      '/donate': {
        title: 'Donate Now | Support Tarbiyyah Support Foundation',
        description: 'Put your gift exactly where it is needed. Sponsor student learning kits, support rural teachers, or fund a full classroom construction block.'
      }
    };

    const currentMeta = metaData[pathname] || metaData['/'];
    document.title = currentMeta.title;

    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', currentMeta.description);
    }

    // Cleanup function
    return () => {
      if (obs) {
        revealEls.forEach(el => {
          try { obs.unobserve(el); } catch (e) {}
        });
      }
      if (counterObs) {
        counters.forEach(el => {
          try { counterObs.unobserve(el); } catch (e) {}
        });
      }
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <PageLayout />
    </Router>
  );
}
