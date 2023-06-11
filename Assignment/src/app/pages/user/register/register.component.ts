import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {  AbstractControl, FormBuilder , FormGroup, Validators } from '@angular/forms';
import { IUsers } from 'src/app/interface/IUser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ){

  }
  registerForm = this.formBuilder.group({
    "name": ['', [Validators.required]],
    "email": ['', [Validators.required, Validators.email]],
    "password": ['', [Validators.required, Validators.minLength(6)]],
  })
  get validate(){
    return this.registerForm.controls
  }
  onSubmit() {
    if(this.registerForm.valid){
      const user: IUsers = {
        id: '',
        name: this.registerForm.value.name || '',
        email: this.registerForm.value.email || '',
        password: this.registerForm.value.password || '',
        role: "member"
      };
      this.authService.addUser(user).subscribe((user) => {
        alert(`Đăng ký tài khoản thành công!!!`);
        this.router.navigate(['/login']);
      });
    }

  }
}

