export type MonthlyReport = {
  [date: string]: {
    [documentId: string]: number;
  };
};

export type DashboardState = {
  monthlyReport: MonthlyReport;
};

export const initialDashboardState: DashboardState = {
  monthlyReport: {},
};
