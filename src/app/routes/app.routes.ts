import {Routes} from "@angular/router";
import { SignInComponent } from 'src/app/user/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/user/sign-up/sign-up.component';
import { UserComponent } from 'src/app/user/user.component';
import { PortfolioComponent } from '../user/component/portfolio/portfolio.component';
import { ContactComponent } from '../user/component/contact/contact.component';
import { AboutComponent } from '../user/component/about/about.component';
import { DashboardComponent } from '../user/component/dashboard/dashboard.component';
import { HomeComponent } from "src/app/home/home.component";

export const appRoutes:Routes = [

    {
              path: 'home', component : HomeComponent
          },
          {
              path: 'signup', component: UserComponent,
              children : [{path: '', component : SignUpComponent}]
          },
          {
              path: 'login', component: UserComponent,
              children: [{path: '', component: SignInComponent}]
          },
          {
              path: '', redirectTo:'/login', pathMatch: 'full'
          },

    // {path:"",component:SignInComponent},
    {path:"dashboard",component:DashboardComponent,
    children:[
        {path:"about",component:AboutComponent},
        {path:"contact",component:ContactComponent},
        {path:"portfolio",component:PortfolioComponent}
    ]}
];