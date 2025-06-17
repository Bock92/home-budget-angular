import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-expenses-doughnut-chart',
  templateUrl: './expenses-doughnut-chart.component.html',
  imports: [ChartModule, CardModule],
})
export class ExpensesDoughnutChartComponent {
  data = {
    labels: ['House', 'Insurance', 'Bill'],
    datasets: [
      {
        data: [300, 50, 100],
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
