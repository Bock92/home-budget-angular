import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StrapiResponse } from '../model/strapi.model';
import { Category, CategoryState } from '../store/category/category.state';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  readonly #http = inject(HttpClient);
  readonly #api: string = '/api/categories';

  getCategories(): Observable<StrapiResponse<Category[]>> {
    return this.#http.get<StrapiResponse<Category[]>>(this.#api);
  }
}
