import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Tab, TabList, Tabs, TabPanel, TabPanels } from "@carbon/react";
import styles from "./departments-tabs.scss";

const DepartmentTabs: React.FC = () => {
  const { t } = useTranslation();
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabChange = ({ selectedIndex }: { selectedIndex: number }) => {
    setActiveTabIndex(selectedIndex);
  };

  return (
    <div className={styles.appointmentList} data-testid="department-list">
      <Tabs
        selectedIndex={activeTabIndex}
        onChange={handleTabChange}
        className={styles.tabs}
      >
        <TabList
          style={{ paddingLeft: "1rem" }}
          aria-label="Department tabs"
          contained
        >
          <Tab className={styles.tab}>
            {t("registration", "Registration Summaries")}
          </Tab>
          <Tab className={styles.tab}>
            {t("Pharmacy", "Pharmacy Summaries")}
          </Tab>
          <Tab className={styles.tab}>
            {t("Laboratory", "Laboratory Summaries")}
          </Tab>
          <Tab className={styles.tab}>
            {t("Radiology", "Radiology Summaries")}
          </Tab>
          <Tab className={styles.tab}>
            {t("Procedures", "Procedures Summaries")}
          </Tab>
          <Tab className={styles.tab}>
            {t("Special", "Clinics Special Summaries")}
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.tabPanel}></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default DepartmentTabs;
