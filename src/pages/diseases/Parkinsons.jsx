/*import React from 'react';
import '../PageStyles.css';

const Parkinsons = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Parkinson's Disease</h1>
        <p className="page-text">Detailed information coming soon...</p>
      </div>
    </div>
  );
};

export default Parkinsons;*/

/*import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import "./DiseaseLayout.css";

import Overview from "./parkinsons/Overview";
import Causes from "./parkinsons/Causes";
import Symptoms from "./parkinsons/Symptoms";
import Diagnosis from "./parkinsons/Diagnosis";
import Treatment from "./parkinsons/Treatment";
import Prevention from "./parkinsons/Prevention";
import Statistics from "./parkinsons/Statistics";
import Resources from "./parkinsons/Resources";

const Parkinsons = () => {
  return (
    <div className="disease-layout">
      <SideNavbar basePath="parkinsons" />

      <div className="disease-content">
        <Routes>
          <Route index element={<Navigate to="overview" replace />} />

          <Route path="overview" element={<Overview />} />
          <Route path="causes" element={<Causes />} />
          <Route path="symptoms" element={<Symptoms />} />
          <Route path="diagnosis" element={<Diagnosis />} />
          <Route path="treatment" element={<Treatment />} />
          <Route path="prevention" element={<Prevention />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="support" element={<Resources />} />
        </Routes>
      </div>
    </div>
  );
};

export default Parkinsons;*/

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import "./DiseaseLayout.css";

import Overview from "./parkinsons/Overview";
import Causes from "./parkinsons/Causes";
import Symptoms from "./parkinsons/Symptoms";
import Diagnosis from "./parkinsons/Diagnosis";
import Treatment from "./parkinsons/Treatment";
import Prevention from "./parkinsons/Prevention";
import Statistics from "./parkinsons/Statistics";
import Resources from "./parkinsons/Resources";

const Parkinsons = () => {
  return (
    <div className="disease-layout">
      <SideNavbar basePath="parkinsons" />
      <div className="disease-content">
        <Routes>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="causes" element={<Causes />} />
          <Route path="symptoms" element={<Symptoms />} />
          <Route path="diagnosis" element={<Diagnosis />} />
          <Route path="treatment" element={<Treatment />} />
          <Route path="prevention" element={<Prevention />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="support" element={<Resources />} />  {/* fixed name */}
        </Routes>
      </div>
    </div>
  );
};

export default Parkinsons;

