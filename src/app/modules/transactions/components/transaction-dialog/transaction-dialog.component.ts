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
import { TransactionRequestPayload } from '@model/transaction.model';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExpenseTypeFacade } from '@facades/expense-type.facade';
import { CategoryFacade } from '@facades/category.facade';

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
  readonly #categoryFacade = inject(CategoryFacade);
  readonly #expenseTypesFacade = inject(ExpenseTypeFacade);
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
    this.#categoryFacade.$categoryList;
  $expensiveList = this.#expenseTypesFacade.$expenseTypesList;

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
