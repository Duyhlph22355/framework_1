import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };

  onSubmit() {
    console.log('Registration submitted:', this.user);
    // Goi API
  }
}

