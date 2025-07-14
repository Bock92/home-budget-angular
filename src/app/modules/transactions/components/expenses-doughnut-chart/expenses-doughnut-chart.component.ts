import { Component, computed, inject } from '@angular/core';
import { TransactionFacade } from '@modules/transactions/facades/transaction.facade';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-expenses-doughnut-chart',
  templateUrl: './expenses-doughnut-chart.component.html',
  imports: [ChartModule, CardModule],
})
export class ExpensesDoughnutChartComponent {
  readonly #transactionFacade = inject(TransactionFacade);
  readonly #labels = computed(() => {
    console.log('labels');
    const transactions = this.#transactionFacade.data();
    return Array.from(
      new Set(transactions.map((transaction) => transaction.category.name))
    );
  });

  readonly #dataList = computed(() => {
    const labels = this.#labels();
    const transactions = this.#transactionFacade.data();

    const totals = labels.reduce(
      (acc: { [key: string]: number }, label: string) => {
        acc[label] = 0;
        return acc;
      },
      {}
    );
    transactions.forEach((transaction) => {
      totals[transaction.category.name] =
        totals[transaction.category.name] + transaction.amount;
    });

    console.log(totals);
    return Object.values(totals);
  });

  $data = computed(() => {
    return {
      labels: this.#labels(),
      datasets: [
        {
          data: this.#dataList(),
          backgroundColor: [
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-cyan-500'
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-orange-500'
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-gray-500'
            ),
          ],
          hoverBackgroundColor: [
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-cyan-400'
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-orange-400'
            ),
            getComputedStyle(document.documentElement).getPropertyValue(
              '--p-gray-400'
            ),
          ],
        },
      ],
    };
  });

  options = {
    cutout: '90%',
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-text-color'
          ),
        },
      },
    },
  };
  constructor() {}
}
