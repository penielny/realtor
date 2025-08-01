import { Component, inject } from '@angular/core';
import { Home } from '../../../../api/database/model';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { AddHomeOverlayComponent } from '../../components/add-home-overlay/add-home-overlay.component';
import { HomesService } from '../../services/homes.service';
import { PropertyItemComponent } from "../../components/property-item/property-item.component";

@Component({
  selector: 'app-homes-page',
  imports: [SearchBarComponent, AddHomeOverlayComponent, PropertyItemComponent],
  templateUrl: './homes-page.component.html',
  styleUrl: './homes-page.component.scss'
})
export class HomesPageComponent {
  showAddHomeOverlay = false;
  homeService = inject(HomesService);


  homes: Home[] = [];

  constructor() {
    this.homeService.homes$.subscribe({
      next: (homes) => {
        this.homes = homes;
      },
      error: (err) => {
        console.error('Error fetching homes:', err);
      }
    });
  }

  protected get checked(): boolean | null {
    const every = this.homes.every(({ selected }) => selected);
    const some = this.homes.some(({ selected }) => selected);

    return every || (some && null);
  }

  protected onCheck(checked: boolean): void {
    this.homes.forEach((item) => {
      item.selected = checked;
    });
  }

  openAddHomeOverlay() {
    this.showAddHomeOverlay = true;
  }
  closeAddHomeOverlay() {
    this.showAddHomeOverlay = false;
  }
}
