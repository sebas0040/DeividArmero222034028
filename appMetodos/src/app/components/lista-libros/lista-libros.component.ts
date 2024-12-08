import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [TableModule,ButtonModule,HttpClientModule,CommonModule],
  templateUrl: './lista-libros.component.html',
  styleUrl: './lista-libros.component.css'
})
export class ListaLibrosComponent {
  libros: any[] = []
  errorMessage: string = ''

  constructor(private bookService: BookServiceService,private router:Router){
    this.loadBooks()
  }

  loadBooks(){
    this.bookService.getBooks().subscribe({
      next: (libros) => {
        this.libros = libros
      },
      error: () => {
        this.errorMessage = 'Error al cargar los usuarios'
      }
    })
  }
  onDelete(id: number): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        console.log('ususario eliminado'),
        this.loadBooks()
      },
      error: () => console.log('error en la eliminacion del usuario'),
      complete: () => console.log('proceso completado')
    })   
    
  }
  onEdit(libro:any):void{
    this.router.navigate(['/actualizar-libro',libro])
  }
  
}
