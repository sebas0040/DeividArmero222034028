import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { 
  }
  register(
    data: { 
            name?:string|null,
            apellido?:string|null,
            email?:string|null,
            tel?:string|null,

            nameGerente?:string|null,
            emailGerente?:string|null,

            fech_inicio?: Date|null, 
            fech_fin?: Date|null, 
            descripcion?: string|null,
          })
  {
    console.log(data.fech_fin,data.fech_inicio,data.descripcion,data.nameGerente,data.emailGerente,data.email,data.name,data.apellido,data.tel)
  }
}
