import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar";
import "./DiseaseLayout.css";

import Overview from "./bipolar/Overview";
import Causes from "./bipolar/Causes";
import Symptoms from "./bipolar/Symptoms";
import Diagnosis from "./bipolar/Diagnosis";
import Treatment from "./bipolar/Treatment";
import Prevention from "./bipolar/Prevention";
import Statistics from "./bipolar/Statistics";
import Support from "./bipolar/Resources";

const Bipolar = () => {
  return (
    <div className="disease-layout">
      <SideNavbar basePath="bipolar" />
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

export default Bipolar;
