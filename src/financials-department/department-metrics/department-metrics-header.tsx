import React from "react";
import { useTranslation } from "react-i18next";
import { DocumentView, EventsAlt } from "@carbon/react/icons";
import { Button } from "@carbon/react";
import { spaBasePath } from "../../constants";
import styles from "./department-metrics-header.scss";
import { navigate } from "@openmrs/esm-framework";

const DepartmentMetricsHeader = () => {
  const { t } = useTranslation();
  const metricsTitle = t("", "");
  const workLoadScreenText = t("workload", "View Work Load");

  const navigateToDepartmentScreen = () => {
    navigate({ to: `${spaBasePath}/financials` });
  };
  const navigateToWorkloadScreen = () => {
    navigate({ to: `${spaBasePath}/financials/workload` });
  };
  return (
    <div className={styles.metricsContainer}>
      <span className={styles.metricsTitle}>{metricsTitle}</span>
      <div className={styles.actionBtn}>
        <Button
          kind="primary"
          renderIcon={(props) => <DocumentView size={16} {...props} />}
          iconDescription={t("view", "View Departmental summaries")}
          onClick={navigateToDepartmentScreen}
        >
          {t("view", "View Financial Summaries")}
        </Button>
        <Button
          kind="tertiary"
          renderIcon={(props) => <EventsAlt size={16} {...props} />}
          iconDescription={workLoadScreenText}
          onClick={navigateToWorkloadScreen}
        >
          {workLoadScreenText}
        </Button>
      </div>
    </div>
  );
};

export default DepartmentMetricsHeader;
