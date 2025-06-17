import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  imports: [Card, ChipModule, Button],
})
export class ExpensesListComponent {
  expenses = [
    { title: 'Groceries', amount: 150, date: '2023-10-26', category: 'Food' },
    { title: 'Gas', amount: 50, date: '2023-10-25', category: 'Food' },
    { title: 'Dinner', amount: 75, date: '2023-10-24', category: 'Food' },
    { title: 'Groceries', amount: 150, date: '2023-10-26', category: 'Food' },
    { title: 'Gas', amount: 50, date: '2023-10-25', category: 'Food' },
    { title: 'Dinner', amount: 75, date: '2023-10-24', category: 'Food' },
    { title: 'Groceries', amount: 150, date: '2023-10-26', category: 'Food' },
    { title: 'Gas', amount: 50, date: '2023-10-25', category: 'Food' },
    { title: 'Dinner', amount: 75, date: '2023-10-24', category: 'Food' },
  ];
}
