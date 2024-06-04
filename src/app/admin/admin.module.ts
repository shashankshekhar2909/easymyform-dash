import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MaterialModule } from '../../material';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { JobPostsComponent } from './job-posts/job-posts.component';
import { JobCardComponent } from './partials/job-card/job-card.component';
import { JobDetailsComponent } from './job-details/job-details.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    JobPostsComponent,
    JobCardComponent,
    JobDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
