import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
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
