/*import React from 'react';
import '../PageStyles.css';

const Dementia = () => {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">Dementia</h1>
        <p className="page-text">Detailed information coming soon...</p>
      </div>
    </div>
  );
};

export default Dementia;*/

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import "./DiseaseLayout.css";

import Overview from "./dementia/Overview";
import Causes from "./dementia/Causes";
import Symptoms from "./dementia/Symptoms";
import Diagnosis from "./dementia/Diagnosis";
import Treatment from "./dementia/Treatment";
import Prevention from "./dementia/Prevention";
import Statistics from "./dementia/Statistics";
import Support from "./dementia/Resources";

const Dementia = () => {
  return (
    <div className="disease-layout">
      <SideNavbar basePath="dementia" />
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

export default Dementia;
