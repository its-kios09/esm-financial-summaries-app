import React from "react";
import { Events } from "@carbon/react/icons";
import styles from "./workload-header.scss";

const WorkloadIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <Events className={styles.iconOverrides} />
    </div>
  );
};

export default WorkloadIllustration;
