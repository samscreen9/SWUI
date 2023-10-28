import { Component, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder ,Validators,FormGroup, FormControl, RequiredValidator} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  regSection = new FormGroup({
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    passwordConfirm:new FormControl('',Validators.required)
  });

constructor(private authService:AuthServiceService){}

onSubmit(){
  console.log(this.regSection.value);
  let registerForm={Email:this.regSection.value.email!,
    Phone:this.regSection.value.phone!,
    firstName:this.regSection.value.firstname!,
    lastName:this.regSection.value.lastname!,
    password:this.regSection.value.password!,
    confirmPassword:this.regSection.value.passwordConfirm!}
  this.authService.register(registerForm).subscribe(
    {
      next:()=>{},
      error:(error)=>{console.log(error);}
    }
  )
}


}

