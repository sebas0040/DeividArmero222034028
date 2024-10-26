import { Component } from '@angular/core';
import { OtherFormCbComponent } from '../other-form-cb/other-form-cb.component';
import { OtherFormComponent } from '../other-form/other-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OtherFormCbComponent, OtherFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
