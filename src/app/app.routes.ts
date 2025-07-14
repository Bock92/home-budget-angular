import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then((r) => r.routes),
  },
  {
    path: 'expenses',
    loadChildren: () =>
      import('./modules/transactions/transactions.routes').then(
        (r) => r.routes
      ),
  },
  // Add other routes here
  // { path: '**', redirectTo: '/dashboard' } // Optional: Fallback route
];
