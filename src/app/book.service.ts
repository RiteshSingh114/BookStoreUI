import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private basePath = "https://localhost:5001/api/Book";
  private token  = localStorage.getItem("token");
  constructor(private http : HttpClient) { }

  public getBooks() : Observable<any> {
    const options = {
      headers: new HttpHeaders().set("Authorization",
      "Bearer " + this.token)
    }
    console.log(this.basePath+"/getAll",options);
    return this.http.get(this.basePath+"/getAll",options);
  }

  public AddBook(book: any) : Observable<any> {
    return this.http.post(this.basePath,book);
  }
}
