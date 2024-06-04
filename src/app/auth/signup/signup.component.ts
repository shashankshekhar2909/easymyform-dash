import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ){
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password1: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', [Validators.required]]
    });

  }

  signUpForm: FormGroup;

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      // Handle login logic here
    }
  }
  submitting = false;
  formData = new FormData();

  login(){
    this.submitting = true;
    console.log(this.signUpForm);
    console.log(this.signUpForm.valid);
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      // Handle login logic here
      this.userService.signUp(this.signUpForm.value).subscribe({
        next: (resp:any) => {
          console.log(resp);
          this.submitting = false;
          this.signUpForm.reset();
        },
        error: (HttpResponse: HttpErrorResponse) => {
          console.log(HttpResponse);

        }
      });
    }
  }
  postSignUp = () => {
    // this.categoryService.postContact(this.formGroup.value).subscribe({
    //   next: (resp:any) => {
    //     console.log(resp);
    //     this._snackBar.open('Thanks! We will contact you soon.  👍', '', {
    //       duration: 10000,
    //       panelClass: ['landing-snackBar']
    //     });
    //     this.submitting = false;
    //     this.formGroup.reset();
    //   },
    //   error: (HttpResponse: HttpErrorResponse) => {
    //     this._snackBar.open(`${HttpResponse.error.detail}`, 'OK', {
    //       duration: 3000,
    //       panelClass: ['error-snackbar']
    //     });
    //   }
    // });
  }
}
