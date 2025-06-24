import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesDoughnutChartComponent } from './components/expenses-doughnut-chart/expenses-doughnut-chart.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { Button } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { take } from 'rxjs';
import { TransactionDialogComponent } from './components/transaction-dialog/transaction-dialog.component';

interface Expense {
  dateRange: string;
  category: string;
  amount: number;
  // You can add more properties like description, id, etc.
}

@Component({
  selector: 'app-expensive-page',
  standalone: true,
  imports: [
    CommonModule,
    ExpensesDoughnutChartComponent,
    ExpensesListComponent,
    ExpensesListComponent,
    Button,
  ],
  providers: [DialogService],
  templateUrl: './expensive-page.component.html',
})
export class ExpensivePageComponent {
  readonly #dialogService = inject(DialogService);
  expenses: Expense[] = [];

  constructor() {
    // Sample data for the table
  }

  openTransactionDialog() {
    const ref = this.#dialogService.open(TransactionDialogComponent, {
      header: 'Add Transaction',
      closable: true,
    });

    ref.onClose.pipe(take(1)).subscribe();
  }
}
