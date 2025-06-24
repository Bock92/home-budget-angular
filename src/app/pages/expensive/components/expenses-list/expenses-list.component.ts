import { Component, inject, OnInit, Signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TransactionStore } from '../../../../store/transaction/transaction.store';
import { Transaction } from '../../../../store/transaction/transaction.state';
import { CurrencyPipe, DatePipe } from '@angular/common';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  imports: [Card, ChipModule, Button, CurrencyPipe, DatePipe],
})
export class ExpensesListComponent implements OnInit {
  readonly #transactionStore = inject(TransactionStore);
  readonly $list: Signal<Transaction[]> = this.#transactionStore.data;

  ngOnInit(): void {
    this.#transactionStore.loadTransactions();
  }
}
