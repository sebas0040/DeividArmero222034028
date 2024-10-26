import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,ReactiveFormsModule, InputTextModule,ButtonModule,PasswordModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder){ 

    this.loginForm=this.fb.group({
      usuario:['',[Validators.required, Validators.name]],
      Password:['',Validators.required]
    });
    
  }
  
}




