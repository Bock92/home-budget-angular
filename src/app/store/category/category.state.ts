import { StrapiRecord } from '../../model/strapi.model';

export type Category = StrapiRecord & {
  name: string;
};

export type CategoryState = {
  categories: Category[];
};

export const initialCategoryState: CategoryState = {
  categories: [],
};
