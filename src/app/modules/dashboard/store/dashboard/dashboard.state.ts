export type MonthlyReport = {
  [date: string]: {
    [documentId: string]: number;
  };
};

export type CategoryReport = {
  [documentId: string]: number;
};

export type DashboardState = {
  monthlyReport: MonthlyReport;
  categoryReport: CategoryReport;
};

export const initialDashboardState: DashboardState = {
  monthlyReport: {},
  categoryReport: {},
};
