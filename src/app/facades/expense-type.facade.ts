import { inject, Injectable } from '@angular/core';
import { OmitSymbols } from '@core/utils/omit-symbols';
import { ExpenseTypesStore } from '@store/expense-type/expense-type.store';

@Injectable({ providedIn: 'root' })
export class ExpenseTypeFacade implements OmitSymbols<ExpenseTypesStore> {
  readonly #expenseTypesStore = inject(ExpenseTypesStore);

  $expenseTypesList = this.#expenseTypesStore.$expenseTypesList;
  data = this.#expenseTypesStore.data;

  loadExpenseTypes(): Promise<void> {
    return this.#expenseTypesStore.loadExpenseTypes();
  }
}
