import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Category, initialCategoryState } from './category.state';
import { CategoryService } from '@services/category.service';
import { computed, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(initialCategoryState),
  withComputed((store) => {
    const $categoryList = computed(() =>
      store.categories().map((category: Category) => ({
        label: category.name,
        value: category.documentId,
      }))
    );
    return { $categoryList };
  }),
  withMethods((store, categoryService = inject(CategoryService)) => {
    const loadCategories = async () => {
      const result = await lastValueFrom(categoryService.getCategories());
      console.log(result.data);
      patchState(store, {
        categories: result.data,
      });
    };

    return {
      loadCategories,
    };
  }),
  withHooks({
    onInit(store) {
      store.loadCategories();
    },
  })
);

export type CategoryStore = InstanceType<typeof CategoryStore>;
