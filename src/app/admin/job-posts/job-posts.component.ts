import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { async } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-posts',
  templateUrl: './job-posts.component.html',
  styleUrl: './job-posts.component.scss'
})
export class JobPostsComponent  implements OnInit{
  constructor(
    private jobService: JobService
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

  publish(id:any){
    console.log(id);

  }
}
