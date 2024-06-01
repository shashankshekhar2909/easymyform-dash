import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit{
  constructor(private router: Router){

  }
  ngOnInit(): void {
      this.router.navigate(['home'])
  }
}
