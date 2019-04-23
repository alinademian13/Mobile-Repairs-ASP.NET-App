import {Component} from '@angular/core';

import {Router} from '@angular/router';
import {Employee} from '../employee';
import {ApiService} from '../service/api.service';
import {AuthService} from '../service/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  title = 'Mobile Repairs App';
  employees: Array<Employee>;
  itExist: boolean;
  error: string;

  constructor(private api: ApiService,
              private auth: AuthService,
              private router: Router) {
  }

  getEmployees() {
    this.api.getEmployees().subscribe(
      employees => this.employees = employees,
      error => {
        return this.error = error as any;
      },
    );
  }

  checkUser(name: string, password: string) {
    this.api.checkEmployee(name, password).then(rsp => {
      this.itExist = rsp;
      if (this.itExist) {
        this.router.navigate(['client']);
      }
    }, err => {
      console.log('error', err);
    });


  }

  signUp() {
    this.router.navigate(['signUp']);
  }

}


