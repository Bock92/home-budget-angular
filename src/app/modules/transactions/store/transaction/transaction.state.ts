import { StrapiRecord } from '@model/strapi.model';
import { Category } from '@store/category/category.state';
import { ExpenseTypes } from '@store/expense-type/expense-type.state';

export type Transaction = StrapiRecord & {
  description: string;
  amount: number;
  dateTransaction: string;
  category: Category;
  expense_Type: ExpenseTypes;
};

export type TransactionFilter = {
  today?: Date;
};

export type TransactionState = {
  data: Transaction[];
  filter: TransactionFilter;
};

export const initialTransactionState: TransactionState = {
  data: [],
  filter: {},
};
