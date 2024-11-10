import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Password } from 'primeng/password';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = "https://localhost:7173/api/Users"

  constructor( private http: HttpClient) { 
     
  }
  login( username: string, password: string):Observable<any>{
    // const body = {username,password};
    return this.http.post(`${this.apiUrl}/login`,{username, password})//lo que esta haciendo es tomar this.apiUrl   que va a llegar la va a concatenear con /login 


  }
  register( username: string, password: string):Observable<any>{
    const body = {username,password};
    return this.http.post(`${this.apiUrl}/register`,{username, password})//lo que esta haciendo es tomar this.apiUrl   que va a llegar la va a concatenear con /login 


  }
}
