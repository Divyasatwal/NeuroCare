/*import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';  <span className="navbar-icon">🧠</span> 

const Navbar = ({ onNavigate, currentPage, onScrollToDisease, onScrollToFooter }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
           Logo/Brand 
          <button 
            onClick={() => onNavigate('home')} 
            className="navbar-brand"
          >
            <img src={logo} alt="NeuroCare Logo" className="navbar-logo" />
            <span className="navbar-title">NeuroCare</span>
          </button>
          
           All Navigation Links - Always Visible 
          <div className="navbar-links">
             Disease Links - Scroll to homepage cards 
            <button 
              onClick={() => onScrollToDisease('alzheimers')} 
              className="navbar-link"
            >
              Alzheimer's
            </button>
            <button 
              onClick={() => onScrollToDisease('dementia')} 
              className="navbar-link"
            >
              Dementia
            </button>
            <button 
              onClick={() => onScrollToDisease('parkinsons')} 
              className="navbar-link"
            >
              Parkinson's
            </button>
            <button 
              onClick={() => onScrollToDisease('als')} 
              className="navbar-link"
            >
              ALS
            </button>
            
             Vertical Divider 
            <div className="navbar-divider"></div>
            
             Page Navigation Links 
            <button 
              onClick={() => onNavigate('home')} 
              className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('awareness')} 
              className={`navbar-link ${currentPage === 'awareness' ? 'active' : ''}`}
            >
              Awareness
            </button>
            <button 
              onClick={() => onNavigate('confusion-matrix')} 
              className={`navbar-link ${currentPage === 'confusion-matrix' ? 'active' : ''}`}
            >
              Confusion Matrix
            </button>
            <button 
              onClick={() => onNavigate('feedback')} 
              className={`navbar-link ${currentPage === 'feedback' ? 'active' : ''}`}
            >
              Feedback
            </button>
              NEW: About Us Link 
            <button 
              onClick={onScrollToFooter} 
              className="navbar-link"
            >
              About Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;*/

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

import open from "../assets/open.png";
import close from "../assets/close.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [diseaseDropdownOpen, setDiseaseDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // NAVBAR TRANSPARENT → SOLID USING INTERSECTION OBSERVER
 
  useEffect(() => {
   const hero = document.getElementById("hero-section");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 ,// triggers when hero fully leaves viewport
    //  rootMargin: "0px 0px 0px 20px",// triggers 80px before hero fully leave
    }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);



  // Scroll to disease section on homepage
  const handleScrollToDisease = (diseaseId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(`disease-${diseaseId}`);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 300);
    } else {
      const section = document.getElementById(`disease-${diseaseId}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // Scroll to footer section (About Us)
  const handleScrollToFooter = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const footer = document.querySelector(".footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    } else {
      const footer = document.querySelector(".footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // Scroll to Hero (Home top section)
const handleScrollToHero = () => {
  if (location.pathname !== "/") {
    // Navigate to home first
    navigate("/");

    setTimeout(() => {
      const hero = document.getElementById("hero-section");
      if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300); // wait for homepage to mount
  } else {
    // Already on home
    const hero = document.getElementById("hero-section");
    if (hero) hero.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
return (
  <nav className={`navbar ${isScrolled ? "navbar-solid" : "navbar-transparent"}`}>
    <div className="navbar-container">
      <div className="navbar-content">

        {/* LOGO */}
        <button onClick={() => navigate("/")} className="navbar-brand">
          <img src={logo} alt="NeuroCare Logo" className="navbar-logo" />
          <span className="navbar-title">NeuroCare</span>
        </button>

        {/* RIGHT SIDE */}
        <div className="navbar-links">

          {/* OPEN ICON */}
          {!menuOpen && (
            <img
              src={open}
              alt="Open Menu"
              className="menu-logo white-icon"
              onClick={() => setMenuOpen(true)}
            />
          )}

          {/* FULL MENU */}
          {menuOpen && (
            <div className="navbar-menu">

              {/* DISEASE DROPDOWN */}
              <div
                className="navbar-dropdown"
                onMouseEnter={() => setDiseaseDropdownOpen(true)}
                onMouseLeave={() => setDiseaseDropdownOpen(false)}
              >
                <button
                  className="navbar-link dropdown-toggle"
                  onClick={() => setDiseaseDropdownOpen(!diseaseDropdownOpen)}
                >
                  Diseases ▾
                </button>

                {diseaseDropdownOpen && (
                  <div className="dropdown-panel">
                    <button
                      className="dropdown-item"
                      onClick={() => handleScrollToDisease("alzheimers")}
                    >
                      Alzheimer’s
                    </button>

                    <button
                      className="dropdown-item"
                      onClick={() => handleScrollToDisease("dementia")}
                    >
                      Dementia
                    </button>

                    <button
                      className="dropdown-item"
                      onClick={() => handleScrollToDisease("parkinsons")}
                    >
                      Parkinson’s
                    </button>

                    <button
                      className="dropdown-item"
                      onClick={() => handleScrollToDisease("als")}
                    >
                      MDD
                    </button>
                  </div>
                )}
              </div>

              {/* NAVIGATION BUTTONS */}
              <button onClick={handleScrollToHero} className="navbar-link">
                Home
              </button>

              <button onClick={() => navigate("/awareness")} className="navbar-link">
                Awareness
              </button>

              <button onClick={() => navigate("/confusion-matrix")} className="navbar-link">
                Confusion Matrix
              </button>

              <button onClick={() => navigate("/feedback")} className="navbar-link">
                Feedback
              </button>

              <button onClick={handleScrollToFooter} className="navbar-link">
                About Us
              </button>

              {/* CLOSE ICON */}
              <img
                src={close}
                alt="Close Menu"
                className="menu-icon close-top white-icon"
                onClick={() => setMenuOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </nav>
);

};

export default Navbar;




















