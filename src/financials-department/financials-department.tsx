import React from "react";
import { useTranslation } from "react-i18next";
import { DepartmentHeader } from "./header/department-header";
import DepartmentTabs from "./financials-department-tabs/departments-tabs";

const DepartmentalScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <DepartmentHeader title={t("department", "Departmental Summaries")} />
      <DepartmentTabs />
    </>
  );
};

export default DepartmentalScreen;
