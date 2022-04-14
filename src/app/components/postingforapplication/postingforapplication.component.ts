import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-postingforapplication',
  templateUrl: './postingforapplication.component.html',
  styleUrls: ['./postingforapplication.component.css']
})
export class PostingforapplicationComponent implements OnInit {
  @Input() post: any;
  public companyInfo:any={
    job_category:'',
    job_title:'',
    job_pay:'',
    job_company:''

  }
  @Input() hasButtons:any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);
    //for applied jobs
    if (this.post.applicant) {
      
      this.data.get_application(this.post._id).subscribe(info => {
        console.log(info);
        this.companyInfo.job_category=info.job.job_category;
        this.companyInfo.job_title=info.job.job_title;
        this.companyInfo.job_pay=info.job.job_pay;
         this.data.get_company_by_id(info.job.job_company).subscribe(company=>{
           console.log(company);
           this.companyInfo.job_company=company.company_name;
         })
      })
    }
    else{
      this.data.get_application(this.post).subscribe(info=>{
        console.log(info);
        this.companyInfo.job_category=info.job.job_category;
        this.companyInfo.job_title=info.job.job_title;
        this.companyInfo.job_pay=info.job.job_pay;
       this.data.get_company_by_id(info.job.job_company).subscribe(company=>{
        this.companyInfo.job_company=company.company_name;
       })
        
      })
    }
  }
  denyOffer(){
    this.data.deny_offer(this.post).subscribe(info=>{
      console.log(info);
    })

  }
  acceptOffer(){
    this.data.accept_offer(this.post).subscribe(info=>{
      console.log(info);
    })
  }

}
