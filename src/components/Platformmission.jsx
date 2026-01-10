// import React from 'react';
// import './Platformmission.css';

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="about-container">
//         <div className="about-content">
//           {/* Left side - Text content */}
//           <div className="about-text">
//             <div className="about-badge">Our Mission</div>
//             <h2 className="about-title">
//               Empowering Understanding Through <span className="about-highlight">Knowledge</span>
//             </h2>
//             <p className="about-description">
//               NeuroCare is your trusted companion in understanding neurological health. 
//               We break down complex medical information into clear, accessible insights 
//               that help you make informed decisions about brain health.
//             </p>
            
//             <div className="about-features">
//               <div className="feature-item">
//                 <div className="feature-icon">📚</div>
//                 <div className="feature-content">
//                   <h3>Evidence-Based Information</h3>
//                   <p>Reliable content backed by medical research and expert sources</p>
//                 </div>
//               </div>
              
//               <div className="feature-item">
//                 <div className="feature-icon">🧠</div>
//                 <div className="feature-content">
//                   <h3>Easy to Understand</h3>
//                   <p>Complex conditions explained in simple, everyday language</p>
//                 </div>
//               </div>
              
//               <div className="feature-item">
//                 <div className="feature-icon">❤️</div>
//                 <div className="feature-content">
//                   <h3>Support & Awareness</h3>
//                   <p>Resources for patients, families, and caregivers</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Visual element */}
//           <div className="about-visual">
//             <div className="about-card">
//               <div className="card-icon">🎯</div>
//               <h3>Who We Serve</h3>
//               <ul className="served-list">
//                 <li>Individuals seeking information</li>
//                 <li>Family members of patients</li>
//                 <li>Caregivers and support networks</li>
//                 <li>Anyone interested in brain health</li>
//               </ul>
//             </div>
            
//             <div className="about-stats">
//               <div className="stat-box">
//                 <span className="stat-number">4</span>
//                 <span className="stat-label">Major Conditions</span>
//               </div>
//               <div className="stat-box">
//                 <span className="stat-number">100%</span>
//                 <span className="stat-label">Free Access</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



// // 2nd one
//  import React from "react";
import "./Platformmission.css";
// import"./platform.css"


import Understand from '../assets/EasyUnderstand.svg';
import Care from "../assets/care.png"
import Updated from "../assets/stayupdated.png"
import Evidence from "../assets/Evidencebased.png"

const PlatformSection = () => {
  const cards = [
    {
icon:Understand,
      title: "Easy to Understand",
      desc: "Understand complex neurological conditions easily and stay informed."
    },
    {
//  Support & Awareness ❤️
// Text: Resources for patients, families, and caregivers.
      icon:Updated,
      title: "Stay Updated",
      desc: "Explore the latest research, statistics, and awareness charts.",
    },
    {
      icon: Evidence,
      title: " Evidence-Based Information",
      desc: "  Reliable content backed by medical research and expert sources.",
    },
    {
      icon: Care,
      title: "Prevent & Care",
    //   Practical tips to maintain mental and neurological well-being.
      desc: "Learn tips for mental and neurological health to prevent and manage conditions.",
    },
  ];

  return (
   
    <section className="platform-section">
      <div className="container">
        <h2>About NeuroCare</h2>
        <p className="subtitle">
          Empowering you with knowledge about brain health and neurological disorders.
        </p>

        <div className="platform-cards">
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="icon">  <img src={card.icon} alt={card.title} className="icon-image" /></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="cta">
          <a href="#diseases" className="btn">Explore Diseases</a>
        </div> */}
      </div>
    </section>
   
  );
};

export default PlatformSection;



