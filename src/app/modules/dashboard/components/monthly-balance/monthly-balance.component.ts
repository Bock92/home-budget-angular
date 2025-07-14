import { Component, computed, inject, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DatePipe, KeyValuePipe } from '@angular/common';
import { DashboardFacade } from '@modules/dashboard/facades/dashboard.facade';
import { ExpenseTypeFacade } from '@facades/expense-type.facade';

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  imports: [Card, TableModule, KeyValuePipe, DatePipe],
})
export class MonthlyBalanceComponent implements OnInit {
  readonly #dashboardFacade = inject(DashboardFacade);
  readonly #expenseTypeFacade = inject(ExpenseTypeFacade);
  $report = this.#dashboardFacade.monthlyReport;
  $expenseTypesList = this.#expenseTypeFacade.$expenseTypesList;
  $tableData = computed(() => {
    return [];
  });

  ngOnInit(): void {
    this.#dashboardFacade.loadMonthlyReport(new Date().toISOString());
  }

  constructor() {}
}
