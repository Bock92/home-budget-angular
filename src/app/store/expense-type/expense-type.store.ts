import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { initialExpenseTypes, ExpenseTypes } from './expense-type.state';
import { computed, inject } from '@angular/core';
import { ExpenseTypesService } from '@services/expense-type.service';
import { lastValueFrom } from 'rxjs';

export const ExpenseTypesStore = signalStore(
  { providedIn: 'root' },
  withState(initialExpenseTypes),
  withComputed((store) => {
    const $expenseTypesList = computed(() =>
      store
        .data()
        .map((expenseType: ExpenseTypes) => ({
          label: expenseType.name,
          value: expenseType.documentId,
        }))
        .sort((first, second) => first.value.localeCompare(second.value))
    );
    return { $expenseTypesList };
  }),
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
  }),
  withHooks({
    onInit(store) {
      store.loadExpenseTypes();
    },
  })
);

export type ExpenseTypesStore = InstanceType<typeof ExpenseTypesStore>;
