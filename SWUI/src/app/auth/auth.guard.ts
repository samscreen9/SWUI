import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  isAuthenticated=false;
  constructor(private router:Router,private authService:AuthServiceService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean 
    {
      this.authService.user.subscribe({
        next:(data)=>this.isAuthenticated=data?true:false,
        error:(error)=>console.log(error)
        })
      if ( localStorage.getItem('token')!=null && this.isAuthenticated)
      {return true;}

      else 
      {this.router.navigateByUrl('login'); return false;}
    }
}
