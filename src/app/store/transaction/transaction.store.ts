import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialTransactionState } from './transaction.state';
import { inject } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { lastValueFrom } from 'rxjs';

export const transactionStore = signalStore(
  withState(initialTransactionState),
  withMethods((store, transactionService = inject(TransactionService)) => {
    const loadTransactions = async () => {
      const result = await lastValueFrom(transactionService.getTransactions());
      patchState(store, {
        data: result.data,
      });
    };
    return {
      loadTransactions,
    };
  })
);
