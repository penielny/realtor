
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateService } from './shared/services/app-state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'realtor';

  constructor(private appState: AppStateService) { }
}
