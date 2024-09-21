import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthPageComponent } from "./modules/auth/views/auth-page/auth-page.component";
import {HomePageComponent} from "./modules/home/views/home-page/home-page.component"
import { SidebarPageComponent } from "./modules/sidebar/views/sidebar-page/sidebar-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthPageComponent, HomePageComponent, SidebarPageComponent],//aqui debo importar los componetes que quiere mostrar si no los importo no se muestran
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-rutas';
}
