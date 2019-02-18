import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// user for api methods
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from 'src/app/user/shared/user.model';
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http/src/response';


@Injectable()
export class UserService {

  readonly baseUrl = 'http://localhost:9000';
private Results : any;
 constructor(private http: HttpClient) { }

  postregisterUser(user: User) {

    const body: User = {
      Email: user.Email,
      MobileNumber: user.MobileNumber,
      Password: user.Password
     
    }
    return this.http.post(this.baseUrl + '/api/user', body);
  }
  
  userAuthentication(UName,Pwd)
  {

return this.http.get(this.baseUrl + '/api/user/' + UName + '/' + Pwd)
   .map((res:any)=>{
   // console.log(res);
    return res;
   }).catch(this._handleError);
  }

  public _handleError(err){
    console.log("Error");
    return Observable.throw (err||"Internal Server Error");
  }


  registernewcomplaint(uname,desc) {

const body = {
  Email:uname,
  complaint_description:desc
}
    return this.http.post(this.baseUrl + '/api/NewComplaintReg', body);
    
  }

  complaintstatusupdate(cid,status,cu){
       
    const body = {
      complaint_status:status,
      complaint_updated_date:cu
    }
  
        return this.http.put(this.baseUrl + '/api/complaintstatusupdate/'+cid, body)
        .map((res:any)=>{
           console.log(res);
           return res;
          }).catch(this._handleError);

  }


  }

