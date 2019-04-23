import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';
import {Employee} from '../employee';
import {environment} from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('goooooooooooooooooollllll'); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiurl + '/Employee/GetEmployee');
  }

  checkEmployee(name, password) {
    return this.http.get<boolean>(environment.apiurl + '/Employee/CheckEmployee?name=' + name + '&password=' + password).toPromise();
    // return this.http.get<Employee[]>(environment.apiurl + "/Employee/CheckEmployee");
  }

  signUp(Name: string, Password: string) {
    const employee = {Name, Password} as Employee;
    console.log(employee);
    return this.http.post<String>(environment.apiurl + '/Employee/AddEmployee', employee).toPromise();
  }


}
