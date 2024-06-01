import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { take, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(private router: Router, private userService: UserService) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | Promise<boolean> | boolean {
  //   return new Promise((resolve, reject) => {
  //     this.userService.me().toPromise().then(response => {
  //       localStorage.setItem('currentUser', JSON.stringify(response));
  //       if(!this.permissionService.permissions) {
  //         // if no permissions object already present
  //       this.permissionService.getAppPermissions().toPromise().then(resp => {
  //         this.router.navigate(['/home']);
  //         resolve(true);
  //       }).catch(err => {
  //         // show error msg if permission api throws error & logout
  //         this.userService.logOut();
  //         this.snackBar.open('Some Error occured, Please login and try again!', 'OK', {
  //           duration: 3000,
  //           panelClass: ['error-snackbar']
  //         });
  //         resolve(err);
  //         this.router.navigate(['/']);
  //         localStorage.removeItem('currentUser');
  //       })
  //     }
  //     else {
  //       resolve(true)
  //     }
  //     }).catch(err => {
  //       // redirect to login if me throws error
  //       this.router.navigate(['/']);
  //       resolve(err);
  //     })
  //   });
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
