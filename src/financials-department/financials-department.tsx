import React from "react";
import { useTranslation } from "react-i18next";
import { DepartmentHeader } from "./department-header/department-header";
import DepartmentTabs from "./department-tabs/departments-tabs";
import DepartmentMetricsHeader from "./department-metrics/department-metrics-header";

const DepartmentalScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <DepartmentHeader title={t("department", "Departmental Summaries")} />
      <DepartmentMetricsHeader />
      <DepartmentTabs />
    </>
  );
};

export default DepartmentalScreen;
