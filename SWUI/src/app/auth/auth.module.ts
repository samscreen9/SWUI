import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';


import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [LoginComponent,AuthComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent,AuthComponent,RegisterComponent]
})
export class AuthModule {
  constructor(){
    console.log("AuthModule Loaded");
  }
 }
