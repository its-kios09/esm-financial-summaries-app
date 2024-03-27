import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinancialsComponent from "./finanicals-summaries-components/financials.component";
import DepartmentalScreen from "./financials-department/financials-department";
import WorkLoadScreen from "./financials-workload/financials-workload.component";

const Root: React.FC = () => {
  const baseName = window.getOpenmrsSpaBase() + "home/financials";

  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<FinancialsComponent />} />
        <Route path="/departments" element={<DepartmentalScreen />} />
        <Route path="/workload" element={<WorkLoadScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
