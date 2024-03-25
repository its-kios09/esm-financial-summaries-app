import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import styles from "./financials-header.scss";

const FinanicalIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <GiReceiveMoney className={styles.iconOverrides} />
    </div>
  );
};

export default FinanicalIllustration;
