import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RegistrarLibroComponent } from '../registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from '../actualizar-libro/actualizar-libro.component';
import { ListaLibrosComponent } from '../lista-libros/lista-libros.component';
import { FiltrarLibroComponent } from '../filtrar-libro/filtrar-libro.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-libros',
  standalone: true,
  imports: [ButtonModule,CommonModule,RegistrarLibroComponent,ActualizarLibroComponent,ListaLibrosComponent,FiltrarLibroComponent],
  templateUrl: './menu-libros.component.html',
  styleUrl: './menu-libros.component.css'
})
export class MenuLibrosComponent {
  currentComponent: string = 'registrar'; // Controla el componente activo

  changeComponent(component: string) {
    console.log("si se llamo al metodo")
    this.currentComponent = component;
  }
}
