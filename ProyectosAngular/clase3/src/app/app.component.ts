import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTestComponentComponent } from "./my-test-component/my-test-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyTestComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clase3';
}
