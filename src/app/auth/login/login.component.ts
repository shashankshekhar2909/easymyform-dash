import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  loginForm: FormGroup;

  ngOnInit(): void {
      this.checkLogin();
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle login logic here
    }
  }
  submitting = false;

  login(){
    this.submitting = true;
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Handle login logic here
      console.log(this.loginForm);
      this.userService.signIn(this.loginForm.value).subscribe({
        next: (resp:any) => {
          console.log(resp);
          this.submitting = false;
          this.router.navigate(['/admin'])
          this.loginForm.reset();
        },
        error: (HttpResponse: HttpErrorResponse) => {
          console.log(HttpResponse);

        }
      });
    }
  }

  checkLogin(){
    this.userService.userProfile().subscribe({
      next: (resp:any) => {
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);

      }
    });
  }
}
