import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule],
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required,Validators.email,], 
      password: ['',Validators.required, Validators.minLength(6)]
    })
    
  }

  onSubmit(){
    if(this.userForm.value){
      console.log(this.userForm.value)
    }else{
      console.log("Formulario Invalido")
    }
  }
  
}
