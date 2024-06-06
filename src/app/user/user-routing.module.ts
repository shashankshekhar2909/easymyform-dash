import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from '../auth/login/login.component';
import { CvFormComponent } from './cv-form/cv-form.component';

const routes: Routes = [
  {
    path:'',
    component: UserDashboardComponent,
    title:'User Dashboard'
  },
  {
    path:'post-cv',
    component: CvFormComponent,
    title:'User Dashboard'
  },

  {
    path:'login',
    component: LoginComponent,
    title:'User Dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
