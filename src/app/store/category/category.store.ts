import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { initialCategoryState } from './category.state';
import { CategoryService } from '../../services/category.service';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

export const categoryStore = signalStore(
  withState(initialCategoryState),
  withMethods((store, categoryService = inject(CategoryService)) => {
    const loadCategories = async () => {
      const result = await lastValueFrom(categoryService.getCategories());
      patchState(store, {
        data: result.data,
      });
    };

    return {
      loadCategories,
    };
  })
);
