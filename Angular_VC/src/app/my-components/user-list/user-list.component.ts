import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any[] = []; // Placeholder for user data, replace with actual data structure as needed

  constructor() {
    // Initialize user data or fetch from service
    this.users = [
      { id: 1, fullName: 'John Doe', address: '123 Main St', active: true },
      { id: 2, fullName: 'Jane Smith', address: '456 Elm St', active: false }
      // Add more user data as needed
    ];
  }

  // Example method to handle user deletion
  deleteUser(index: number): void {
    this.users.splice(index, 1);
  }

  // Example method to handle checkbox toggle
  toggleUser(index: number): void {
    this.users[index].active = !this.users[index].active;
  }
}
