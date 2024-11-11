import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { Password, PasswordModule } from 'primeng/password';
import { GerenteComponent } from '../gerente/gerente.component';


@Component({
  selector: 'app-titulo-formulario',
  standalone: true,
  imports: [ReactiveFormsModule,InputTextModule,ButtonModule,PasswordModule,CommonModule, DropdownModule,GerenteComponent,TituloFormularioComponent],
  templateUrl: './titulo-formulario.component.html',
  styleUrl: './titulo-formulario.component.css'
})
export class TituloFormularioComponent {
  userForm: FormGroup;


  constructor(private fb : FormBuilder, private router:Router){
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      apellido: ['',Validators.required], 
      email: ['',[Validators.required,Validators.email]],
      tel: ['',[Validators.required,Validators.pattern("^(\\d{3} \\d{3} \\d{4})$")]]
    })
  }

  onSubmit(){
    if (this.userForm.valid){
      console.log(this.userForm.value)
      this.router.navigate(['/detail-licence']) //habilita la navegación, debe activarse en el constructor
      this.router.navigate(["/titulo-formulario"])
      // console.log(this.gerente.userForm.value)
    }else{
      console.log('Formulario no valido')
    }
  }
}
