import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  { path: '',
    component: AdminDashboardComponent
  },
  {
    path:'jobs',
    component: JobPostsComponent
  },
  {
    path:'job-details/:id',
    component: JobDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
