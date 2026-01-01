// Page Navigation
function showPathway(pathway) {
    // Hide landing page
    document.getElementById('landingPage').classList.remove('active');
    
    // Show selected pathway
    if (pathway === 'engineering') {
        document.getElementById('engineeringPage').classList.add('active');
    } else if (pathway === 'medical') {
        document.getElementById('medicalPage').classList.add('active');
    }
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLanding() {
    // Hide all pathway pages
    document.getElementById('engineeringPage').classList.remove('active');
    document.getElementById('medicalPage').classList.remove('active');
    
    // Show landing page
    document.getElementById('landingPage').classList.add('active');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Module Modal Functionality
function showModule(moduleName) {
    const modal = document.getElementById('moduleModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    // Set module title
    modalTitle.textContent = moduleName;
    
    // Set module description based on module name
    modalDescription.textContent = getModuleDescription(moduleName);
    
    // Show modal
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('moduleModal');
    modal.classList.remove('active');
}

// Get description for each module
function getModuleDescription(moduleName) {
    const descriptions = {
        // Engineering Pathway Modules
        'ISTIDI': 'Interactive Student Information and Digital Interface - Access your student portal and manage your academic information.',
        'MESHY CLOUD': 'Cloud-based mesh network for collaborative learning and file sharing across the university.',
        'MIND INTERACTION': 'Interactive learning platform that adapts to your cognitive patterns and learning style.',
        'IQ ENHANCER': 'Advanced cognitive development tools and exercises to enhance problem-solving abilities.',
        'IPERCEPTION CLASSES': 'Perception-based learning classes that enhance visual and spatial understanding.',
        'ii8D': 'Immersive 8-dimensional learning experience for complex engineering concepts.',
        'STUDENT Ai': 'AI-powered student assistant for personalized learning support and guidance.',
        'ADMISSION': 'Admission portal for new students - Apply and track your application status.',
        'SCHOOL PASSWORD': 'Secure password management system for all university services.',
        'ADMITTED YEAR': 'View and manage information related to your admission year and cohort.',
        'PC SYNC': 'Synchronize your coursework and progress across multiple devices.',
        'iCREATE': 'Creative development platform for engineering projects and innovations.',
        'iiREC': 'Recording and documentation system for lectures and lab work.',
        'PATHWAY iCLOUD': 'Pathway-specific cloud storage with 70m capacity for your academic materials.',
        'HOME-DISTANCE-LEARNING-Ai': 'AI-enhanced distance learning platform for studying from home.',
        'HOME-LIVE-BLENDED-ONLINE-Ai': 'Live blended online classes combining home and interactive sessions.',
        'CLASSROOM-iTRANSLATER-Ai': 'Real-time translation service for international classroom sessions.',
        'iPERCEPTION-CLASSROOM-CLASSES-Ai': 'Enhanced classroom experience with perception-based teaching methods.',
        'COURSE Ai': 'AI-assisted course management and curriculum navigation system.',
        'PHYSICS LAB Ai': 'Virtual and physical physics laboratory with AI guidance.',
        'CHEMISTRY LAB Ai': 'Advanced chemistry laboratory with AI-powered experiments and simulations.',
        'MATHEMATICS Ai': 'AI-enhanced mathematics learning with step-by-step problem solving.',
        'CLASSROOM Ai': 'Intelligent classroom management and interactive learning environment.',
        'iPERCEPTION CLASS': 'Specialized classes using perception-based learning techniques.',
        'MODULES Ai': 'Module management system with AI-powered recommendations.',
        'ASSESSMENT Ai': 'Automated assessment and evaluation system with detailed feedback.',
        'EXAMS Ai': 'Online examination platform with AI proctoring and instant results.',
        'iLECTURER Ai': 'AI-powered virtual lecturer for personalized instruction.',
        'CLASSES iTRANSLATOR Ai': 'Real-time translation for multilingual class participation.',
        'ONLINE iCORRELATION CLASSES Ai': 'Interdisciplinary correlation classes connecting different subjects.',
        'ENGINEERING MODELS Ai': 'Library of engineering models and simulations for practical learning.',
        'ENGINEERING LIBRARY Ai': 'Digital library with extensive engineering resources and research papers.',
        'DATABASE Ai': 'Comprehensive database of engineering knowledge and resources.',
        'NEW AGE PHYSICS Ai': 'Cutting-edge physics concepts and quantum mechanics learning.',
        'HALO RAUS Ai': 'Advanced research and understanding systems for engineering innovation.',
        'ENGINEERING GAMES': 'Gamified learning experiences for engineering concepts.',
        'NEW AGE ENGINEERING': 'Modern engineering practices and emerging technologies.',
        'COMMON ROOM Ai': 'Virtual common room for student collaboration and networking.',
        'ENGINEERING LAWS': 'Legal and ethical frameworks in engineering practice.',
        'CLASS iTRANSLATER Ai': 'In-class translation services for better understanding.',
        'TUTORIALHELPER Ai': 'AI-powered tutorial assistance and homework help.',
        'TEXTBOOKS Ai': 'Digital textbook library with interactive features.',
        'GRADING Ai': 'Automated grading system with detailed performance analytics.',
        'REGISTRATION Ai': 'Course registration system with AI-powered schedule optimization.',
        'STORE Ai': 'University store for books, supplies, and merchandise.',
        'CAFETARIA Ai': 'Campus cafeteria services and meal planning.',
        'iPAY Ai': 'Integrated payment system for all university transactions.',
        'LANGUAGES Ai': 'Language learning platform with AI-powered instruction.',
        
        // Medical Pathway Modules
        'DICTIONARY-Ai': 'Medical dictionary with AI-powered definitions and explanations.',
        'GEANEATOLOGY-Ai': 'Genealogy and genetics study platform for medical research.',
        'NOTEBOOK-Ai': 'AI-enhanced digital notebook for medical notes and case studies.',
        'BOOKS-Ai': 'Medical textbook library with AI-powered search and recommendations.',
        'STORE-Ai': 'Medical supplies and textbook store.',
        'TUTORIAL-HELPER-Ai': 'Medical tutorial assistance with AI guidance.',
        'STAFF-EXAMS-Ai': 'Staff evaluation and certification examination system.',
        'CONVO-ROOM-Ai': 'Virtual conversation room for medical discussions and consultations.',
        'DIARY-ALUBIC-Ai': 'Clinical diary system for tracking patient interactions and learning.',
        'DATABASE-Ai': 'Comprehensive medical database with research and clinical data.',
        'CERTIFICATES-Ai': 'Certification management and verification system.',
        'MS MODULAR iSTUDY': 'Modular study system specifically designed for medical students.',
        'HOME-LEARNING-Ai': 'AI-powered home learning platform for medical courses.',
        'CLASSROOM-LEARNING-Ai': 'Enhanced classroom learning with AI assistance.',
        'ONLINE-BLEND-Ai': 'Blended online learning combining theory and practice.',
        'LANGUAGES-Ai': 'Medical terminology in multiple languages.',
        'iTRANSLATOR-Ai': 'Medical translation services for international students.',
        'ASSIGNMENTS-Ai': 'Assignment management with AI-powered feedback.',
        'ANTIPLAGEriRER-Ai': 'Plagiarism detection system for academic integrity.',
        'EXAMINER-Ai': 'AI-powered examination and evaluation system.',
        'iPAY-Ai': 'Payment system for medical program fees and services.',
        'PATHWAY-PC-SYNC-Ai': 'Sync medical pathway materials across devices.',
        'COURSES Ai': 'Medical course management and navigation system.',
        'BASIC MEDICAL Ai': 'Foundational medical sciences with AI tutoring.',
        'ROTATION LIVE Ai': 'Live clinical rotation scheduling and management.',
        'VIRTUAL ROTATION Ai': 'Virtual clinical rotations with simulated patient cases.',
        'ASSESSMENT Ai': 'Medical assessment and competency evaluation.',
        'iVALUATOR Ai': 'Comprehensive evaluation system for medical performance.',
        'iREVISION Ai': 'AI-powered revision and exam preparation system.',
        'MBBS Ai': 'Bachelor of Medicine, Bachelor of Surgery program resources.',
        'MD Ai': 'Doctor of Medicine advanced program materials.',
        'MRES Ai': 'Master of Research in medical sciences.',
        'DDM Ai': 'Doctor of Dental Medicine program resources.',
        'PHARM D Ai': 'Doctor of Pharmacy program materials and resources.',
        'DVM Ai': 'Doctor of Veterinary Medicine program resources.',
        'LAB Ai': 'Medical laboratory training with AI guidance.',
        'ONLINE Ai': 'Online medical learning platform.',
        'PATIENT INTERACTION': 'Patient interaction training and simulation.',
        'INSTANT LEARNING Ai': 'Quick learning modules for medical concepts.',
        'DAILY LOGBOOK Ai': 'Daily medical practice logbook and reflection tool.',
        'LICENSING EXAMS Ai': 'Medical licensing examination preparation and practice.',
        'CLASSES iTRANSLATER Ai': 'Real-time class translation for medical terminology.',
        'LIBRARY Ai': 'Medical library with extensive research resources.',
        'SIMULATION Ai': 'Medical simulation training for clinical skills.',
        'GRADES Ai': 'Grade tracking and academic performance monitoring.',
        'ONLINE GRADUATION': 'Virtual graduation ceremony and certification.',
        'CPD FELLOW Ai': 'Continuing Professional Development fellowship program.',
        'IQ ENHANCER Ai': 'Cognitive enhancement tools for medical professionals.',
        'CAFETARIA Ai': 'Campus dining services and nutrition planning.'
    };
    
    return descriptions[moduleName] || 'This module provides essential tools and resources for your academic journey at ALIYO MOMOT UNIVERSITY. Click to access advanced features and personalized learning experiences.';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('moduleModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animation to all buttons
    const buttons = document.querySelectorAll('.module-btn, .pathway-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
    
    // Initialize - show landing page
    document.getElementById('landingPage').classList.add('active');
});

// Add hover sound effect (optional - can be enhanced)
function addHoverEffect() {
    const buttons = document.querySelectorAll('.module-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Initialize hover effects
addHoverEffect();

// Add ripple effect on click
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.module-btn, .pathway-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
});
