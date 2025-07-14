import { inject, Injectable, Signal } from '@angular/core';
import { OmitSymbols } from '@core/utils/omit-symbols';
import { TransactionStore } from '../store/transaction/transaction.store';
import { TransactionRequestPayload } from '@model/transaction.model';
import {
  Transaction,
  TransactionFilter,
} from '../store/transaction/transaction.state';
import { DeepSignal } from '@ngrx/signals';

@Injectable({ providedIn: 'root' })
export class TransactionFacade implements OmitSymbols<TransactionStore> {
  readonly #transactionStore = inject(TransactionStore);

  data: Signal<Transaction[]> = this.#transactionStore.data;
  filter: DeepSignal<TransactionFilter> = this.#transactionStore.filter;

  loadTransactions(): Promise<void> {
    return this.#transactionStore.loadTransactions();
  }

  addTransaction(data: TransactionRequestPayload): Promise<void> {
    return this.#transactionStore.addTransaction(data);
  }

  updateFilter(filter: TransactionFilter) {
    this.#transactionStore.updateFilter(filter);
  }
}
