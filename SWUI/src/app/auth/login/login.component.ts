import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder ,Validators,FormGroup, FormControl, RequiredValidator} from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  hide = true;
  public loginForm=new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  constructor(private router:Router,private authservice:AuthServiceService){
  }

  
  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    ////if logged and try to go to login screen without logout it will force you to home page
    {this.router.navigateByUrl('/home');}  
    else{
      this.router.navigateByUrl('/login');
    }
  }
  onSubmit(){
    if (this.loginForm.invalid) // stop here if form is invalid
           { return;
          }
    console.warn(this.loginForm.value);
    let loginData={Username:this.loginForm.value.email!,Password:this.loginForm.value.password!}
    this.authservice.login(loginData).subscribe({
      next:(res:any)=>{localStorage.setItem('token',res.token);
    console.log(res);
    this.router.navigateByUrl('/home');
      },
      error:(error)=>{ //if(err.status==400)
        // this.toaster.error('BadRequest','Authentication Failed');
        console.log(error);
        }
    }
);

  }
  changeData(event:any) {
    var msg = event.target.value;
    //this.user.changeData(msg);
  }
  login(data:any) {
    //this.user.changeData(data);
  }
}
