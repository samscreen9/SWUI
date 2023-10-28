import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  isAuthenticated:boolean=false;
  constructor(private authservice:AuthServiceService){

  }
  ngOnInit(){
    this.authservice.user.subscribe({
    next:(data)=>this.isAuthenticated=data?true:false,
    error:(error)=>console.log(error)
    });
}
onlogout(){
  this.authservice.logout();
}
}
