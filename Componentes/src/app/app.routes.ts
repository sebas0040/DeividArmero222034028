import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TituloFormularioComponent } from './components/titulo-formulario/titulo-formulario.component';
import { GerenteComponent } from './components/gerente/gerente.component';
import { DetailLicenceComponent } from './components/detail-licence/detail-licence.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'home',pathMatch:'full',
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'titulo-formulario',
        component:TituloFormularioComponent
    },
    {
        path:'gerente',
        component:GerenteComponent
    },
    {
        path:'detail_licence',
        component:DetailLicenceComponent
    }


];
