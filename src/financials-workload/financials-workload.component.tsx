import React from "react";
import { useTranslation } from "react-i18next";
import { WorkLoadHeader } from "./workload-header/workload-header";
import WorkloadMetricsHeader from "./workload-metrics/workload-metrics-header";
import { WorkLoadTable } from "./workload-table/workload-tables";

const WorkLoadScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <WorkLoadHeader title={t("workload", "WorkLoad")} />
      <WorkloadMetricsHeader />
      <WorkLoadTable />
    </>
  );
};

export default WorkLoadScreen;
