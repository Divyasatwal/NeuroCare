/*import React from 'react';
import '../PageStyles.css';

const Alzheimers = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Alzheimer's Disease</h1>
        <p className="page-text">Detailed information coming soon...</p>
      </div>
    </div>
  );
};

export default Alzheimers;*/

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import "./DiseaseLayout.css";

import Overview from "./alzheimers/Overview";
import Causes from "./alzheimers/Causes";
import Symptoms from "./alzheimers/Symptoms";
import Diagnosis from "./alzheimers/Diagnosis";
import Treatment from "./alzheimers/Treatment";
import Prevention from "./alzheimers/Prevention";
import Statistics from "./alzheimers/Statistics";
import Support from "./alzheimers/Resources";

const Alzheimers = () => {
  return (
    <div className="disease-layout">
      <SideNavbar basePath="alzheimers" />
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
           <Route path="support" element={<Support />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default Alzheimers;
