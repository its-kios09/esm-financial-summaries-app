import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FinancialsComponent from "./finanicals-summaries-components/financials.component";

const Root: React.FC = () => {
  const baseName = window.getOpenmrsSpaBase() + "home/financials";

  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/" element={<FinancialsComponent />} />
        <Route path="/departments" element={<FinancialsComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
