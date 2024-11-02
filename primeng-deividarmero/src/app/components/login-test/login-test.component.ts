import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { LoginService } from '../../services/login.service'; // aqui invocamos al servicio

@Component({
  selector: 'app-login-test',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule],
  templateUrl: './login-test.component.html',
  styleUrl: './login-test.component.css'
})
export class LoginTestComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder, private loginService: LoginService){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required,Validators.email,], 
      password: ['',Validators.required, Validators.minLength(6)]
    })
    
  }

  onSubmit(){
    if(this.userForm.value){
      const {email,password} = this.userForm.value
      this.loginService.login(email,password).subscribe(response => (console.log())) //ya en este momento por haber definido en el constructor LoginService la propiedad de login se puede usar ya que esta dentro del servicio LoginServece
      // por lo que de esta manera es como se interactua con el método login de login.service.ts 
      console.log(this.userForm.value)
    }else{
      console.log("Formulario Invalido")
    }
  }
  
}
