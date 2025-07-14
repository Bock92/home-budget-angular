import { Component } from '@angular/core';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  imports: [MenuModule],
})
export class SidebarComponent {
  menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-fw pi-home',
      routerLink: ['/dashboard'],
    },
    {
      label: 'Transactions',
      icon: 'pi pi-fw pi-bars',
      routerLink: ['/expenses/view'],
    },
  ];
}
