import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TituloFormularioComponent } from './components/titulo-formulario/titulo-formulario.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { DetailLicenceComponent } from './components/detail-licence/detail-licence.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,ReactiveFormsModule,TituloFormularioComponent,GerenteComponent,DetailLicenceComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componentes';
}
