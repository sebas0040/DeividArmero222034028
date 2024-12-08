import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrarLibroComponent } from './components/registrar-libro/registrar-libro.component';
import { ActualizarLibroComponent } from './components/actualizar-libro/actualizar-libro.component';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { FiltrarLibroComponent } from './components/filtrar-libro/filtrar-libro.component';
import { MenuItemContent } from 'primeng/menu';
import { MenuLibrosComponent } from './components/menu-libros/menu-libros.component';

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
        path:'actualizar-libro/:id',
        component:ActualizarLibroComponent
    },
    {
        path:'lista-libros',
        component:ListaLibrosComponent
    },
    {
        path:'filtrar-libro',
        component:FiltrarLibroComponent
    },
    {
        path:'menu',
        component:MenuLibrosComponent
    }
    
];
