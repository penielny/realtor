import { Component, Input } from '@angular/core';
import { House } from '../../../interfaces/house';
import { ActivatedRoute, Router } from '@angular/router';
import { SAMPLE_HOUSES } from '../../../sample-data/sample-houses';
import { GhsCurrencyPipe } from '../../pipes/ghs-currency.pipe';
import { ClientLayoutComponent } from "../../layouts/client-layout/client-layout.component";
import { HomesService } from '../../admin/services/homes.service';

@Component({
  selector: 'app-listing-details',
  imports: [GhsCurrencyPipe, ClientLayoutComponent],
  templateUrl: './listing-details.component.html',
  styleUrl: './listing-details.component.scss'
})
export class ListingDetailsComponent {
  house: House | undefined;
  relatedHouses: House[] = [];
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomesService
  ) { }

  ngOnInit() {
    const houseId = Number(this.route.snapshot.paramMap.get('id'))

    if (isNaN(houseId)) {
      this.router.navigate(['/listings']);
      return;
    }

    this.homeService.getHomeById(houseId).subscribe({
      next: (house) => {
        this.house = house;
      },
      error: (err) => {
        console.error('Error fetching house details:', err);
        this.router.navigate(['/listings']);
      }
    })

  }

  get bannerImage(): string {
    if (!this.house) return '';
    return this.house.images[0].url
  }
}
