import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filteruser',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './filteruser.component.html',
  styleUrl: './filteruser.component.css'
})
export class FilteruserComponent {

  users: any[] = []; // Almacena los usuarios filtrados.
  userId: string = ''; // ID ingresado por el usuario.
  errorMessage: string = '';
  isLoading: boolean = false; // Indica si la búsqueda está en progreso.

  constructor(private loginService: LoginService) {}

  // Método para buscar usuarios por ID
  searchUserById(): void {
    if (!this.userId) {
      this.errorMessage = 'Por favor, ingresa un ID válido.';
      return;
    }
  
    this.isLoading = true;
    this.loginService.getUserById(this.userId).subscribe({
      next: (user) => {
        this.users = user ? [user] : [];
        this.errorMessage = this.users.length ? '' : 'No se encontró ningún usuario con este ID.';
      },
      error: () => {
        this.errorMessage = 'Error al buscar el usuario.';
        this.users = [];
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }

}