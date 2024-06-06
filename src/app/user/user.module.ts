import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MaterialModule } from '../../material';
import { JobCardComponent } from './partials/job-card/job-card.component';
import { CvFormComponent } from './cv-form/cv-form.component';
import { UserHeaderComponent } from './partials/user-header/user-header.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    JobCardComponent,
    CvFormComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
