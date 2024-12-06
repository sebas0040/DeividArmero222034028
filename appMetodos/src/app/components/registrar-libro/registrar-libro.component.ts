import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BookServiceService } from '../../services/book-service.service';

@Component({
  selector: 'app-registrar-libro',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule,DropdownModule],
  templateUrl: './registrar-libro.component.html',
  styleUrl: './registrar-libro.component.css'
})
export class RegistrarLibroComponent {

  form:FormGroup
  constructor (private fb:FormBuilder, private bookService:BookServiceService){
    this.form = this.fb.group({
      titulo:['',[Validators.required,Validators.maxLength(255)]],
      autor:['',[Validators.required,Validators.maxLength(255)]],
      editorial:['',[Validators.required,Validators.maxLength(255)]],
      anoPublicacion:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required],
      categoria:['',[Validators.required,Validators.maxLength(100)]],
    })
  }
  onSubmit(){
    if (this.form.valid){
      const {titulo,autor,editorial,anoPublicacion,precio,stock,categoria} = this.form.value
      console.log('llego al onsubmit y tiene los datos ',titulo,autor,editorial,anoPublicacion,precio,stock,categoria)
      this.bookService.register(titulo,autor,editorial,anoPublicacion,precio,stock,categoria).subscribe({
        next: response =>{
          console.log("El libro se registro correctamente",response)
        },
        error: error =>{
          console.error("Error en el registro del libro",error)
        },
        complete:() =>{
          console.log("Proceso completado correctamente")
        }

      })
    }

  }

}
