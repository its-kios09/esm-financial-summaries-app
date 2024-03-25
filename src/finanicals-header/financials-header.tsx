import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Location } from "@carbon/react/icons";
import { useSession, formatDate } from "@openmrs/esm-framework";
import styles from "./financials-header.scss";
import FinanicalIllustration from "./financials-header-illustration";

interface FinancialHeaderProps {
  title: string;
}

export const FinancialHeader: React.FC<FinancialHeaderProps> = ({ title }) => {
  const { t } = useTranslation();
  const userSession = useSession();
  const userLocation = userSession?.sessionLocation?.display;

  return (
    <div className={styles.header}>
      <div className={styles["left-justified-items"]}>
        <FinanicalIllustration />
        <div className={styles["page-labels"]}>
          <p>{t("Financials", "Financials Summaries")}</p>
          <p className={styles["page-name"]}>{title}</p>
        </div>
      </div>
      <div className={styles["right-justified-items"]}>
        <div className={styles["date-and-location"]}>
          <Location size={16} />
          <span className={styles.value}>{userLocation}</span>
          <span className={styles.middot}>&middot;</span>
          <Calendar size={16} />
          <span className={styles.value}>
            {formatDate(new Date(), { mode: "standard" })}
          </span>
        </div>
      </div>
    </div>
  );
};
