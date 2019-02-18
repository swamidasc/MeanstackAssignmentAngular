import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/shared/user.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/src/response';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/user/shared/user.model';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  UserName:string;
  Password:string;
 afterloginsuccess:any;
   isLoginError :  boolean = false;
   private result : any;
  constructor(private userService:UserService, 
              private router : Router ) { }

  ngOnInit() {
  }


  OnSubmit(UName:any,Pwd:any){
//console.log(UName);
    this.userService.userAuthentication(UName,Pwd)
    .subscribe((data: any)=>{
      console.log(data);
      if(data.length >= 1)
      {
     //console.log(data);
     
     localStorage.setItem('login_details',JSON.stringify(data[0]['Email']));
     // console.log(localStorage.getItem("login_details"));
       this.router.navigate(['/dashboard']);
      }
      else{
        alert("Please Provide Valid Login Details");
      }
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
 
  }

  }


  
