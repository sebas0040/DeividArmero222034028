import { Component } from '@angular/core';
import { RegistrarLibroComponent } from '../registrar-libro/registrar-libro.component';
import { MenuLibrosComponent } from '../menu-libros/menu-libros.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenuLibrosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
