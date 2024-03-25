import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "@carbon/react/icons";
import styles from "./financial-metrics-header.scss";
import { Button, DatePicker, DatePickerInput } from "@carbon/react";
import { ConfigurableLink } from "@openmrs/esm-framework";

const MetricsHeader = () => {
  const { t } = useTranslation();
  const metricsTitle = t("revenue", "Revenue Summaries");

  return (
    <div className={styles.metricsContainer}>
      <span className={styles.metricsTitle}>{metricsTitle}</span>
      <div className={styles.actionBtn}>
        <ConfigurableLink
          className={styles.link}
          to={`\${openmrsSpaBase}/departments`}
        >
          <Button
            kind="tertiary"
            renderIcon={(props) => <ArrowRight size={16} {...props} />}
            iconDescription={t("view", "")}
          >
            {t("view", "View departmental summaries")}
          </Button>
        </ConfigurableLink>
      </div>
    </div>
  );
};

export default MetricsHeader;
