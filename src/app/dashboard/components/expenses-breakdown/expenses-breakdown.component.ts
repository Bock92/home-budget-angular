import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-expenses-breakdown',
  templateUrl: './expenses-breakdown.component.html',
  imports: [Card, TableModule],
})
export class ExpensesBreakdownComponent {
  expenses = [
    {
      category: 'House',
      total: 32143,
    },
    {
      category: 'Insurance',
      total: 45293,
    },
    {
      category: 'Bill',
      total: 20000,
    },
  ];

  constructor() {}
}
