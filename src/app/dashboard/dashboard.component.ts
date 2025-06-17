import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ExpensesBreakdownComponent } from './components/expenses-breakdown/expenses-breakdown.component';
import { MonthlyBalanceComponent } from './components/monthly-balance/monthly-balance.component';
import { MonthlyStackedChartComponent } from './components/monthly-stacked-chart/monthly-stacked-chart.component';
import { TrendingLineChartComponent } from './components/trending-line-chart/trending-line-chart.component'; // Optional: For buttons inside the card

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ExpensesBreakdownComponent,
    MonthlyBalanceComponent,
    MonthlyStackedChartComponent,
    TrendingLineChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // Inside your DashboardComponent class
  ngOnInit(): void {}
}
