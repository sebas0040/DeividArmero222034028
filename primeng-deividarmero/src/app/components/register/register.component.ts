import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,PasswordModule,CommonModule,ButtonModule,HttpClientModule,DropdownModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registroForm: FormGroup
  constructor(private fb:FormBuilder, private loginService: LoginService) {
    this.registroForm = this.fb.group({
      username:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
    });
  };

  onSubmit(){
    if (this.registroForm.valid){
      const { username, password } = this.registroForm.value
      this.loginService.register(username, password).subscribe({
        next: response => {
          console.log('Usuario registrado exitosamente',response);
        },
        error: error => {
          console.error('Error en el registro de usuario',error);
        },
        complete: () => {
          console.log('¡Proceso completado exitosamente!')
        }
      });
    }
  }

}
