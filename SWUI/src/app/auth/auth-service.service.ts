import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { BehaviorSubject, Subject, catchError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserData } from './userData.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user= new BehaviorSubject<UserData|null>(null);
  isLoggedIn=false;
  constructor(private http:HttpClient,private router:Router) { }
  readonly BaseURI="http://localhost:5166";

  login(loginForm:{Username:string,Password:string}){ //name you provide for parameters here  must be corroesponding to model in c#
    return this.http.post<any>(this.BaseURI+'/api/Auth/login',loginForm)
    .pipe(tap(resData=>{
      this.handleAuthentication(
        resData.email,
        resData.token,
        resData.expiration)
      }))
 }

 private handleAuthentication(email:string,token:string,expiration:number){
    const tokenExpirationTime=new Date(new Date().getTime()+expiration*1000);
    const user= new UserData(email,token,tokenExpirationTime)
    this.user.next(user);
 }

 logout(){
  localStorage.clear();
  this.user.next(null);
  this.router.navigate(["/login"]);
 }
 
}
