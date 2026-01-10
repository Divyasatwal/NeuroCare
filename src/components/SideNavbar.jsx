/*import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = ({ basePath }) => {
  const sections = [
    { name: "Overview", path: "overview" },
    { name: "Causes", path: "causes" },
    { name: "Symptoms", path: "symptoms" },
    { name: "Diagnosis Methods", path: "diagnosis" },
    { name: "Treatment & Management", path: "treatment" },
    { name: "Prevention / Early Detection", path: "prevention" },
    { name: "Related Statistics", path: "statistics" },
    { name: "Support & Resources", path: "support" },
  ];

  return (
    <div className="side-navbar">
      <h2 className="side-navbar-title">Alzheimer's Disease</h2>
      <ul className="side-navbar-list">
        {sections.map((item) => (
          <li key={item.path}>
            <NavLink
              to={`/${basePath}/${item.path}`}
              className={({ isActive }) =>
                isActive ? "side-link active" : "side-link"
               }
               end
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;*/

// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import "./SideNavbar.css";

// const SideNavbar = ({ basePath }) => {
//   const location = useLocation();
//   // Detect disease from path or prop
//   const diseaseKey = basePath || location.pathname.split("/")[1];

//   const diseaseNames = {
//     alzheimers: "Alzheimer's Disease",
//     dementia: "Dementia",
//     parkinsons: "Parkinson’s Disease",
//     mdd: "MDD",
//     bipolar: "Bipolar Disorder",
//   };

//   const diseaseTitle = diseaseNames[diseaseKey] || "Neuro Disorder";

//   const sections = [
//     { name: "Overview", path: "overview" },
//     { name: "Causes", path: "causes" },
//     { name: "Symptoms", path: "symptoms" },
//     { name: "Diagnosis Methods", path: "diagnosis" },
//     { name: "Treatment & Management", path: "treatment" },
//     { name: "Prevention / Early Detection", path: "prevention" },
//     { name: "Related Statistics", path: "statistics" },
//     { name: "Support & Resources", path: "support" },
//   ];

//   return (
//     <div className="side-navbar">
//       <h2 className="side-navbar-title">{diseaseTitle}</h2>
//       <ul className="side-navbar-list">
//         {sections.map((item) => (
//           <li key={item.path}>
//             <NavLink
//               to={`/${diseaseKey}/${item.path}`}
//               className={({ isActive }) =>
//                 isActive ? "side-link active" : "side-link"
//               }
//               end
//             >
//               {item.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SideNavbar;



import React, { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./SideNavbar.css";

const SideNavbar = ({ basePath }) => {
  const canvasRef = useRef(null);
  const location = useLocation();
  
  // Detect disease from path or prop
  const diseaseKey = basePath || location.pathname.split("/")[1];

  const diseaseNames = {
    alzheimers: "Alzheimer's Disease",
    dementia: "Dementia",
    parkinsons: "Parkinson's Disease",
    mdd: "MDD",
    bipolar: "Bipolar Disorder",
  };

  const diseaseTitle = diseaseNames[diseaseKey] || "Neuro Disorder";

  const sections = [
    { name: "Overview", path: "overview" },
    { name: "Causes", path: "causes" },
    { name: "Symptoms", path: "symptoms" },
    { name: "Diagnosis Methods", path: "diagnosis" },
    { name: "Treatment & Management", path: "treatment" },
    { name: "Prevention / Early Detection", path: "prevention" },
    { name: "Related Statistics", path: "statistics" },
    { name: "Support & Resources", path: "support" },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    updateCanvasSize();

    const neurons = [];
    const neuronCount = 40; // Fewer neurons for sidebar
    const connectionDistance = 120;

    class Neuron {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(139, 233, 253, 0.6)';
        ctx.fill();
      }
    }

    for (let i = 0; i < neuronCount; i++) {
      neurons.push(new Neuron());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      neurons.forEach((neuron, i) => {
        neuron.update();
        neuron.draw();

        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[j].x - neuron.x;
          const dy = neurons[j].y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(139, 233, 253, ${0.3 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      updateCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="side-navbar">
      {/* Animated Neuron Background Canvas */}
      <canvas ref={canvasRef} className="sidebar-canvas" />
      
      {/* Sidebar Content */}
      <div className="sidebar-content">
        <h2 className="side-navbar-title">{diseaseTitle}</h2>
        <ul className="side-navbar-list">
          {sections.map((item) => (
            <li key={item.path}>
              <NavLink
                to={`/${diseaseKey}/${item.path}`}
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
                end
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;