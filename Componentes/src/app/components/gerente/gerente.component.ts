import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { DataServiceService } from '../../services/data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule,HttpClientModule],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder, private router:Router,private dataService:DataServiceService, private http: HttpClient ){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required,Validators.email,]], 
    });

    this.userForm.valueChanges.subscribe(() => {
      if (this.userForm.valid){
        this.onSubmit()
      }
    })
    
  }

  

  onSubmit(){
    const emailGerente = this.userForm.value.email
    const nameGerente = this.userForm.value.name
    this.dataService.register({nameGerente,emailGerente})
  }
}
