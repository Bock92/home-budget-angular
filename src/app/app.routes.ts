import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensivePageComponent } from './pages/expensive/expensive-page.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route to dashboard
  {
    path: 'expenses',
    children: [
      { path: 'view', component: ExpensivePageComponent },
      // { path: 'add', component: ExpensiveFormComponent}
      // You might want a default child route for '/expenses' itself
      // e.g., { path: '', redirectTo: 'view', pathMatch: 'full' }
    ],
  },
  // Add other routes here
  // { path: '**', redirectTo: '/dashboard' } // Optional: Fallback route
];
