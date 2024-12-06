import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  apiUrl = "https://localhost:7138/api/Books"

  constructor(private http: HttpClient) {}

  register(titulo:string,autor:string,editorial:string,anoPublicacion:number,precio:number,stock:number, categoria:string){
    console.log("llego al servicio")
    return this.http.post(`${this.apiUrl}/register`,{titulo,autor,editorial,anoPublicacion,precio,stock,categoria})
  }

}


