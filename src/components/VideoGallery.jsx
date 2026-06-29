import React, { useState } from 'react';

const playlist = [
  {
    id: 'vid_ngo_strengths',
    title: 'Strengths and Weaknesses of NGOs (Part 1)',
    category: 'NGO Development',
    duration: '14:22',
    description: 'An educational analysis outlining the unique structural strengths and operational vulnerabilities faced by Non-Governmental Organizations (NGOs) worldwide. This resource helps guide our long-term transparency and capacity planning at Tarbiyyah Support Foundation.',
    thumbnail: 'https://images.unsplash.com/photo-1544531516-a5e34b275685?auto=format&fit=crop&w=600&q=80',
    embedId: 'Hs6ATIx8TiA'
  },
  {
    id: 'vid1',
    title: 'Building Safe Classrooms: 2026 Kano Project',
    category: 'Educational Infrastructure',
    duration: '4:12',
    description: 'A walkthrough of our latest construction site in rural Kano State. See how we took a classroom with no roof or walls and transformed it into a secure, weather-proof learning facility for 40+ students.',
    thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600&q=80',
    embedId: 'g7-fQ2d7fDk'
  },
  {
    id: 'vid2',
    title: 'Uplifting Dedicated Teachers: Support Stipends in Action',
    category: 'Teacher Welfare',
    duration: '3:24',
    description: 'Listen directly from Malama Amina, a rural educator who benefits from our monthly teacher welfare program. Learn how the stipend has allowed her to focus entirely on teaching without financial stress.',
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
    embedId: '9hYtC53L1m4'
  },
  {
    id: 'vid3',
    title: 'Holistic Education: Integrating Academics & Tarbiyyah',
    category: 'Holistic Learning',
    duration: '5:08',
    description: 'An inside look at our rotating curriculum, merging standard academic literacy with moral guidance and character development. See how students learn both knowledge and empathy.',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    embedId: 'S433N0e32rE'
  }
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(playlist[0]);

  return (
    <section className="video-section">
      <div className="wrap">
        <div className="center" style={{ maxWidth: '620px', margin: '0 auto 48px' }} data-reveal>
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Videos &amp; Media</p>
          <h2>Watch our work in the field.</h2>
          <p className="lede mx-auto" style={{ textAlign: 'center' }}>
            We believe in complete transparency. See exactly how donor funds are used to build classrooms, support teachers, and uplift rural children.
          </p>
        </div>

        {/* FEATURED PLAYER */}
        <div className="featured-video-wrapper" data-reveal>
          <div className="video-player-container">
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo.embedId}?autoplay=0&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-info-block">
            <span className="video-card-category" style={{ fontSize: '0.8rem', marginBottom: '8px' }}>
              Featured Video &middot; {activeVideo.category}
            </span>
            <h3>{activeVideo.title}</h3>
            <p>{activeVideo.description}</p>
          </div>
        </div>

        {/* VIDEOS GRID */}
        <div>
          <h4 className="video-grid-title">All Playlists ({playlist.length})</h4>
          <div className="video-thumbs-grid" data-reveal="stagger">
            {playlist.map((video) => (
              <button 
                key={video.id}
                className={`video-card-thumb ${activeVideo.id === video.id ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveVideo(video);
                  // Scroll to top of player if user clicks a playlist item
                  document.querySelector('.video-player-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <div className="video-thumb-img-wrapper">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-overlay">
                    <span className="play-btn-icon">
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="video-card-details">
                  <span className="video-card-duration">{video.duration}</span>
                  <span className="video-card-category">{video.category}</span>
                  <h5 className="video-card-title">{video.title}</h5>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
