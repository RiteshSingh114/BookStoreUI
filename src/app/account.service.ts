import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http:HttpClient) { }
  basepath = "https://localhost:5001/api/Account";

  Signup(value: any) : Observable<any> {
    console.log(value);
    return this.http.post(this.basepath + "/SignUp", value);
  }

  
}
