import { StrapiRecord } from '../../model/strapi.model';

export type Category = StrapiRecord & {
  name: string;
};

export type CategoryState = {
  data: Category[];
};

export const initialCategoryState: CategoryState = {
  data: [],
};
