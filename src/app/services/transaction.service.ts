import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StrapiResponse } from '../model/strapi.model';
import { Observable } from 'rxjs';
import {
  Transaction,
  TransactionFilter,
} from '../store/transaction/transaction.state';
import { TransactionRequestPayload } from '../model/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly #http = inject(HttpClient);
  readonly #api: string = '/api/transactions';

  getTransactions(
    filter: TransactionFilter
  ): Observable<StrapiResponse<Transaction[]>> {
    const today = filter.today!;
    const last = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const start = `${filter.today!.toISOString()}`;
    const end = `${last.toISOString()}`;
    return this.#http.get<StrapiResponse<Transaction[]>>(
      `${
        this.#api
      }?filters[createdAt][$gt]=${start}&filters[createdAt][$lt]=${end}&populate=*`
    );
  }

  addTransaction(
    payload: TransactionRequestPayload
  ): Observable<StrapiResponse<Transaction>> {
    return this.#http.post<StrapiResponse<Transaction>>(this.#api, payload);
  }
}
