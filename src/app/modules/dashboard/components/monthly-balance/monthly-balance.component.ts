import { Component, computed, inject, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { ExpenseTypesStore } from '@store/expense-type/expense-type.store';
import { DashboardStore } from '@modules/dashboard/store/dashboard/dashboard.store';

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  imports: [Card, TableModule, KeyValuePipe, DatePipe],
})
export class MonthlyBalanceComponent implements OnInit {
  readonly #dashboardStore = inject(DashboardStore);
  readonly #expenseTypeStore = inject(ExpenseTypesStore);
  $report = this.#dashboardStore.monthlyReport;
  $expenseTypesList = this.#expenseTypeStore.$expenseTypesList;
  $tableData = computed(() => {
    return [];
  });

  ngOnInit(): void {
    this.#dashboardStore.loadMonthlyReport(new Date().toISOString());
  }

  constructor() {}
}
