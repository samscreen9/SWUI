import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
                         {path:"",component:AuthComponent},
                         {path:"login",component:AuthComponent},
                         {path:"home",canActivate:[AuthGuard], component:HomeComponent}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
