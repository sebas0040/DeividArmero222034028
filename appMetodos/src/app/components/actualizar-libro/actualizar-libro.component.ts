import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { BookServiceService } from '../../services/book-service.service';
import { MessageModule } from 'primeng/message';
import { ActivatedRoute } from '@angular/router';
import { ToggleButtonModule } from 'primeng/togglebutton';

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
  successMessageL = '';
  errorMessageL = '';
  successMessage = '';
  errorMessage = '';
  idl=0;

  constructor (private fb:FormBuilder, private bookService:BookServiceService, private route:ActivatedRoute){
    this.form = this.fb.group({
      id:['',Validators.required],
      titulo:['',[Validators.required,Validators.maxLength(255)]],
      autor:['',[Validators.required,Validators.maxLength(255)]],
      editorial:['',[Validators.required,Validators.maxLength(255)]],
      anoPublicacion:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required],
      categoria:['',[Validators.required,Validators.maxLength(100)]],
    });

    this.deleteForm = this.fb.group({
      id:['',Validators.required]
    });

    this.ngOnInit()

  };
  onSubmit(){
    if (this.form.valid){
      this.form.get('id')?.enable();
      const {id,titulo,autor,editorial,anoPublicacion,precio,stock,categoria} = this.form.value
      this.bookService.update(id,titulo,autor,editorial,anoPublicacion,precio,stock,categoria).subscribe({
        next: response =>{
          console.log("El libro se actualizo correctamente",response)
          this.successMessageL = 'Libro actualizado exitosamente.';
          this.errorMessageL = '';
          this.form.reset()
        },
        error: error =>{
          console.error("Error en la actulaización del libro",error)
          this.successMessageL = 'Hubo un error al actualizar al usuario';
          this.errorMessageL = '';
        },
        complete:() =>{
          console.log("Proceso completado correctamente")
        }

      })
    }
  }

  onDelete(): void {
    if (this.deleteForm.valid) {
      const { id } = this.deleteForm.value;
      this.bookService.deleteBook(id).subscribe({
        next: (response) => {
          console.log("respuesta del back", response)
          this.successMessage = 'Libro eliminado exitosamente.';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: (error) => {
          console.log("error del back",error)
          this.errorMessage = 'Error al eliminar el libro.';
          this.successMessage = '';
        },
        complete: () => console.log('Proceso de eliminación completado'),
      });
    }
  }
  ngOnInit(): void {
    // Obtén el parámetro 'id' de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    this.idl = idParam ? +idParam : 0;  // Asigna 0 si el id es nulo
    this.toggleDisabled()

  }
  toggleDisabled() {
    if (this.idl !== 0) {
      this.form.get('id')?.disable();
      this.form.get('id')?.setValue(this.idl);
    } else {
      this.form.get('id')?.enable();
    }
  }
}
