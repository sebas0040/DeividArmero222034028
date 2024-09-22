import { Component } from '@angular/core';
import { SidebarPageComponent } from '../../../sidebar/views/sidebar-page/sidebar-page.component';
import { SidetopPageComponent } from '../../../sidetop/views/sidetop-page/sidetop-page.component';
import { ContentPageComponent } from "../../../content/views/content-page/content-page.component";
import { AuthPageComponent } from '../../../auth/view/auth-page/auth-page.component';
import { PrimePageComponent } from '../../../UI/views/prime-page/prime-page.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarPageComponent, SidetopPageComponent, ContentPageComponent,AuthPageComponent,PrimePageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
