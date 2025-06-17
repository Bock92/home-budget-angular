import { StrapiRecord } from '../../model/strapi.model';
import { CategoryState } from '../category/category.state';
import { ExpenseTypes } from '../expense-type/expense-type.state';

export type Transaction = StrapiRecord & {
  description: string;
  amount: number;
  category: CategoryState;
  expense_Type: ExpenseTypes;
};

export type TransactionState = {
  data: Transaction[];
};

export const initialTransactionState: TransactionState = {
  data: [],
};
