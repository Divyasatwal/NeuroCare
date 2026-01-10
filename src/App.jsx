/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/

/*import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Awareness from './pages/Awareness';
import ConfusionMatrix from './pages/ConfusionMatrix';
import Feedback from './pages/Feedback';
import Alzheimers from './pages/diseases/Alzheimers';
import Dementia from './pages/diseases/Dementia';
import Parkinsons from './pages/diseases/Parkinsons';
import ALS from './pages/diseases/ALS';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleScrollToDisease = (diseaseId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(`disease-${diseaseId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      const element = document.getElementById(`disease-${diseaseId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

   const handleScrollToFooter = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const footer = document.querySelector('.footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const footer = document.querySelector('.footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Homepage onNavigate={setCurrentPage} />;
      case 'awareness':
        return <Awareness />;
      case 'confusion-matrix':
        return <ConfusionMatrix />;
      case 'feedback':
        return <Feedback />;
      case 'alzheimers':
        return <Alzheimers />;
      case 'dementia':
        return <Dementia />;
      case 'parkinsons':
        return <Parkinsons />;
      case 'als':
        return <ALS />;
      default:
        return <Homepage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Navbar 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onScrollToDisease={handleScrollToDisease}
        onScrollToFooter={handleScrollToFooter} // NEW: Pass scroll to footer function
      />
      {renderPage()}
    </div>
  );
};

// export default App;*/

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Homepage from "./pages/Homepage";
// import Awareness from "./pages/Awareness";
// import ConfusionMatrix from "./pages/ConfusionMatrix";
// import Feedback from "./pages/Feedback";
// import Alzheimers from "./pages/diseases/Alzheimers";
// import Dementia from "./pages/diseases/Dementia";
// import Parkinsons from "./pages/diseases/Parkinsons";
// import MDD from "./pages/diseases/MDD";
// import Bipolar from "./pages/diseases/Bipolar";

// // SCROLL HELPERS-Handles scrolling on homepage only
// // ---------------------------
// const scrollToDisease = (diseaseId) => {
//   const element = document.getElementById(`disease-${diseaseId}`);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth", block: "center" });
//   }
// };

// const scrollToFooter = () => {
//   const footer = document.querySelector(".footer");
//   if (footer) {
//     footer.scrollIntoView({ behavior: "smooth", block: "start" });
//   }
// };

// // LAYOUT WRAPPERis responsible for navigation + structure (which page shows).
// // Navbar only on main website pages
// const LayoutWithNavbar = ({ children }) => {
//   // const location = useLocation();

//   return (
//     <>
//       <Navbar
//         onScrollToDisease={scrollToDisease}
//         onScrollToFooter={scrollToFooter}
//       />
//       {children}
//     </>
//   );
// };



// const App = () => {
  
//   return (
//     <Router>
//       <Routes>
//         {/* Main Website Pages (With Top Navbar) */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <Homepage />
//             </>
//           }
//         />
//         <Route
//           path="/awareness"
//           element={
//             <>
//               <Navbar />
//               <Awareness />
//             </>
//           }
//         />
//         <Route
//           path="/confusion-matrix"
//           element={
//             <>
//               <Navbar />
//               <ConfusionMatrix />
//             </>
//           }
//         />
//         <Route
//           path="/feedback"
//           element={
//             <>
//               <Navbar />
//               <Feedback />
//             </>
//           }
//         />

//         {/* Disease Detail Pages (No Top Navbar) */}
//         <Route path="/alzheimers/*" element={<Alzheimers />} />
//         <Route path="/dementia/*" element={<Dementia />} />
//         <Route path="/parkinsons/*" element={<Parkinsons />} />
//         <Route path="/mdd/*" element={<MDD />} />
//         <Route path="/bipolar/*" element={<Bipolar />} />


//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Awareness from "./pages/Awareness";
import ConfusionMatrix from "./pages/ConfusionMatrix";
import Feedback from "./pages/Feedback";

import BrainInfo from './pages/BrainInfo';
import WarningSigns from './pages/WarningSigns';
import Prevention from './pages/Prevention';
import SupportCare from './pages/SupportCare';

// Disease Pages (Full screen pages)
import Alzheimers from "./pages/diseases/Alzheimers";
import Dementia from "./pages/diseases/Dementia";
import Parkinsons from "./pages/diseases/Parkinsons";
import MDD from "./pages/diseases/MDD";
import Bipolar from "./pages/diseases/Bipolar";

function AppWrapper() {
  const location = useLocation();

  //  Hide Navbar when user is in any disease detail page
  const hideNavbar =
    location.pathname.startsWith("/alzheimers") ||
    location.pathname.startsWith("/dementia") ||
    location.pathname.startsWith("/parkinsons") ||
    location.pathname.startsWith("/mdd") ||
    location.pathname.startsWith("/bipolar");

  // ✔Scroll to top when user changes page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  //  Add layout spacing **only when navbar is visible**
 // Pages that need top margin when navbar is visible
const pagesNeedingMargin = ["/awareness", "/confusion-matrix", "/feedback"];

// Apply margin ONLY when:
// 1. Navbar is visible AND
// 2. Current path is one of the above pages
const shouldApplyMargin =
  !hideNavbar && pagesNeedingMargin.includes(location.pathname);

const pageStyle = shouldApplyMargin ? { marginTop: "80px" } : {};

  return (
    <div style={pageStyle}>
      {/* Only show navbar on homepage/normal pages */}
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Normal Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/confusion-matrix" element={<ConfusionMatrix />} />
        <Route path="/feedback" element={<Feedback />} />

        {/* Disease Pages (Full screen, no navbar) */}
        <Route path="/alzheimers/*" element={<Alzheimers />} />
        <Route path="/dementia/*" element={<Dementia />} />
        <Route path="/parkinsons/*" element={<Parkinsons />} />
        <Route path="/mdd/*" element={<MDD />} />
        <Route path="/bipolar/*" element={<Bipolar />} />
     
         <Route path="/brain-info" element={<BrainInfo />} />
        <Route path="/warning-signs" element={<WarningSigns />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/support-care" element={<SupportCare />} />
     
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
