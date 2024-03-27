import React from "react";
import { useTranslation } from "react-i18next";
import { DocumentView, EventsAlt, Printer } from "@carbon/react/icons";
import { Button } from "@carbon/react";
import { spaBasePath } from "../../constants";
import styles from "./workload-metrics-header.scss";
import { navigate } from "@openmrs/esm-framework";

const WorkloadMetricsHeader = () => {
  const { t } = useTranslation();
  const metricsTitle = t("", "");
  const financialScreenText = t("financials", "View Financial Summaries");
  const printWorkLoad = t("workload", "Print Workloads");

  const navigateToDepartmentScreen = () => {
    navigate({ to: `${spaBasePath}/financials` });
  };
  const navigateToFinancialScreen = () => {
    navigate({ to: `${spaBasePath}/financials/departments` });
  };
  return (
    <div className={styles.metricsContainer}>
      <span className={styles.metricsTitle}>{metricsTitle}</span>
      <div className={styles.actionBtn}>
        <Button
          kind="tertiary"
          renderIcon={(props) => <DocumentView size={16} {...props} />}
          iconDescription={t("view", "View Departmental summaries")}
          onClick={navigateToFinancialScreen}
        >
          {t("view", "View Departmental summaries")}
        </Button>
        <Button
          kind="tertiary"
          renderIcon={(props) => <EventsAlt size={16} {...props} />}
          iconDescription={financialScreenText}
          onClick={navigateToDepartmentScreen}
        >
          {financialScreenText}
        </Button>
        <Button
          kind="primary"
          renderIcon={(props) => <Printer size={16} {...props} />}
          iconDescription={financialScreenText}
        >
          {printWorkLoad}
        </Button>
      </div>
    </div>
  );
};

export default WorkloadMetricsHeader;
