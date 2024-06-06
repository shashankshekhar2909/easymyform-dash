import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {
  constructor(
    private jobService: JobService,
    private router: Router
  ){}
  jobPostList:any = [];
  ngOnInit(): void {
      this.getJobs();
  }

  getJobs=()=>{
    this.jobService.getJobPost().subscribe({
      next: (resp:any) => {
        this.jobPostList = resp.results;
        console.log(resp);
      },
      error: (HttpResponse: HttpErrorResponse) => {
        console.log(HttpResponse);

      }
    });
  }

  openJob(id:any){
    console.log(id);
    this.router.navigate(['/admin/job-details/'+id])
  }
}
