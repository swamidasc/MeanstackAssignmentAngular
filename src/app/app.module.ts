import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './user/shared/user.service';
import { RouterModule } from '@angular/router';
//import { appRoutes } from 'src/app/routes';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { SignInComponent } from 'src/app/user/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/user/sign-up/sign-up.component';
import { UserComponent } from 'src/app/user/user.component';
import { Routes } from '@angular/router';
import { PortfolioComponent } from './user/component/portfolio/portfolio.component';
import { ContactComponent } from './user/component/contact/contact.component';
import { AboutComponent } from './user/component/about/about.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';

import { appRoutes } from "./routes/app.routes";
import { dashboardService } from 'src/app/user/shared/dashboard.service';



// const appRoutes: Routes=[
  
//   {
//       path: 'home', component : HomeComponent
//   },
//   {
//       path: 'signup', component: UserComponent,
//       children : [{path: '', component : SignUpComponent}]
//   },
//   {
//       path: 'login', component: UserComponent,
//       children: [{path: '', component: SignInComponent}]
//   },
//   {
//       path: '', redirectTo:'/login', pathMatch: 'full'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,dashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
