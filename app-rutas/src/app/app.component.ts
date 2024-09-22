import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./modules/home/views/home-page/home-page.component";
import { SidebarPageComponent } from './modules/sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from './modules/sidetop/views/sidetop-page/sidetop-page.component';
import { ContentPageComponent } from './modules/content/views/content-page/content-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, SidebarPageComponent, SidetopPageComponent, ContentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-rutas';
}
