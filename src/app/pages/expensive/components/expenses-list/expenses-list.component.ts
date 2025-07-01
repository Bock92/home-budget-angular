import { Component, computed, inject, OnInit, Signal } from '@angular/core';
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
  readonly $expensiveTime = computed(() => {
    const date = this.#transactionStore.filter().today!;
    return {
      prev: new Date(date).setMonth(date.getMonth() - 1),
      current: date,
      next: new Date(date).setMonth(date.getMonth() + 1),
    };
  });

  ngOnInit(): void {
    this.#transactionStore.loadTransactions();
  }

  onPrev(_event: Event) {
    this.#transactionStore.updateFilter({
      today: new Date(this.$expensiveTime().prev),
    });
    this.#transactionStore.loadTransactions();
  }

  onNext(_event: Event) {
    this.#transactionStore.updateFilter({
      today: new Date(this.$expensiveTime().next),
    });
    this.#transactionStore.loadTransactions();
  }
}
