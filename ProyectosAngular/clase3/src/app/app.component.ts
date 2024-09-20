import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTestComponentComponent } from "./my-test-component/my-test-component.component";
import { ComponentSidebarComponent } from "./shared/component-sidebar/component-sidebar.component";
import { ServiciosComponent } from "./servicios/servicios.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyTestComponentComponent, ComponentSidebarComponent, ServiciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase3';
}
