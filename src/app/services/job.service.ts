import { Injectable, OnInit } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../_globals/endpoints.global';
import { env } from '../../environment/env';
@Injectable({
  providedIn: 'root'
})
export class JobService {
  httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public globals: Globals
  ) {
    this.httpOptions = new HttpHeaders({
      'Content-Type': 'form',
    });
  }

  getJobPost = (filters?:any) => {
    const endPoint = env.url + this.globals.urlJoin('jobs', 'jobFeeds');
    return this.http
      .get(endPoint,{
      })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  postJob = (formData?:any) => {
    const endPoint = env.url + this.globals.urlJoin('jobs', 'jobFeeds');
    return this.http
      .post(endPoint,{
      })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  getJobFeeds = (filters?:any) => {
    const endPoint = env.url + this.globals.urlJoin('jobs', 'jobFeedsUser');
    return this.http
      .get(endPoint,{
      })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  userProfile = () => {
    const endPoint = env.url + this.globals.urlJoin('users', 'userInfo');
    return this.http
      .get(endPoint,{
      })
      .pipe(
        map((response: any) => {
          console.log(response);
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }

  // signIn = (userForm:any) => {
  //   const endPoint = this.globals.urlJoin('users', 'signUp');
  //   return this.http
  //     .get(endPoint, {
  //     })
  //     .pipe(
  //       map((response: any) => {
  //         console.log(response);
  //         this.router.navigate(['/user'])
  //         return response;
  //       }),
  //       catchError((error) => throwError(error))
  //     );
  // }

  formSubmitted = false;
  signUp = (userForm:any) => {
    this.formSubmitted = true;
    console.log(userForm);
    const formData = new FormData();
    formData.append('email', userForm.email);
    formData.append('password1', userForm.password1);
    formData.append('password2', userForm.password2);
    formData.append('first_name', userForm.first_name);
    const endPoint = env.url + this.globals.urlJoin('users', 'signUp');
    return this.http
      .post(endPoint,formData,{})
      .pipe(
        map((response: any) => {
          this.formSubmitted = false;
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }
}
