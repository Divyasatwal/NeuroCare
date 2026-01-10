// // import React from 'react';
// import './AwarenessSection.css';
// import React from 'react';
// // import './AwarenessBanner.css';
// import awarenessImg from '../assets/alzheimerAwareness1.jpg'; // Add your image

// const AwarenessBanner = ({ onNavigate }) => {
//   return (
//     <section className="awareness-banner">
//       <div className="awareness-container">
//         {/* Image Side */}
//         <div className="awareness-image-wrapper">
//           <div className="awareness-image-frame">
//             <img src={awarenessImg} alt="Brain Health Awareness" className="awareness-img" />
//           </div>
//         </div>

//         {/* Content Side */}
//         <div className="awareness-content">
//           {/* <span className="awareness-badge">🧠 Brain Health</span> */}
//           <h2 className="awareness-title">
//             Awareness Starts <span className="awareness-highlight">With You</span>
//           </h2>
//           <p className="awareness-description">
//             Early detection saves lives. Learn the signs, support your loved ones, 
//             and join a community dedicated to brain health awareness.
//           </p>
          
//           <ul className="awareness-list">
//             <li>🔍 Recognize Early Signs</li>
//             <li>🤝 Support Loved Ones</li>
//             <li>📚 Stay Informed</li>
//           </ul>

//           <button 
//             className="awareness-btn"
//             onClick={() => onNavigate('awareness')}
//           >
//             Explore Resources
//             <span className="btn-arrow">→</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwarenessBanner;



import React from 'react';
import './AwarenessSection.css';

import awarenessImg1 from '../assets/alzheimerAwareness1.jpg'; // Add your image
import awarenessImg2 from '../assets/alzheimerAwareness2.jpg'; // Add your image

const AwarenessBanner = ({ onNavigate }) => {
  return (
    <section className="awareness-banner">
      <div className="awareness-container">
       {/* image side */}
        <div className="awareness-images">
        
          <div className="shape shape-circle-1"></div>
          <div className="shape shape-circle-2"></div>
          <div className="shape shape-dots"></div>
          
        
          <div className="img-frame img-frame-1">
            <img src={awarenessImg1} alt="Brain Health" />
          </div>
          
          
          <div className="img-frame img-frame-2">
            <img src={awarenessImg2} alt="Support Care" />
          </div>
        </div>

        {/* Content Side */}
        <div className="awareness-content">
        
          <h2 className="awareness-title">
            Awareness Starts With <span className="awareness-highlight"> You</span>
          </h2>
          <p className="awareness-description">
            Early detection saves lives. Learn the signs, support your loved ones, 
            and join a community dedicated to brain health awareness.
          </p>
          
          <ul className="awareness-list">
            <li>🔍 Recognize Early Signs</li>
            <li>🤝 Support Loved Ones</li>
            <li>📚 Stay Informed</li>
          </ul>

          <button 
            className="awareness-btn"
            onClick={() => onNavigate('awareness')}
          >
            Explore Resources
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwarenessBanner;