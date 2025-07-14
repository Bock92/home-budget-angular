import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyBalanceComponent } from '../components/monthly-balance/monthly-balance.component';
import { MonthlyStackedChartComponent } from '../components/monthly-stacked-chart/monthly-stacked-chart.component';
import { TrendingLineChartComponent } from '../components/trending-line-chart/trending-line-chart.component'; // Optional: For buttons inside the card
import { HeaderComponent } from '@components/header/header.component';
import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { ExpensesBreakdownComponent } from '../components/expenses-breakdown/expenses-breakdown.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ExpensesBreakdownComponent,
    MonthlyBalanceComponent,
    MonthlyStackedChartComponent,
    TrendingLineChartComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  // Inside your DashboardComponent class
  ngOnInit(): void {}
}
