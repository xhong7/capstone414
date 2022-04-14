import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-postingformanager',
  templateUrl: './postingformanager.component.html',
  styleUrls: ['./postingformanager.component.css']
})
export class PostingformanagerComponent implements OnInit {
  @Input() post: any;
  manager: any;
  applicant: any;
  company:any;
  resumeUrl: any;
  theDocument: any;

  theEmail: any;
  thePicId: any;
  thePic: any;
  applicationID: any;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.post);

    this.manager = false;
    this.applicant = false;

    this.data.get_application_id_from_profile(this.post._id, this.data.post._id).subscribe(info => {
      console.log(info);
      this.applicationID = info.app_id;
    })
  }

  // downloadResume()
  // {
  //   this.resumeUrl = "https://g13jobapi.herokuapp.com/api/document/applicant";

  //   const link = document.createElement('a');
  //   link.setAttribute('target', '_blank');
  //   link.setAttribute('href', this.resumeUrl+'/'+this.post._id+'/'+this.post.profile_document);
  //   link.setAttribute('download', ``);
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // }

  acceptApplicant()
  {
    this.data.accept_applicant(this.applicationID).subscribe(info => {
      console.log(info);
    });

    this.data.offer_applicant(this.applicationID).subscribe(info => {
      console.log(info);
    });
    this.router.navigate(['/home']);
  }

  denyApplicant()
  {
    this.data.deny_applicant(this.applicationID).subscribe(info => {
      console.log(info);
    });
    this.router.navigate(['/home']);
  }
}
