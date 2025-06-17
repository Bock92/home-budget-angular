import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-monthly-stacked-chart',
  templateUrl: './monthly-stacked-chart.component.html',
  imports: [Card, ChartModule],
})
export class MonthlyStackedChartComponent {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        type: 'bar',
        label: 'House',
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-cyan-500'),
        data: [50, 25, 12, 48, 90, 76, 42],
      },
      {
        type: 'bar',
        label: 'Insurance',
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-gray-500'),
        data: [21, 84, 24, 75, 37, 65, 34],
      },
      {
        type: 'bar',
        label: 'Bill',
        backgroundColor: getComputedStyle(
          document.documentElement
        ).getPropertyValue('--p-orange-500'),
        data: [41, 52, 24, 74, 23, 21, 32],
      },
    ],
  };
  options = {
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
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
        stacked: true,
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
        stacked: true,
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
