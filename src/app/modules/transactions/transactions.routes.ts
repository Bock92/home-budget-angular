import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    loadComponent: () =>
      import('./pages/expensive-page.component').then(
        (c) => c.ExpensivePageComponent
      ),
  },
];
