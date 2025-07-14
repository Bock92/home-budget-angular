import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Transaction } from '@modules/transactions/store/transaction/transaction.state';
import { TransactionFacade } from '@modules/transactions/facades/transaction.facade';
@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  imports: [Card, ChipModule, Button, CurrencyPipe, DatePipe],
})
export class ExpensesListComponent implements OnInit {
  readonly #transactionFacade = inject(TransactionFacade);
  readonly $list: Signal<Transaction[]> = this.#transactionFacade.data;
  readonly $expensiveTime = computed(() => {
    const date = this.#transactionFacade.filter().today!;
    return {
      prev: new Date(date).setMonth(date.getMonth() - 1),
      current: date,
      next: new Date(date).setMonth(date.getMonth() + 1),
    };
  });

  ngOnInit(): void {
    this.#transactionFacade.loadTransactions();
  }

  onPrev(_event: Event) {
    this.#transactionFacade.updateFilter({
      today: new Date(this.$expensiveTime().prev),
    });
    this.#transactionFacade.loadTransactions();
  }

  onNext(_event: Event) {
    this.#transactionFacade.updateFilter({
      today: new Date(this.$expensiveTime().next),
    });
    this.#transactionFacade.loadTransactions();
  }
}
