import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-other-form',
  standalone: true,
  imports: [ReactiveFormsModule,DropdownModule,CalendarModule,ButtonModule,CommonModule,CheckboxModule,RadioButtonModule,InputTextModule],
  templateUrl: './other-form.component.html',
  styleUrl: './other-form.component.css'
})
export class OtherFormComponent {


  otherForm: FormGroup;
  cities: any[] = [{label: 'New York', Value: 'NY'},{label:'London', Value: 'LDN'}, {label:'Paris', Value:'PRS'}];
  constructor(private fb: FormBuilder, private router:Router){
    this.otherForm = this.fb.group({
      name:['',Validators.required],
      birthdate:['',Validators.required],
      city:[null,Validators.required]
    })
  }
  onSubmit(){
    if (this.otherForm.valid){
      console.log(this.otherForm.value)
      this.router.navigate(['/logintest']) //habilita la navegación, debe activarse en el constructor
    }else{
      console.log('Formulario no valido')
    }
  }
}
