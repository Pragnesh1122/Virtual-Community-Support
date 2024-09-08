import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  fullName: string = '';
  address: string = '';

  @Output() userAdd = new EventEmitter<User>();

  addUser() {
    const newUser: User = {
      sno: Math.floor(Math.random() * 100), // Example: Replace with actual logic
      fullName: this.fullName,
      address: this.address,
      active: true // Example: Replace with actual logic
    };
    this.userAdd.emit(newUser);
    this.fullName = '';
    this.address = '';
  }
}

interface User {
  sno: number;
  fullName: string;
  address: string;
  active: boolean;
}
