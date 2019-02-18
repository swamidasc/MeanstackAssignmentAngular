import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user/shared/user.service';
import { User } from 'src/app/user/shared/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  registrationsuccessmessage:any;

  constructor(private userService: UserService,
    private _router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form != null)
   form.reset();
   this.user={
    MobileNumber: '',
     Password: '',
     Email: ''
   } 
  }

  OnSubmit(form: NgForm)
  {
    //console.log(form.value);
     this.userService.postregisterUser(form.value).subscribe((data: any)=>{
       //console.log(data);
       this.registrationsuccessmessage=data.message;
       this.resetForm();
       this._router.navigate(["../login"]);
     });
  }

}

