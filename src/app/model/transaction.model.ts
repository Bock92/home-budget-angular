export interface TransactionRequestPayload {
  data: {
    dateTransaction: string;
    description: string;
    amount: number;
    category: {
      connect: number[];
    };
    expense_type: {
      connect: number[];
    };
  };
}
