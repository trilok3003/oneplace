import { Component } from '@angular/core';
import { Config, Menu } from './accordion/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'accordion';
  options: Config = { multi: false };
  
  menus: Menu[] = [
    { 
      name: 'Human Resource Module',
      iconClass: 'fa fa-code',
      active: true,
      submenu: [
        { name: 'Employee', url: '#' },
        { name: 'Attendance', url: '#' },
        { name: 'Salary', url: '#' }
      ]
    },
    { 
      name: 'Rates Module',
      iconClass: 'fa fa-mobile',
      active: false,
      submenu: [
        { name: 'Fixed Rate', url: '#' },
        { name: 'Daily Rate', url: '#' },
        { name: 'Variable Rate', url: '#' }
      ]
    },
    { 
      name: 'Configurations',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'General', url: '#' },
        { name: 'Authorities', url: '#' },
        { name: 'Roles', url: '#' },
        { name: 'Permissions', url: '#' },
        { name: 'Duties', url: '#' }
      ]
    },
    { 
      name: 'Cashbook',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'List', url: '#' },
        { name: 'Cashvoucher', url: '#' },
        { name: 'Book', url: '#' },
      ]
    },
    { 
      name: 'Policies',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Hr Policy', url: '#' }
      ]
    },
    { 
      name: 'Providers',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'General', url: '#' },
        { name: 'UnIdentified', url: '#' },
        { name: 'Special', url: '#' },
      ]
    },
    { 
      name: 'Actors',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'List', url: '#' }
      ]
    },
    { 
      name: 'Payment Advice',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Advice for Employees', url: '#' },
        { name: 'Advice for Providers', url: '#' },
      ]
    },
    { 
      name: 'Bank Account',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Current Account', url: '#' },
        { name: 'Credit Account', url: '#' },
      ]
    },
    { 
      name: 'Home',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Dashboard', url: '#' }
      ]
    },
    { 
      name: 'My Company',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'Company Profile', url: '#' },
      ]
    },
    { 
      name: 'Equipment',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'List', url: '#' },
      ]
    },
    { 
      name: 'Inventory',
      iconClass: 'fa fa-globe',
      active: false,
      submenu: [
        { name: 'List', url: '#' },
      ]
    },
  ];
}
