import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StrapiResponse } from '../model/strapi.model';
import { Observable } from 'rxjs';
import { Transaction } from '../store/transaction/transaction.state';
import { TransactionRequestPayload } from '../model/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly #http = inject(HttpClient);
  readonly #api: string = '/api/transactions';

  getTransactions(): Observable<StrapiResponse<Transaction[]>> {
    return this.#http.get<StrapiResponse<Transaction[]>>(
      `${this.#api}?populate=*`
    );
  }

  addTransaction(
    payload: TransactionRequestPayload
  ): Observable<StrapiResponse<Transaction>> {
    return this.#http.post<StrapiResponse<Transaction>>(this.#api, payload);
  }
}
