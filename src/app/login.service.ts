import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  basepath = "https://localhost:5001/api/Account/Login";
  login(credentials : any): Observable<any> {
    return this.http.post(this.basepath, credentials);
  }
}
