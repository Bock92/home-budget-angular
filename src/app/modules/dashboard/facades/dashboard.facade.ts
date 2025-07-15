import { inject, Injectable, Signal } from '@angular/core';
import { DashboardStore } from '../store/dashboard/dashboard.store';
import { OmitSymbols } from '@core/utils/omit-symbols';
import {
  CategoryReport,
  MonthlyReport,
} from '../store/dashboard/dashboard.state';

@Injectable({ providedIn: 'root' })
export class DashboardFacade implements OmitSymbols<DashboardStore> {
  readonly #dashboardStore = inject(DashboardStore);

  monthlyReport: Signal<MonthlyReport> = this.#dashboardStore.monthlyReport;
  categoryReport: Signal<CategoryReport> = this.#dashboardStore.categoryReport;

  loadMonthlyReport(date: string): Promise<void> {
    return this.#dashboardStore.loadMonthlyReport(date);
  }

  loadCategoryReport(date: string): Promise<void> {
    return this.#dashboardStore.loadCategoryReport(date);
  }
}
