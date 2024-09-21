import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/views/auth-page/auth-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    {
        path:'',//local host
        component:HomePageComponent
    },
    {
        path:'auth',//mostrar la pagina de autenticación
        component: AuthPageComponent
    },
    {
        path: 'sidebar', //sidebar
        component: SidebarPageComponent
    }

];
