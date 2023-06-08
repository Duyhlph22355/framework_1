import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {  AbstractControl, FormBuilder , FormGroup, Validators } from '@angular/forms';
import { IUsers } from 'src/app/interface/IUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    ){

  }
  loginForm = this.formBuilder.group({
    "email": ['', [Validators.required, Validators.email]],
    "password": ['', [Validators.required, Validators.minLength(6)]],
  })
  get validate(){
    return this.loginForm.controls
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email || '';
      const password = this.loginForm.value.password || '';

      this.authService.getUserByEmail(email).subscribe((user) => {
        console.log(user.id);

        // Kiểm tra thông tin đăng nhập hợp lệ
        // if (user.email === email && user.password === password) {
        //   // Lưu thông tin người dùng vào local storage hoặc session storage
        //   localStorage.setItem('currentUser', JSON.stringify(user));

        //   // Điều hướng đến trang chủ hoặc trang khác
        //   this.router.navigate(['/home']);
        // } else {
        //   // Hiển thị thông báo lỗi
        //   alert('Email hoặc mật khẩu không chính xác');
        // }
      });
    }
  }
}
