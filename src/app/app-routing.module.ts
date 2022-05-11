import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from "../app/components/registrationpage/registrationpage.component";
import { LoginComponent } from "../app/components/login/login.component";
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from "./components/dashboard/dashboard.component";

import { GetallnotesComponent } from "./components/getallnotes/getallnotes.component";
const routes: Routes = [
  { path: "registrationpage", component: RegisterComponent  },
  { path: "login", component: LoginComponent },
  { path: "forgotPassword", component: ForgotpasswordComponent },
  { path: "resetpassword/:token", component: ResetpasswordComponent },
  
  
  { 
    path: "dashboard", component: DashboardComponent ,

  children: [
    { path: '', redirectTo: "/dashboard/getallnotes", pathMatch: 'full' },
    { path: "getallnotes", component: GetallnotesComponent },

  ]

},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
