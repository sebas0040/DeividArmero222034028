import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  apiUrl = "https://localhost:7138/api/Books"

  constructor(private http: HttpClient) {}

  register(titulo:string,autor:string,editorial:string,anoPublicacion:number,precio:number,stock:number, categoria:string):Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,{titulo,autor,editorial,anoPublicacion,precio,stock,categoria})
  }

  update(id:number,titulo:string,autor:string,editorial:string,anoPublicacion:number,precio:number,stock:number,categoria:string){
    return this.http.put(`${this.apiUrl}/update/${id}`,{titulo,autor,editorial,anoPublicacion,precio,stock,categoria})
  }
  deleteBook(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
  }
  getBooks(): Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/getBooks`)
  }
  getBookById(id:string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getBookById/${id}`)
  }

}


