import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { SelectButton } from 'primeng/selectbutton';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

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
  form = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl(),
    typeExpensive: new FormControl(),
    category: new FormControl(''),
    date: new FormControl(new Date()),
    userId: new FormControl({ value: '1234', disabled: true }),
  });

  expensiveList = [
    {
      label: 'Spesa',
      value: 1,
    },
    {
      label: 'Entrata',
      value: 2,
    },
    {
      label: 'Rimborso',
      value: 3,
    },
  ];

  categoryList = [
    {
      label: 'House',
      value: 1,
    },
    {
      label: 'Entrata',
      value: 2,
    },
    {
      label: 'Rimborso',
      value: 3,
    },
  ];

  submit() {
    console.log(this.form.value);
  }
}
