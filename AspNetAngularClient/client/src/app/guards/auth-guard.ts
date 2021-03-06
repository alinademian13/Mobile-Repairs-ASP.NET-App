import {CanActivate} from '@angular/router/src/utils/preactivation';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  path: import('G:/POSTUNIV/Mobile Repairs App/AspNetAngularClient/client/node_modules/@angular/router/src/router_state').ActivatedRouteSnapshot[];
  route: import('G:/POSTUNIV/Mobile Repairs App/AspNetAngularClient/client/node_modules/@angular/router/src/router_state').ActivatedRouteSnapshot;

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate() {
    if (!this.auth.isAuth) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
