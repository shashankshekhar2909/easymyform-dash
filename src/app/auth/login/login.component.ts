import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  loginForm: FormGroup;

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
      this.userService.signIn(this.loginForm.value).subscribe({
        next: (resp:any) => {
          console.log(resp);
          this.submitting = false;
          this.loginForm.reset();
        },
        error: (HttpResponse: HttpErrorResponse) => {
          console.log(HttpResponse);

        }
      });
    }
  }
}
