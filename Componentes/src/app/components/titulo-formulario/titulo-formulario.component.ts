import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';


@Component({
  selector: 'app-titulo-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule],
  templateUrl: './titulo-formulario.component.html',
  styleUrl: './titulo-formulario.component.css'
})
export class TituloFormularioComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      apellido: ['',Validators.required], 
      email: ['',Validators.required,Validators.email],
      tel: ['',Validators.required,Validators.pattern("^(\\d{3} \\d{3} \\d{4})$")]
    })
    
  }

}
