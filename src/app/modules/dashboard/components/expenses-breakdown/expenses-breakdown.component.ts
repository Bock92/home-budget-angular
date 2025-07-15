import { Component, computed, inject, OnInit } from '@angular/core';
import { CategoryFacade } from '@facades/category.facade';
import { DashboardFacade } from '@modules/dashboard/facades/dashboard.facade';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-expenses-breakdown',
  templateUrl: './expenses-breakdown.component.html',
  imports: [Card, TableModule],
})
export class ExpensesBreakdownComponent implements OnInit {
  readonly #dashboardFacade = inject(DashboardFacade);
  readonly #categoryFacade = inject(CategoryFacade);

  $tableData = computed(() => {
    const report = this.#dashboardFacade.categoryReport();
    const categoryList = this.#categoryFacade.$categoryList();

    return Object.keys(report).map((keyCategory: string) => {
      const found = categoryList.find(
        (category) => category.value === keyCategory
      );
      return {
        category: found?.label ?? '-',
        total: report[keyCategory],
      };
    });
  });

  ngOnInit(): void {
    this.#dashboardFacade.loadCategoryReport(new Date().toISOString());
  }
}
