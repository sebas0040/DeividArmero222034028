import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarLibroComponent } from './components/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'registro-libro',
        component:RegistrarLibroComponent
    },
    {
        path:'actualizar-libro',
        component:ActualizarLibroComponent
    },
    
];
