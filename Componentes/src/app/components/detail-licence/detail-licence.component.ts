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
import { DataServiceService } from '../../services/data-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-detail-licence',
  standalone: true,
  imports: [ReactiveFormsModule,DropdownModule,CalendarModule,ButtonModule,CommonModule,CheckboxModule,RadioButtonModule,InputTextModule,InputTextareaModule,HttpClientModule],
  templateUrl: './detail-licence.component.html',
  styleUrl: './detail-licence.component.css'
})
export class DetailLicenceComponent {
  

  otherForm: FormGroup;
  

  constructor(private fb: FormBuilder, private router:Router, private dataService:DataServiceService){
    this.otherForm = this.fb.group({
      fech_inicio:['',Validators.required],
      fech_fin:['',Validators.required],
      descripcion:['',Validators.required]
    })
  }
  
  onSubmit(){
    if (this.otherForm.valid){
      // const fech_inicio = new Date(this.otherForm.value.fech_inicio).toLocaleDateString('es-CO')
      // const fech_fin = new Date(this.otherForm.value.fech_fin).toLocaleDateString('es-CO')
      const fech_inicio = new Date(this.otherForm.value.fech_inicio)
      const fech_fin = new Date(this.otherForm.value.fech_fin)
      console.log(fech_fin,' y ',fech_inicio)
      const descripcion = this.otherForm.value.descripcion
      this.dataService.updateFormData({fech_inicio,fech_fin,descripcion})
    }else{
      console.log('Formulario no valido')
    }
  }

}

