import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TituloFormularioComponent } from '../titulo-formulario/titulo-formulario.component';
import { GerenteComponent } from '../gerente/gerente.component';
import { DetailLicenceComponent } from '../detail-licence/detail-licence.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TituloFormularioComponent, GerenteComponent, DetailLicenceComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
}