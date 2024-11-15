import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TituloFormularioComponent } from '../titulo-formulario/titulo-formulario.component';
import { GerenteComponent } from '../gerente/gerente.component';
import { DetailLicenceComponent } from '../detail-licence/detail-licence.component';
import { DataServiceService } from '../../services/data-service.service';
import { UserSearchComponent } from '../user-search/user-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TituloFormularioComponent, GerenteComponent, DetailLicenceComponent, UserSearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor (private dataService:DataServiceService){}
}

