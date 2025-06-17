import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PanelMenu } from 'primeng/panelmenu';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelMenu],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'home-budget';
  _currentYear = new Date().getFullYear();
  menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/dashboard'],
      },
      {
        label: 'Expenses',
        icon: 'pi pi-fw pi-money-bill',
        expanded: true,
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye', // Example icon for view
            routerLink: ['/expenses/view'],
          },
          {
            label: 'Add',
            icon: 'pi pi-fw pi-plus', // Example icon for view
            routerLink: ['/expenses/add'],
          },
        ],
      },
      // {
      //   label: 'Categories',
      //   icon: 'pi pi-fw pi-tags',       // Example icon
      //   routerLink: ['/categories']     // Example route
      // },
      // {
      //   label: 'Reports',
      //   icon: 'pi pi-fw pi-chart-bar',  // Example icon
      //   routerLink: ['/reports']        // Example route
      // },
      // {
      //   label: 'Settings',
      //   icon: 'pi pi-fw pi-cog',        // Example icon
      //   routerLink: ['/settings']       // Example route
      // }
      // Add more menu items here for other routes as your app grows
    ];
  }
}
