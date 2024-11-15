import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DataServiceService } from '../../services/data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-titulo-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,CommonModule, DropdownModule,TituloFormularioComponent,HttpClientModule],
  templateUrl: './titulo-formulario.component.html',
  styleUrl: './titulo-formulario.component.css'
})
export class TituloFormularioComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder, private dataService:DataServiceService){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      apellido: ['',Validators.required], 
      email: ['',[Validators.required,Validators.email,Validators.maxLength(60)]],
      telefono: ['',[Validators.required,Validators.pattern("^(\\d{3} \\d{3} \\d{4})$"),Validators.maxLength(12)]]
    })
    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid){
        this.onSubmit()
      }
    })

  }

  onSubmit(){
    this.dataService.updateFormData(this.userForm.value)
  }
}


