import { Component } from '@angular/core';
import { RegistrarLibroComponent } from '../registrar-libro/registrar-libro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegistrarLibroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
