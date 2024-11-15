import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DataServiceService } from '../../services/data-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [InputTextModule,ButtonModule,ReactiveFormsModule,CommonModule],

  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  searchForm:  FormGroup
  
  constructor (private fb: FormBuilder, private dataService:DataServiceService,){
    this.searchForm = this.fb.group({
      apellido:['',Validators.required],
      email:['',[Validators.required,Validators.email,Validators.maxLength(60)]]
    })

  }
  onSubmit(){
    if (this.searchForm.valid){
      this.dataService.searchUser(this.searchForm.value).subscribe(response => (console.log("Usuario Valido")))
    }else{
      console.log('Los datos ingresados no son validos')
    }
  }
}
