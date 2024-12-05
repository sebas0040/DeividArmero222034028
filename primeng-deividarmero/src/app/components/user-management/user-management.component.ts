import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { LoginService } from '../../services/login.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule,HttpClientModule,MessageModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  updateForm: FormGroup;

  deleteForm: FormGroup;

  successMessage:string='';
  errorMessage:string='';

  constructor(private fb: FormBuilder, private loginService:LoginService){

    this.updateForm = this.fb.group({
      userId:['',Validators.required],
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',[Validators.required,Validators.minLength(6)]]


    })
    // Inicialización del formulario de eliminación
    this.deleteForm = this.fb.group({
      userId: ['', Validators.required],
    });

  }

  onUpdate():void{
    if (this.updateForm.valid){
      const{ userId,username,password } = this.updateForm.value;
      this.loginService.updateUser(userId,username,password).subscribe({
        next: () => {
          this.successMessage = 'Usuario Actualizado Correctamente';
          this.errorMessage = '';
          this.updateForm.reset();
        },
        error: () => {
          this.errorMessage = 'Error al actualizar el usuario';
          this.successMessage = '';
        },
        complete: () => console.log('Proceso de actualizacion completado'),
      })
    }
  }


onDelete(): void {
    if (this.deleteForm.valid) {
      const { userId } = this.deleteForm.value;
      this.loginService.deleteUser(userId).subscribe({
        next: () => {
          this.successMessage = 'Usuario eliminado exitosamente.';
          this.errorMessage = '';
          this.deleteForm.reset();
        },
        error: () => {
          this.errorMessage = 'Error al eliminar el usuario.';
          this.successMessage = '';
        },
        complete: () => console.log('Proceso de eliminación completado'),
      });
    }
  }

  
}
