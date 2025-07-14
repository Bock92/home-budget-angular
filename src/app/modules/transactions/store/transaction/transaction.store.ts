import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  initialTransactionState,
  TransactionFilter,
} from './transaction.state';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { TransactionService } from '@services/transaction.service';
import { TransactionRequestPayload } from '@model/transaction.model';

export const TransactionStore = signalStore(
  { providedIn: 'root' },
  withState(initialTransactionState),
  withMethods((store, transactionService = inject(TransactionService)) => {
    const loadTransactions = async () => {
      const result = await lastValueFrom(
        transactionService.getTransactions(store.filter())
      );
      patchState(store, {
        data: [...result.data],
      });
    };

    const addTransaction = async (data: TransactionRequestPayload) => {
      const result = await lastValueFrom(
        transactionService.addTransaction(data)
      );
      if (result) {
        loadTransactions();
      }
    };

    const updateFilter = (filter: TransactionFilter) => {
      patchState(store, {
        filter: {
          ...store.filter(),
          ...filter,
        },
      });
    };

    return {
      loadTransactions,
      addTransaction,
      updateFilter,
    };
  }),
  withHooks((store) => ({
    onInit() {
      const date = new Date();
      date.setHours(0, 0, 0, 0);

      patchState(store, {
        filter: {
          ...store.filter(),
          today: date,
        },
      });
    },
  }))
);

export type TransactionStore = InstanceType<typeof TransactionStore>;
