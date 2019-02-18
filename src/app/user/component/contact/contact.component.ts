import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/shared/user.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/src/response';

import { Router } from "@angular/router";
import { UserService } from 'src/app/user/shared/user.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _router:Router,private userService:UserService) { }
  private Result:any;
  description:any;
  username:any;
  user: User;
  useremail:any;
  ngOnInit() { }

  complaintregistration(data){

    this.useremail=localStorage.getItem('login_details').replace(/^"|"$/g, '');
    this.username=this.useremail;
   
    this.description=data;
   
    this.userService.registernewcomplaint(this.username,this.description).subscribe((data: any)=>{
   
      this._router.navigate(["/dashboard/about"]);
     
    }
     
    );

  }




}
