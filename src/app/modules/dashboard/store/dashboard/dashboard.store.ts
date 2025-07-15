import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialDashboardState } from './dashboard.state';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TransactionService } from '@services/transaction.service';

export const DashboardStore = signalStore(
  { providedIn: 'root' },
  withState(initialDashboardState),
  withMethods((store, transactionService = inject(TransactionService)) => {
    const loadMonthlyReport = async (date: string) => {
      const result = await lastValueFrom(
        transactionService.getMonthlyReport(date)
      );
      if (result.data) {
        patchState(store, { monthlyReport: result.data });
      }
    };

    const loadCategoryReport = async (date: string) => {
      const result = await lastValueFrom(
        transactionService.getReportByCategory(date)
      );

      if (result.data) {
        patchState(store, { categoryReport: result.data });
      }
    };

    return {
      loadMonthlyReport,
      loadCategoryReport,
    };
  })
);

export type DashboardStore = InstanceType<typeof DashboardStore>;
