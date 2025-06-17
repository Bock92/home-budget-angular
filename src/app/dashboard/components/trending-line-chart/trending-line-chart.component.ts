import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-trending-line-chart',
  templateUrl: './trending-line-chart.component.html',
  imports: [Card, ChartModule],
})
export class TrendingLineChartComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-cyan-500'),
        data: [2000, 4000, 6000, 8000, 10000, 12000, 14000],
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Expenses',
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-gray-500'),
        data: [1000, 1500, 1200, 1300, 1700, 1600, 1700],
        fill: false,
        tension: 0.4,
      },
      {
        label: 'Saving',
        borderColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-orange-500'),
        data: [1000, 500, 800, 700, 300, 400, 300],
        fill: false,
        tension: 0.4,
      },
    ],
  };
  options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-text-color'
          ),
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-text-muted-color'
          ),
        },
        grid: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-content-border-color'
          ),
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-text-muted-color'
          ),
        },
        grid: {
          color: getComputedStyle(document.documentElement).getPropertyValue(
            '--p-content-border-color'
          ),
          drawBorder: false,
        },
      },
    },
  };
  constructor() {}
}
