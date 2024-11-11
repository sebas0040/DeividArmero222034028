import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { DataServiceService } from '../../services/data-service.service';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-titulo-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule,TituloFormularioComponent, HttpClientJsonpModule],
  templateUrl: './titulo-formulario.component.html',
  styleUrl: './titulo-formulario.component.css'
})
export class TituloFormularioComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder, private router:Router, private dataService :DataServiceService){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      apellido: ['',Validators.required], 
      email: ['',[Validators.required,Validators.email]],
      tel: ['',[Validators.required,Validators.pattern("^(\\d{3} \\d{3} \\d{4})$")]]
    })
    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid){
        this.onSubmit()
      }
    })

  }

  onSubmit(){
    this.dataService.register(this.userForm.value)
  }
}
