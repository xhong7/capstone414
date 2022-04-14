import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applicantspage',
  templateUrl: './applicantspage.component.html',
  styleUrls: ['./applicantspage.component.css']
})
export class ApplicantspageComponent implements OnInit {
  manager: any;
  applicant: any;
  postings: any;
  jobExist: any;

  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.manager = false;
    this.applicant = false;

    if (this.data.company_id) {
      this.manager = true;
    }
    else {
      this.applicant = true;
    }
    if (this.data.company_id) {
      this.data.get_applicants_for_job(this.data.post._id).subscribe(info => {
        console.log(this.data.post._id);
        console.log(info);
        if (info.length == 0) {
          this.jobExist = false;
        }
        else {
          this.jobExist = true;
          this.postings = info.profiles;
        }

      })
    }
    else
    {
      this.jobExist = false;
    }
  }

}
