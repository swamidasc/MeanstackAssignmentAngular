import { Component, OnInit } from '@angular/core';
import {dashboardService} from '../../shared/dashboard.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from "@angular/router";
import { UserService } from 'src/app/user/shared/user.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

private Result:any;
display = false;
public isAgent:boolean;
cid:any;
cdescription:any;
  constructor(private _service:dashboardService,private _router:Router,private userService:UserService) { }
  status:any;
  username:any;
  useremail:any;
  public useremailid:any;
  cu:Date;
  ngOnInit() {


    this._service.aboutData().subscribe(res=>{
   
      this.Result=res;
     
     },
     (err:HttpErrorResponse)=>{
       if(err.error instanceof Error)
       {
         console.log("Cleint Side Error");
       }
       else
       {
         console.log("Server Side Error");
       }
     }
    );

    this.useremailid=localStorage.getItem('login_details');
    //this.isAgent=this.useremailid;
   
   var agent = this.useremailid.replace(/^"|"$/g, '');

    if(agent === "swamidas@gmail.com")
    {this.isAgent=true}
    else{
      {this.isAgent=false}
    }    

  }


   ViewComplaint(id,description) {
    this.cid=id;
    this.cdescription=description;
    this.display = true;
   
  }


  complaintstatus(data){

    this.useremail=localStorage.getItem('login_details').replace(/^"|"$/g, '');
    this.username=this.useremail;
   
    this.status=data;
    this.cu=new Date();
   
   // alert(this.status);
    this.userService.complaintstatusupdate(this.cid,this.status,this.cu).subscribe((data: any)=>{
         this._router.navigate(["/dashboard"]); 
         
    }
     
    );

  }

  Close(){
    this.display = false;
  }



}
