import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BankDashComponent } from './bank-dash/bank-dash.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path:'', redirectTo:'login',pathMatch:'full'
  },
  {
    path: 'login', component: LoginComponent  //login.com.html
   },
   {
    path: 'signup', component: SignupComponent //sign.com.html
  }, 
  {
    path:'Bank' , component: BankDashComponent //rest-dash.com.html
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
