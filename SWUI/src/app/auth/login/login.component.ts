import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(){
  }
  hide = true;

  changeData(event:any) {
    var msg = event.target.value;
    //this.user.changeData(msg);
  }
  login(data:any) {
    //this.user.changeData(data);
  }
}
