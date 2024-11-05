import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea, InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-detail-licence',
  standalone: true,
  imports: [ReactiveFormsModule,DropdownModule,CalendarModule,ButtonModule,CommonModule,CheckboxModule,RadioButtonModule,InputTextModule,InputTextareaModule],
  templateUrl: './detail-licence.component.html',
  styleUrl: './detail-licence.component.css'
})
export class DetailLicenceComponent {
  

  otherForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router){
    this.otherForm = this.fb.group({
      fech_inicio:['',Validators.required],
      fech_fin:['',Validators.required],
      descripcion:['',Validators.required]
    })
  }
  
  onSubmit(){
    if (this.otherForm.valid){
      console.log(this.otherForm.value)
      this.router.navigate(['/logintest']) 
    }else{
      console.log('Formulario no valido')
    }
  }

}
