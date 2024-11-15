import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DataServiceService {

  apiUrl = "https://localhost:7251/api/Registro"
  formData:any={}
  constructor(private http:HttpClient) { 
  }
  
  updateFormData(data: Partial<typeof this.formData>) {
    this.formData = { ...this.formData, ...data };  
    console.log('Datos acumulados:', this.formData); 
    if (Object.keys(this.formData).length==9){
      console.log('se llama a register')
      this.register().subscribe( response => (console.log("Los datos son validos")) )
    } 

  }
  register():Observable<any>
  { 
    return this.http.post(`${this.apiUrl}/register`,this.formData);
  }
}