import { Component, OnInit } from '@angular/core';
import {dashboardService} from '../../shared/dashboard.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http/src/response';

import { Response } from '@angular/http/src/static_response';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
private Result:any;
  constructor(private _service:dashboardService) { }
  ngOnInit() {

    this._service.portfolioData().subscribe(res=>{
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

}



}
