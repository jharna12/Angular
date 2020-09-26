import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8080/api/v1/book';

  constructor(private http : HttpClient) { }
  getBookList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteBook(bookId: number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${bookId}`,{responseType:'text'});
   
  }
  createBook(book:Object):Observable<Object>{
return this.http.post(`${this.baseUrl}`,book);
  }
  getBook(bookId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${bookId}`);
  }
  updateBook(bookId: number,value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${bookId}`,value);
  }
}
