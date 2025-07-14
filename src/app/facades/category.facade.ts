import { inject, Injectable } from '@angular/core';
import { OmitSymbols } from '@core/utils/omit-symbols';
import { CategoryStore } from '@store/category/category.store';

@Injectable({ providedIn: 'root' })
export class CategoryFacade implements OmitSymbols<CategoryStore> {
  readonly #categoryStore = inject(CategoryStore);

  $categoryList = this.#categoryStore.$categoryList;
  categories = this.#categoryStore.categories;

  loadCategories(): Promise<void> {
    return this.#categoryStore.loadCategories();
  }
}
