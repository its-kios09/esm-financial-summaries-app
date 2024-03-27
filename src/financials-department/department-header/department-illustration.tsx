import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import styles from "./department-header.scss";

const DepartmentIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <GiReceiveMoney className={styles.iconOverrides} />
    </div>
  );
};

export default DepartmentIllustration;
