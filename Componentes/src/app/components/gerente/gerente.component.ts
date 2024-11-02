import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {
  userForm: FormGroup;

  constructor(private fb : FormBuilder){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required,Validators.email,], 
    })
    
  }
}
