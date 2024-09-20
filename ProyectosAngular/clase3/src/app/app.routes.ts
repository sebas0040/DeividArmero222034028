import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ComponentSidebarComponent } from './shared/component-sidebar/component-sidebar.component';

export const routes: Routes = [
    {
        path: '',//indica que estoy corriendo por defecto el local host
        component: MyTestComponentComponent
    },
    {
        path:'servicios',
        component:ServiciosComponent
    }

];
// Aqui se invocan a las rutas que se encuentrane en routing.modules dentro de modulos y a la ves busca el componecte que renderiza el contenido por ahora solo es 
// app.component