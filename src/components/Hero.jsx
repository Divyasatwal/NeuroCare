// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div  id="hero-section" className="hero">
//       <div className="hero-container">
//         <h1 className="hero-title">Understanding Neurological Diseases</h1>
//         <p className="hero-description">
//           Explore comprehensive information about Alzheimer's, Dementia, Parkinson's, and ALS. 
//           Learn about causes, symptoms, and available resources.
//         </p>
//         <button className="hero-button">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
/*import React from 'react';
import './Hero.css';
// NEW (Correct)
import projectNeuro from "../assets/ProjectNeuro.webp"; // your chosen image

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={projectNeuro} alt="Neural connections" />
      </div>

      <div className="hero-content">
        <h1>Welcome to <span>NeuroCare</span></h1>
        <p>
          Understanding neurological diseases through awareness, insight, and innovation.
          Join us in exploring how the mind and science connect.
        </p>
        <button className="hero-btn">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;*/



// import React from 'react';
// import './Hero.css';

// const Hero = () => {
//   return (
//     <div className="hero" id="hero-section">
//       <div className="hero-overlay"></div>
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1  className="hero-title">Welcome to <span className="hero-highlight">NeuroCare</span></h1>
//            <h2>Awareness Begins With Understanding</h2>
//           <p className="hero-description">
//             Explore clear and meaningful insights into Alzheimer's, Dementia,
//             Parkinson's, and Major Depressive Disorder .<br/>helping you understand the mind
//             with calm, accurate, and accessible information.
//           </p>
//           {/* <button className="hero-btn">Learn More</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



//sPLIT SCREEN 

// import React from 'react';
// import './Hero1.css';

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-overlay"></div>
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1>Welcome to <span className="hero-highlight">NeuroCare</span></h1>
//           <p className="hero-description">
//             Understanding neurological diseases through awareness, insight, and innovation.
//             Join us in exploring how the mind and science connect.
//           </p>
//           <button className="hero-btn">Learn More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




// //animation 
// import React, { useEffect, useRef } from "react";
// import "./Hero1animation.css";


// const Hero = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
    
//     const updateCanvasSize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = canvas.offsetHeight;
//     };
    
//     updateCanvasSize();

//     const neurons = [];
//     const neuronCount = 80; // More neurons for hero
//     const connectionDistance = 150;

//     class Neuron {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.3;
//         this.vy = (Math.random() - 0.5) * 0.3;
//         this.radius = Math.random() * 2 + 1;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = 'rgba(94, 234, 212, 0.6)'; // Teal
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < neuronCount; i++) {
//       neurons.push(new Neuron());
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       neurons.forEach((neuron, i) => {
//         neuron.update();
//         neuron.draw();

//         for (let j = i + 1; j < neurons.length; j++) {
//           const dx = neurons[j].x - neuron.x;
//           const dy = neurons[j].y - neuron.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < connectionDistance) {
//             ctx.beginPath();
//             ctx.moveTo(neuron.x, neuron.y);
//             ctx.lineTo(neurons[j].x, neurons[j].y);
//             ctx.strokeStyle = `rgba(94, 234, 212, ${0.3 * (1 - distance / connectionDistance)})`;
//             ctx.lineWidth = 1;
//             ctx.stroke();
//           }
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       updateCanvasSize();
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <div className="hero" id="hero-section">
//       {/* Animated Neuron Canvas */}
//       <canvas ref={canvasRef} className="hero-canvas" />
      
//       {/* Dark overlay */}
//       <div className="hero-overlay"></div>
      
//       {/* Content */}
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             Welcome to <span className="hero-highlight">NeuroCare</span>
//           </h1>
//           <h2>Awareness Begins With Understanding</h2>
//           <p className="hero-description">
//             Explore clear and meaningful insights into Alzheimer's, Dementia,
//             Parkinson's, and Major Depressive Disorder.<br/>
//             Helping you understand the mind with calm, accurate, and accessible information.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import './Hero1animation.css';
// import heroBg from '../assets/neurology1.jpg'; // Add your background image

const Hero = () => {
  return (
    <div className="hero" id="hero-section">
      {/* Background Image */}
      <div className="hero-bg-image"></div>
      
      {/* Content Box on Left */}
      <div className="hero-container">
        <div className="hero-content-box">
          
          <h1 className="hero-title">
            Welcome to <span className="hero-highlight">NeuroCare</span>
          </h1>
          <h2 className="hero-subtitle">Awareness Begins With Understanding</h2>
          <p className="hero-description">
            Explore clear and meaningful insights into Alzheimer's, Dementia,
            Parkinson's, and Major Depressive Disorder.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn-primary">Get Started</button>
            {/* <button className="hero-btn-secondary">Learn More</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;