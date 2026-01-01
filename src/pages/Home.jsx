import React from 'react';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to ALIYO MOMOT University</h1>
        <p className="hero-text">
          A leading institution dedicated to excellence in Medical and Engineering education. 
          We nurture future professionals who will shape the world of healthcare and technology.
        </p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-number">5000+</div>
          <div className="stat-label">Students</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">250+</div>
          <div className="stat-label">Faculty Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">50+</div>
          <div className="stat-label">Programs</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">98%</div>
          <div className="stat-label">Graduate Success Rate</div>
        </div>
      </div>

      <h2 className="page-subtitle">Why Choose ALIYO MOMOT University?</h2>
      
      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">World-Class Faculty</h3>
          <div className="card-content">
            <p>Learn from renowned experts in medical and engineering fields with years of industry experience and academic excellence.</p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">State-of-the-Art Facilities</h3>
          <div className="card-content">
            <p>Access cutting-edge laboratories, modern medical simulation centers, and advanced engineering workshops.</p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">Research Opportunities</h3>
          <div className="card-content">
            <p>Engage in groundbreaking research projects in both medical sciences and engineering disciplines.</p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">Career Support</h3>
          <div className="card-content">
            <p>Benefit from our strong industry partnerships and comprehensive career development programs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
