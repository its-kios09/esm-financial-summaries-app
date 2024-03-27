import React from "react";
import { GiPayMoney } from "react-icons/gi";
import styles from "./financials-header.scss";

const FinanicalIllustration: React.FC = () => {
  return (
    <div className={styles.svgContainer}>
      <GiPayMoney className={styles.iconOverrides} />
    </div>
  );
};

export default FinanicalIllustration;
