import { StrapiRecord } from '@model/strapi.model';

export type ExpenseTypes = StrapiRecord & {
  name: string;
};

export type ExpenseTypesState = {
  data: ExpenseTypes[];
};

export const initialExpenseTypes: ExpenseTypesState = {
  data: [],
};
