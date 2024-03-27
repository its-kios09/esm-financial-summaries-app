import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, Location } from "@carbon/react/icons";
import { useSession, formatDate } from "@openmrs/esm-framework";
import styles from "./workload-header.scss";
import WorkloadIllustration from "./workload-illustration";

interface WorkLoadHeaderProps {
  title: string;
}

export const WorkLoadHeader: React.FC<WorkLoadHeaderProps> = ({ title }) => {
  const { t } = useTranslation();
  const userSession = useSession();
  const userLocation = userSession?.sessionLocation?.display;

  return (
    <div className={styles.header}>
      <div className={styles["left-justified-items"]}>
        <WorkloadIllustration />
        <div className={styles["page-labels"]}>
          <p>{t("workload", "Workload Summaries")}</p>
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
