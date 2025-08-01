import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-client-layout',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {

}
