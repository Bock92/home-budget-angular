import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialExpenseTypes } from './expense-type.state';
import { inject } from '@angular/core';
import { ExpenseTypesService } from '../../services/expense-type.service';
import { lastValueFrom } from 'rxjs';

export const expenseTypes = signalStore(
  withState(initialExpenseTypes),
  withMethods((store, expenseTypesService = inject(ExpenseTypesService)) => {
    const loadExpenseTypes = async () => {
      const result = await lastValueFrom(
        expenseTypesService.getExpenseTypesAll()
      );
      patchState(store, {
        data: result.data,
      });
    };
    return { loadExpenseTypes };
  })
);
