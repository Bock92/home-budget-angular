import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialTransactionState } from './transaction.state';
import { inject } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { lastValueFrom } from 'rxjs';
import { TransactionRequestPayload } from '../../model/transaction.model';

export const TransactionStore = signalStore(
  { providedIn: 'root' },
  withState(initialTransactionState),
  withMethods((store, transactionService = inject(TransactionService)) => {
    const loadTransactions = async () => {
      const result = await lastValueFrom(transactionService.getTransactions());
      patchState(store, {
        data: result.data,
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
    return {
      loadTransactions,
      addTransaction,
    };
  })
);

export type TransactionStore = InstanceType<typeof TransactionStore>;
