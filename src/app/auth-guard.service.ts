import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()

export class AuthGuardService implements CanActivate{

    constructor(private auth:AuthService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return  this.auth.isAuth().then((isLoggedIn: boolean)=>{
            if (isLoggedIn) {
                return true;
            } else {
                return false;
            }
        });
    }
}
