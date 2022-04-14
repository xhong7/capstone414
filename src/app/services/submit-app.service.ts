import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_path = 'https://g13jobapiv2.herokuapp.com/api/auth/login';
const api_path_user='https://g13jobapiv2.herokuapp.com/api/users/' //+id
const api_path2='https://g13jobapiv2.herokuapp.com/api/auth/register';
let api_path3 = 'https://g13jobapiv2.herokuapp.com/api/company/register_company/';// Register company as a manager of the company
const api_path4 = 'https://g13jobapiv2.herokuapp.com/api/profile/create_applicant/';
const api_path5 = 'https://g13jobapiv2.herokuapp.com/api/profile/620ffb284d3dbfcd53d8d074'; //test profile
let api_path6 = 'https://g13jobapiv2.herokuapp.com/api/profile/applicant/' //get profile, need to append profile id at the end
const api_path7 = 'https://secret-castle-85858.herokuapp.com/api/company/620c5e2956556e6985a37cbc'; //test company
let api_path8 = 'https://g13jobapi.herokuapp.com/api/company/' //get company, need to append company id at the end
let api_path9 = 'https://g13jobapiv2.herokuapp.com/api/document/applicant/upload/' //upload resume
let api_path10 = 'https://g13jobapiv2.herokuapp.com/api/document/company/upload/' //upload logo
let api_path11='https://g13jobapiv2.herokuapp.com/api/company/register_manager/' // Register a manager for the company as a manager
let api_path12 = 'https://g13jobapiv2.herokuapp.com/api/document/company/' //get logo
let api_path13 = 'https://g13jobapiv2.herokuapp.com/api/image/applicant/upload/'
let api_path14 = 'https://g13jobapiv2.herokuapp.com/api/company/edit_company/' //manager edits page
let api_path15='https://g13jobapiv2.herokuapp.com/api/job'
let api_path16='https://g13jobapiv2.herokuapp.com/api/company/addjob/'// Add a job as a manager of the company
let api_path17='https://g13jobapiv2.herokuapp.com/api/company/getjobs/'//get jobs under a certain company
let api_path18='https://g13jobapiv2.herokuapp.com/api/company/edit_job/' //edit a job
let api_path19='https://g13jobapiv2.herokuapp.com/api/company/deletejob/' //delete a job
let api_path20='https://g13jobapiv2.herokuapp.com/api/job/filter_job'
let api_path21='https://g13jobapiv2.herokuapp.com/api/job/apply/' //apply for a job
let api_path22='https://g13jobapiv2.herokuapp.com/api/job/applied_jobs/'
let api_path23='https://g13jobapiv2.herokuapp.com/api/job/get_job/'//get job details using application id
let api_path24='https://g13jobapiv2.herokuapp.com/api/job/rejected_applications/' //get denied jobs
let api_path25='https://g13jobapiv2.herokuapp.com/api/job/offered_jobs/' //get jobs offered
let api_path26='https://g13jobapiv2.herokuapp.com/api/job/' //get job using job id
let api_path27='https://g13jobapiv2.herokuapp.com/api/job/accept/' //applicants accept offer
let api_path28='https://g13jobapiv2.herokuapp.com/api/job/deny/' //applicants deny offer
let api_path29='https://g13jobapiv2.herokuapp.com/api/see_applicant/' //see a particular applicant
let api_path30='https://g13jobapiv2.herokuapp.com/api/job/applicants_job/' //get applicants for a job
let api_path31='https://g13jobapiv2.herokuapp.com/api/company/get_appli_id/'
let api_path32='https://g13jobapiv2.herokuapp.com/api/company/accept_appli/' //accept appli patch
let api_path33='https://g13jobapiv2.herokuapp.com/api/company/offer_appli/' //offer appli patch
let api_path34='https://g13jobapiv2.herokuapp.com/api/company/deny_appli/' //deny appli patch

@Injectable({
  providedIn: 'root'
})
export class SubmitAppService {
email_address:String;
role:String;
userId:String;
company_id:String;
company:any;
profile_id:String;
profile:any;
newManager:String;
post:any;
job_id:any;
postManager:any;
  constructor(private http: HttpClient){ }

  get_user(id:any):Observable<any>{
    return this.http.get<any>(api_path_user+id);
  }

  submit_app_form(data:any) : Observable<any>
  {
    return this.http.post<any>(api_path,data);
  }
  register_app_form(data:any):Observable<any>{
    return this.http.post<any>(api_path2,data);
  }
  
  register_company_form(data:any):Observable<any>{
    return this.http.post<any>(api_path3+this.userId,data);
  }

  register_profile_form(data:any):Observable<any>{
    return this.http.post<any>(api_path4+this.userId,data);
  }

  get_profile(): Observable<any>
  {
    return this.http.get<any>(api_path5);
  }

  get_profile_by_id(id: String): Observable<any>
  {
    
    
    return this.http.get<any>(api_path6+id);
  }

  get_company(): Observable<any>
  {
    return this.http.get<any>(api_path7);
  }

  get_company_by_id(id: String): Observable<any>
  {
    
    return this.http.get<any>(api_path8+id);
  }

  upload_resume(data: any):Observable<any>{
    return this.http.post<any>(api_path9+this.userId,data);
  }

  upload_logo(data: any):Observable<any>{
    return this.http.post<any>(api_path10+this.userId+'/'+this.company_id,data);
  }

  get_logo(fileId: String): Observable<any>
  {
    return this.http.get<any>(api_path12+this.company_id+'/'+fileId);
  }

  upload_pic(data: any):Observable<any>{
    return this.http.post<any>(api_path13+this.userId,data);
  }

  add_manager(data:any):Observable<any>{
    return  this.http.patch<any>(api_path11+this.userId+'/'+this.company_id+'/'+data,this.newManager);
  }

  update_company_page(data:any):Observable<any>{
    return  this.http.patch<any>(api_path14+this.userId+'/'+this.company_id, data);
  }
  get_jobs():Observable<any>{
    return this.http.get<any>(api_path15);
  }
  add_jobs(data:any):Observable<any>{
    return  this.http.patch<any>(api_path16+this.userId+'/'+this.company_id,data);
  }
  get_jobsforCompany():Observable<any>{
    return this.http.get<any>(api_path17+this.company_id);
  }

  edit_job(data:any):Observable<any>{
    return this.http.patch<any>(api_path18+this.userId+'/'+this.company_id+'/'+this.job_id,data);
  }

  delete_job(jobID: any):Observable<any>{
    return this.http.delete<any>(api_path19+this.userId+'/'+this.company_id+'/'+jobID); //:manager_id/:company_id/:job_id
  }
  get_jobofCondition(params:any):Observable<any>{
    return this.http.get<any>(api_path20,{params});
  }
  apply_job(jobID: any):Observable<any>{
    return this.http.patch<any>(api_path21+this.userId+'/'+jobID,jobID);
  }
  get_pendingJobs():Observable<any>{
    return this.http.get<any>(api_path22+this.userId);
  }

  see_applicant(jobID: any, profileID: any):Observable<any>{
    //:mana_recru_id/:company_id/:job_id/:applicant_profile_id
    return this.http.get<any>(api_path29+this.userId + '/' + this.company_id + '/' + jobID + '/' + profileID);
  }

  get_applicants_for_job(jobID: any):Observable<any>{
    //:mana_recru_id/:company_id/:job_id 
    return this.http.get<any>(api_path30+this.userId + '/' + this.company_id + '/' + jobID);
  }

  get_application_id_from_profile(profileID: any, jobID: any):Observable<any>{
    //:profile_id/:job_id
    return this.http.get<any>(api_path31 + profileID + '/' + jobID);
  }

  accept_applicant(appID: any):Observable<any>{
    //:mana_recru_id/:company_id/:application_id
    return this.http.patch<any>(api_path32 +this.userId + '/' + this.company_id + '/' + appID, null);
  }

  offer_applicant(appID: any):Observable<any>{
    //:mana_recru_id/:company_id/:application_id
    return this.http.patch<any>(api_path33 +this.userId + '/' + this.company_id + '/' + appID, null);
  }

  deny_applicant(appID: any):Observable<any>{
    //:mana_recru_id/:company_id/:application_id
    return this.http.patch<any>(api_path34 +this.userId + '/' + this.company_id + '/' + appID, null);
  }

  get_application(applicationId:any):Observable<any>{
    return this.http.get<any>(api_path23+applicationId);
  }
  get_deniedJobs():Observable<any>{
    return this.http.get<any>(api_path24+this.userId);
  }
  get_jobsOffered():Observable<any>{
    return this.http.get<any>(api_path25+this.userId);
  }
  get_JobUsingId(jobId:any):Observable<any>{
    return this.http.get<any>(api_path26+jobId);
  }
  accept_offer(applicationId:any):Observable<any>{
    return this.http.patch<any>(api_path27+this.userId+'/'+applicationId,applicationId);

  }
  deny_offer(applicationId:any):Observable<any>{
    return this.http.patch<any>(api_path28+this.userId+'/'+applicationId,applicationId);
  }
}
