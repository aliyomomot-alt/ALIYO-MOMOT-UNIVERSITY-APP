import React from 'react';

function Courses() {
  const medicalCourses = [
    {
      code: "MED 101",
      name: "Human Anatomy and Physiology",
      credits: 6,
      description: "Comprehensive study of human body systems and their functions."
    },
    {
      code: "MED 201",
      name: "Pathology and Microbiology",
      credits: 5,
      description: "Study of disease processes and microorganisms affecting human health."
    },
    {
      code: "MED 301",
      name: "Clinical Medicine",
      credits: 8,
      description: "Hands-on clinical practice and patient diagnosis techniques."
    },
    {
      code: "MED 401",
      name: "Advanced Surgery Techniques",
      credits: 7,
      description: "Modern surgical procedures and minimally invasive techniques."
    }
  ];

  const engineeringCourses = [
    {
      code: "ENG 101",
      name: "Engineering Mathematics",
      credits: 4,
      description: "Advanced mathematical concepts for engineering applications."
    },
    {
      code: "ENG 201",
      name: "Thermodynamics and Fluid Mechanics",
      credits: 5,
      description: "Principles of energy transfer and fluid behavior."
    },
    {
      code: "ENG 301",
      name: "Digital Systems Design",
      credits: 4,
      description: "Design and implementation of digital circuits and systems."
    },
    {
      code: "ENG 401",
      name: "Project Management",
      credits: 3,
      description: "Engineering project planning, execution, and management."
    }
  ];

  return (
    <div className="courses-page">
      <h1 className="page-title">Course Catalog</h1>
      <p className="page-subtitle">Explore our comprehensive curriculum</p>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 className="page-subtitle" style={{ textAlign: 'left', marginBottom: '30px' }}>
          📚 Medical Courses
        </h2>
        <div className="card-grid">
          {medicalCourses.map((course, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{course.code}</h3>
              <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#555' }}>
                {course.name}
              </h4>
              <div className="card-content">
                <p>{course.description}</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#2a5298' }}>
                  Credits: {course.credits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="page-subtitle" style={{ textAlign: 'left', marginBottom: '30px' }}>
          🔧 Engineering Courses
        </h2>
        <div className="card-grid">
          {engineeringCourses.map((course, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{course.code}</h3>
              <h4 style={{ fontSize: '1.2em', marginBottom: '10px', color: '#555' }}>
                {course.name}
              </h4>
              <div className="card-content">
                <p>{course.description}</p>
                <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#2a5298' }}>
                  Credits: {course.credits}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
