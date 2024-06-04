import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent implements OnInit{
  constructor(private userService: UserService){}
  ngOnInit(): void {
      // this.checkLogin();
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
  logout(){
    this.userService.logout().subscribe({
      next: (resp:any) => {
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);

      }
    });
  }
  gotoJobPosts(){

  }
}
