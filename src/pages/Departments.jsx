import React from 'react';

function Departments() {
  return (
    <div className="departments-page">
      <h1 className="page-title">Our Departments</h1>
      <p className="page-subtitle">Explore our specialized departments in Medical and Engineering sciences</p>
      
      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">🏥 School of Medicine</h3>
          <div className="card-content">
            <p>Comprehensive medical education with focus on clinical excellence and patient care.</p>
            <ul className="feature-list">
              <li>Doctor of Medicine (MD) Program</li>
              <li>Clinical Research Facilities</li>
              <li>Advanced Medical Simulation Labs</li>
              <li>Partnerships with Leading Hospitals</li>
              <li>Specialized Training Programs</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">⚕️ School of Nursing</h3>
          <div className="card-content">
            <p>Training compassionate and skilled nursing professionals for modern healthcare.</p>
            <ul className="feature-list">
              <li>Bachelor of Science in Nursing</li>
              <li>Master's in Nursing Administration</li>
              <li>Clinical Practice Programs</li>
              <li>Patient Care Excellence Training</li>
              <li>Community Health Initiatives</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">🔬 Biomedical Engineering</h3>
          <div className="card-content">
            <p>Bridging medicine and engineering to develop innovative healthcare solutions.</p>
            <ul className="feature-list">
              <li>Medical Device Design</li>
              <li>Biomaterials Research</li>
              <li>Imaging Systems Development</li>
              <li>Prosthetics and Implants</li>
              <li>Healthcare Technology Innovation</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">⚙️ Mechanical Engineering</h3>
          <div className="card-content">
            <p>Designing and developing mechanical systems for various industries.</p>
            <ul className="feature-list">
              <li>Robotics and Automation</li>
              <li>Thermal Systems Engineering</li>
              <li>Manufacturing Technology</li>
              <li>CAD/CAM Systems</li>
              <li>Renewable Energy Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">💻 Computer Engineering</h3>
          <div className="card-content">
            <p>Creating innovative software and hardware solutions for tomorrow's challenges.</p>
            <ul className="feature-list">
              <li>Software Development</li>
              <li>Computer Networks</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Embedded Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">⚡ Electrical Engineering</h3>
          <div className="card-content">
            <p>Advancing electrical systems and power technologies for sustainable development.</p>
            <ul className="feature-list">
              <li>Power Systems Engineering</li>
              <li>Electronics and Communication</li>
              <li>Control Systems</li>
              <li>Signal Processing</li>
              <li>Renewable Energy Integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departments;
