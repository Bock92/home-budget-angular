import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StrapiResponse } from '@model/strapi.model';
import { ExpenseTypes } from '@store/expense-type/expense-type.state';

@Injectable({ providedIn: 'root' })
export class ExpenseTypesService {
  readonly #http = inject(HttpClient);
  readonly #api: string = '/api/expense-types';

  getExpenseTypesAll() {
    return this.#http.get<StrapiResponse<ExpenseTypes[]>>(this.#api);
  }
}
