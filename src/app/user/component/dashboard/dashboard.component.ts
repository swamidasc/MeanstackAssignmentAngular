import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {dashboardService} from '../../shared/dashboard.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private Result:any;
  public useremailid:any;
  public isAgent:boolean;
  constructor(private _router:Router,private _service:dashboardService) { }

  ngOnInit() {
    this.useremailid=localStorage.getItem('login_details');
    //this.isAgent=this.useremailid;
   
   var agent = this.useremailid.replace(/^"|"$/g, '');

    if(agent === "swamidas@gmail.com")
    {this.isAgent=true}
    else{
      {this.isAgent=false}
    }    

  }

   logout(){
    //console.log(localStorage.getItem(JSON.parse("login_details")));
   console.log( localStorage.getItem('login_details'));
    localStorage.removeItem('login_details');
    
   // console.log( localStorage.getItem('login_details'));
    this._router.navigate(["/login"]);
  }


}