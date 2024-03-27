import {
  getAsyncLifecycle,
  defineConfigSchema,
  getSyncLifecycle,
  registerBreadcrumbs,
} from "@openmrs/esm-framework";
import { configSchema } from "./config-schema";
import { createLeftPanelLink } from "./financials-left-panel/financials-left-panel.component";
const moduleName = "@kenyaemr/esm-finanical-summaries-app";

const options = {
  featureName: "kenyaemr/esm-finanical-summaries-app",
  moduleName,
};

export const importTranslation = require.context(
  "../translations",
  false,
  /.json$/,
  "lazy"
);

export function startupApp() {
  const financialsBasepath = `${window.spaBase}/home/financials`;

  defineConfigSchema(moduleName, configSchema);
  registerBreadcrumbs([
    {
      title: "financials",
      path: financialsBasepath,
      parent: `${window.spaBase}/home`,
    },
  ]);
}

export const root = getAsyncLifecycle(
  () => import("./root.component"),
  options
);

export const financialsDashboardLink = getSyncLifecycle(
  createLeftPanelLink({
    name: "financials",
    title: "Financials Summaries",
  }),
  options
);
export const summaryDashboardLink = getSyncLifecycle(
  createLeftPanelLink({
    name: "summeries",
    title: "NHIF Summaries",
  }),
  options
);
