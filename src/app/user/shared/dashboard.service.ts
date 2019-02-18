import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class dashboardService{
    readonly baseUrl = 'http://localhost:9000';
    constructor(private _http: HttpClient){};

a:any;
b:any;
public aboutData():any{
    
    var username = localStorage.getItem('login_details');
    var Email = localStorage.getItem('login_details');
     
    Email = Email.replace(/^"|"$/g, '');

    if(Email=='swamidas@gmail.com'){
        this.a=this._http.get(this.baseUrl + '/api/getcomplaints')
        
    }
    else{
        this.a=this._http.get(this.baseUrl + '/api/getcomplaintsid/'+Email)  
    }

    console.log(this.a);
    //return this._http.get(this.baseUrl + '/api/getcomplaintsid/'+Email).map((res:any)=>{
    return this.a.map((res:any)=>{

        return res;

    }).catch(this._handleError);
}
public _handleError(err){

    return Observable.throw (err||"Internal Server Error");
}

    public contactData():any{
        var username = localStorage.getItem(JSON.parse('login_details'))

        return this._http.post(this.baseUrl + '/contact',{'username':username});
    }

    public portfolioData():any{
        var username = localStorage.getItem(JSON.parse('login_details'))
        
        return this._http.post(this.baseUrl + '/portfolio',{'username':username});
    }


}