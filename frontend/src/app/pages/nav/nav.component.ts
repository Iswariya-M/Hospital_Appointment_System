import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  dropdownOpen = false;
  locations = [
    { name: 'Chennai Alwarpet', phone: '044 40006000' },
    { name: 'Chennai Radial Road', phone: '044 40504050' },
    { name: 'Chennai Vadapalani', phone: '044 40006000' },
    { name: 'T-Nagar', phone: '0431 4077777' },
    { name: 'Tambaram', phone: '0427 2677777' },
    { name: 'Kundrathur', phone: '0434 4272727' },
    
  ];

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}


