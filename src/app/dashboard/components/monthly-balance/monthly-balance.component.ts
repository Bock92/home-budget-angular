import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-monthly-balance',
  templateUrl: './monthly-balance.component.html',
  imports: [Card, TableModule],
})
export class MonthlyBalanceComponent {
  months = [
    {
      month: 'Gennaio 2025',
      incoming: 2000,
      expenses: 1000,
      saving: 1000,
    },
    {
      month: 'Febbraio 2025',
      incoming: 2000,
      expenses: 1000,
      saving: 1000,
    },
    {
      month: 'Marzo 2025',
      incoming: 2000,
      expenses: 1000,
      saving: 1000,
    },
  ];

  constructor() {}
}
