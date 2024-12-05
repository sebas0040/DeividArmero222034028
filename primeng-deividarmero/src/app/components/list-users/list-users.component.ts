import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [TableModule,ButtonModule,HttpClientModule,CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent {
  users: any[]=[];
  errorMesage: string=''

  constructor(private loginService:LoginService){
    this.loadUsers();
  }

  loadUsers(){
    this.loginService.getUsers().subscribe({
      next:(users)=>{
        this.users = users;
      },
      error:() =>{
        this.errorMesage = "Error al cargar los usuarios"
      }
    })
  }
}
