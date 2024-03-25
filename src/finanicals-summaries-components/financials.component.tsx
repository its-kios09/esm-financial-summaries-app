import React from "react";
import { FinancialHeader } from "../finanicals-header/financials-header";
import FinancialMetric from "../financials-metrics/finanical-metrics.component";

const FinancialsComponent: React.FC = () => {
  return (
    <div className={`omrs-main-content`}>
      <FinancialHeader title={"Financials "} />
      <FinancialMetric />
    </div>
  );
};

export default FinancialsComponent;
