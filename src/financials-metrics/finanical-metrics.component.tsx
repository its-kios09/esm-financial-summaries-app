import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./finanical-metrics.scss";
import MetricsHeader from "./financials-metrics-header.component";
import MetricsCard from "./financial-card.component";

export interface Service {
  uuid: string;
  display: string;
}

function FinancialMetric() {
  const { t } = useTranslation();

  return (
    <>
      <MetricsHeader />
      <div className={styles.cardContainer} data-testid="clinic-metrics">
        <MetricsCard
          label={t("registration", "Total revenue collected")}
          value={"0"}
          headerLabel={t("registration", "Registration")}
        />
        <MetricsCard
          label={t("pharmacy", "Total revenue collected")}
          value={"0"}
          headerLabel={t("pharmacy", "Pharmacy")}
        />

        <MetricsCard
          label={t("laboratory", "Total revenue collected")}
          value={"0"}
          headerLabel={t("laboratory", "Laboratory")}
        />
      </div>
      <div className={styles.cardContainer} data-testid="clinic-metrics">
        <MetricsCard
          label={t("radiology", "Total revenue collected")}
          value={"0"}
          headerLabel={t("radiology", "Radiology")}
        />
        <MetricsCard
          label={t("procedure", "Total revenue collected")}
          value={"0"}
          headerLabel={t("procedure", "Procedure")}
        />
        <MetricsCard
          label={t("special", "Total revenue collected")}
          value={"0"}
          headerLabel={`${t("special", "Special Clinics")}`}
        />
      </div>
    </>
  );
}

export default FinancialMetric;
