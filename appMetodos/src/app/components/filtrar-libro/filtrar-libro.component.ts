import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { BookServiceService } from '../../services/book-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-filtrar-libro',
  standalone: true,
  imports: [TableModule,ButtonModule,InputTextModule,ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './filtrar-libro.component.html',
  styleUrl: './filtrar-libro.component.css'
})
export class FiltrarLibroComponent {

  libro: any[] = []; 
  id: string = ''; 
  errorMessage: string = '';
  isLoading: boolean = false; 
  constructor(private bookService: BookServiceService){}

   
   searchBookById(): void {
    if (!this.id) {
      this.errorMessage = 'Por favor, ingresa un ID válido.';
      return;
    }
  
    this.isLoading = true;
    this.bookService.getBookById(this.id).subscribe({
      next: (libro) => {
        this.libro = libro ? [libro] : [];
        this.errorMessage = this.libro.length ? '' : 'No se encontró ningún libro con este ID.';
      },
      error: () => {
        this.errorMessage = 'Error al buscar el libro.';
        this.libro = [];
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

  onDelete(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => console.log('ususario eliminado'),
      error: () => console.log('error en la eliminacion del usuario'),
      complete: () => console.log('proceso completado')
    })
  }

}
