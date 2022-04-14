import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
PendingJobs:any;
JobsOffered:any;
DeniedJobs:any;
pendingJobExist=true;
offeredJobExist=true;
deniedJobExist=true;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('test');
this.data.get_deniedJobs().subscribe(info=>{
  console.log(info);
  this.DeniedJobs=info.applications;
  if(this.DeniedJobs.length==0){
    this.deniedJobExist=false;
  }
})

this.data.get_pendingJobs().subscribe(info=>{
  console.log(info);
  this.PendingJobs=info.applications;
  if(this.PendingJobs.length==0){
    this.pendingJobExist=false;
  }
  
})
this.data.get_jobsOffered().subscribe(info=>{
  console.log(info);
  this.JobsOffered=info.applications;
  if(this.JobsOffered.length==0){
    this.offeredJobExist=false;
  }
})

  }

}
