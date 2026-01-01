import React, { useState } from 'react';

function StudentPortal() {
  const [loginMode, setLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    email: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(loginMode ? 'Login functionality will be implemented' : 'Registration functionality will be implemented');
  };

  return (
    <div className="student-portal-page">
      <h1 className="page-title">Student Portal</h1>
      <p className="page-subtitle">Access your academic information and resources</p>
      
      <div className="card-grid">
        <div className="card">
          <h3 className="card-title">{loginMode ? 'Student Login' : 'Student Registration'}</h3>
          <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            {!loginMode && (
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '1em'
                  }}
                  required
                />
              </div>
            )}
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                Student ID
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '1em'
                }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                  fontSize: '1em'
                }}
                required
              />
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#2a5298',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.1em',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1e3c72'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2a5298'}
            >
              {loginMode ? 'Login' : 'Register'}
            </button>
            
            <p style={{ textAlign: 'center', marginTop: '15px' }}>
              <button
                type="button"
                onClick={() => setLoginMode(!loginMode)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2a5298',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  fontSize: '1em'
                }}
              >
                {loginMode ? 'Need to register?' : 'Already have an account?'}
              </button>
            </p>
          </form>
        </div>
        
        <div className="card">
          <h3 className="card-title">Portal Features</h3>
          <ul className="feature-list">
            <li>View Course Schedule</li>
            <li>Check Grades and Transcripts</li>
            <li>Register for Classes</li>
            <li>Access Learning Materials</li>
            <li>Submit Assignments</li>
            <li>Communicate with Professors</li>
            <li>View Financial Information</li>
            <li>Update Personal Information</li>
          </ul>
        </div>
      </div>
      
      <div className="card-grid" style={{ marginTop: '40px' }}>
        <div className="card">
          <h3 className="card-title">📱 Mobile App</h3>
          <div className="card-content">
            <p>Download our mobile app for on-the-go access to your student portal. Available for iOS and Android devices.</p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="card-title">🆘 Need Help?</h3>
          <div className="card-content">
            <p>Contact our support team at support@aliyomomot.edu or call +1 (555) 123-4567 for assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPortal;
