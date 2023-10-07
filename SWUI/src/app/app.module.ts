import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { MatButtonModule } from '@angular/material/button';//
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';//
import { MatIconModule } from '@angular/material/icon';//


import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthModule } from './auth/auth.module';



import { NavigateComponent } from './Layout/navigate/navigate.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './home/home.component'

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProfileViewComponent } from './Profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './Profile/profile-edit/profile-edit.component';
import { MenubarComponent } from './Layout/menubar/menubar.component';//

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    FooterComponent,
    HomeComponent,
    ProfileViewComponent,
    ProfileEditComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("AppModule Loaded");
  }
  
 }
