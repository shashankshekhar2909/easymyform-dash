import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Globals } from '../_globals/endpoints.global';
import { env } from '../../environment/env';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    public globals: Globals
  ) { }

  signIn = (userForm:any) => {
    console.log(userForm);

    const endPoint = env.url + this.globals.urlJoin('users', 'signIn');
    return this.http
      .post(endPoint,userForm,{
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

  signUp = (userForm:any) => {
    console.log(userForm);
    const endPoint = this.globals.urlJoin('users', 'signUp');
    return this.http
      .post(endPoint,userForm,{
        headers: this.httpOptions,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError((error) => throwError(error))
      );
  }
}
