import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StrapiResponse } from '@model/strapi.model';
import { Observable } from 'rxjs';
import { TransactionRequestPayload } from '@model/transaction.model';
import {
  Transaction,
  TransactionFilter,
} from '@modules/transactions/store/transaction/transaction.state';
import { MonthlyReport } from '@modules/dashboard/store/dashboard/dashboard.state';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  readonly #http = inject(HttpClient);
  readonly #api: string = '/api/transactions';

  getTransactions(
    filter: TransactionFilter
  ): Observable<StrapiResponse<Transaction[]>> {
    const today = filter.today!;
    const last = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).toISOString();
    const start = new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    ).toISOString();
    return this.#http.get<StrapiResponse<Transaction[]>>(
      `${
        this.#api
      }?filters[dateTransaction][$gt]=${start}&filters[dateTransaction][$lt]=${last}&populate=*`
    );
  }

  addTransaction(
    payload: TransactionRequestPayload
  ): Observable<StrapiResponse<Transaction>> {
    return this.#http.post<StrapiResponse<Transaction>>(this.#api, payload);
  }

  getMonthlyReport(date: string): Observable<StrapiResponse<MonthlyReport>> {
    return this.#http.post<StrapiResponse<MonthlyReport>>(
      `${this.#api}/monthly-report`,
      { data: { currentDate: date } }
    );
  }
}
