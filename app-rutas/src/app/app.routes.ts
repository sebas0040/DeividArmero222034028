import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/views/home-page/home-page.component';
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';

export const routes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'sidebar',
        component:SidebarPageComponent
    }
];
