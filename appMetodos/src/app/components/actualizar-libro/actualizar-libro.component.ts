import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BookServiceService } from '../../services/book-service.service';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-actualizar-libro',
  standalone: true,
  imports: [HttpClientModule, CommonModule, ButtonModule, InputTextModule, ReactiveFormsModule,DropdownModule,MessageModule],
  templateUrl: './actualizar-libro.component.html',
  styleUrl: './actualizar-libro.component.css'
})
export class ActualizarLibroComponent {

  form:FormGroup;
  deleteForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor (private fb:FormBuilder, private bookService:BookServiceService){
    this.form = this.fb.group({
      id_libro:['',Validators.required],
      titulo:['',[Validators.required,Validators.maxLength(255)]],
      autor:['',[Validators.required,Validators.maxLength(255)]],
      editorial:['',[Validators.required,Validators.maxLength(255)]],
      anoPublicacion:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required],
      categoria:['',[Validators.required,Validators.maxLength(100)]],
    });

    this.deleteForm = this.fb.group({
      id_libro:['',Validators.required]
    });

  };
  onSubmit(){
    if (this.form.valid){
      const {id_libro,titulo,autor,editorial,anoPublicacion,precio,stock,categoria} = this.form.value
      this.bookService.update(id_libro,titulo,autor,editorial,anoPublicacion,precio,stock,categoria).subscribe({
        next: response =>{
          console.log("El libro se actualizo correctamente",response)
          this.form.reset()
        },
        error: error =>{
          console.error("Error en la actulaización del libro",error)
        },
        complete:() =>{
          console.log("Proceso completado correctamente")
        }

      })
    }
  }

  onDelete(): void {
    if (this.deleteForm.valid) {
      const { id_libro } = this.deleteForm.value;
      this.bookService.deleteBook(id_libro).subscribe({
        next: (response) => {
          console.log("respuesta del back", response)
          this.successMessage = 'Usuario eliminado exitosamente.';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: (error) => {
          console.log("error del back",error)
          this.errorMessage = 'Error al eliminar el usuario.';
          this.successMessage = '';
        },
        complete: () => console.log('Proceso de eliminación completado'),
      });
    }
  }
}
