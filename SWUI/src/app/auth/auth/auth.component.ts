import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
constructor(){

}
flag=false;
toggle(){
  this.flag=!this.flag;
}
}
