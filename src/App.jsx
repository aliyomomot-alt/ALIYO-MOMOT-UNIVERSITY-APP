import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Departments from './pages/Departments';
import Courses from './pages/Courses';
import StudentPortal from './pages/StudentPortal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <h1 className="logo">ALIYO MOMOT UNIVERSITY</h1>
            <p className="tagline">Excellence in Medical & Engineering Education</p>
          </div>
          <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/departments" className="nav-link">Departments</Link>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/student-portal" className="nav-link">Student Portal</Link>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/student-portal" element={<StudentPortal />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 ALIYO MOMOT University. All rights reserved.</p>
          <p>Empowering future leaders in Medical and Engineering fields</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
