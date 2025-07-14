import { Component, inject, Signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { SelectButton } from 'primeng/selectbutton';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';
import { CategoryStore } from '@store/category/category.store';
import { ExpenseTypesStore } from '@store/expense-type/expense-type.store';
import { TransactionRequestPayload } from '@model/transaction.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-transaction-dialog',
  templateUrl: './transaction-dialog.component.html',
  imports: [
    ReactiveFormsModule,
    Button,
    InputTextModule,
    InputNumber,
    SelectButton,
    Select,
    DatePicker,
  ],
})
export class TransactionDialogComponent {
  readonly #categoryStore = inject(CategoryStore);
  readonly #expenseTypesStore = inject(ExpenseTypesStore);
  readonly #dialogRef = inject(DynamicDialogRef);

  form = new FormGroup({
    description: new FormControl('', { validators: [Validators.required] }),
    amount: new FormControl(0, { validators: [Validators.required] }),
    typeExpensive: new FormControl(null, { validators: [Validators.required] }),
    category: new FormControl(null, { validators: [Validators.required] }),
    date: new FormControl(new Date(), { validators: [Validators.required] }),
    userId: new FormControl({ value: '1234', disabled: true }),
  });

  $categoryList: Signal<{ label: string; value: string }[]> =
    this.#categoryStore.$categoryList;
  $expensiveList = this.#expenseTypesStore.$expenseTypesList;

  submit() {
    if (this.form.valid) {
      const { description, amount, typeExpensive, category, date } =
        this.form.value!;
      const payload: TransactionRequestPayload = {
        data: {
          dateTransaction: date!.toISOString(),
          description: description!,
          amount: amount!,
          category: {
            connect: [category!],
          },
          expense_type: {
            connect: [typeExpensive!],
          },
        },
      };

      this.#dialogRef.close(payload);
    }
  }
}
