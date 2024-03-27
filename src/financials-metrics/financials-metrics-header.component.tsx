import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { DocumentView, Filter, EventsAlt } from "@carbon/react/icons";
import { Button, Modal, DatePickerInput, DatePicker } from "@carbon/react";
import { spaBasePath } from "../constants";
import styles from "./financial-metrics-header.scss";
import { navigate } from "@openmrs/esm-framework";

const MetricsHeader = () => {
  const { t } = useTranslation();
  const metricsTitle = t("revenue", "Revenue summaries");
  const workLoadScreenText = t("workload", "View Work Load");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigateToDepartmentalScreen = () => {
    navigate({ to: `${spaBasePath}/financials/departments` });
  };
  return (
    <div className={styles.metricsContainer}>
      <span className={styles.metricsTitle}>{metricsTitle}</span>
      <div className={styles.actionBtn}>
        <Button
          kind="primary"
          renderIcon={(props) => <Filter size={16} {...props} />}
          iconDescription={t("filter", "Filter Revenue Summaries")}
          onClick={() => setIsModalOpen(true)}
        >
          {t("filter", "Filter Revenue Summaries")}
        </Button>
        <Button
          kind="tertiary"
          renderIcon={(props) => <DocumentView size={16} {...props} />}
          iconDescription={t("view", "View Departmental summaries")}
          onClick={navigateToDepartmentalScreen}
        >
          {t("view", "View Departmental summaries")}
        </Button>
        <Button
          kind="tertiary"
          renderIcon={(props) => <EventsAlt size={16} {...props} />}
          iconDescription={workLoadScreenText}
        >
          {workLoadScreenText}
        </Button>
      </div>
      <Modal
        primaryButtonText="Filter Summaries"
        secondaryButtonText="Cancel"
        open={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        modalLabel="Filter Revenue Summaries"
        modalHeading=""
        hasScrollingContent
      >
        <DatePicker datePickerType="range">
          <DatePickerInput
            id="date-picker-input-id-start"
            placeholder="mm/dd/yyyy"
            labelText="From"
            size="md"
            style={{ background: "transparent" }}
          />
          <DatePickerInput
            id="date-picker-input-id-finish"
            placeholder="mm/dd/yyyy"
            labelText="To"
            size="md"
            style={{ background: "transparent" }}
          />
        </DatePicker>
      </Modal>
      <style>
        {`
        .cds--modal-container {
            width: 28%;
          }
      `}
      </style>
    </div>
  );
};

export default MetricsHeader;
