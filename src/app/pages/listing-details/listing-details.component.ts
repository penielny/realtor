import { Component, Input } from '@angular/core';
import { House } from '../../../interfaces/house';
import { ActivatedRoute, Router } from '@angular/router';
import { SAMPLE_HOUSES } from '../../../sample-data/sample-houses';

@Component({
  selector: 'app-listing-details',
  imports: [],
  templateUrl: './listing-details.component.html',
  styleUrl: './listing-details.component.scss'
})
export class ListingDetailsComponent {
  house: House | undefined;
  relatedHouses: House[] = [];
  currentImageIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const houseId = params['id'];
      this.house = SAMPLE_HOUSES.find(house => house.id === houseId);
      
      if (!this.house) {
        this.router.navigate(['/listings']);
        return;
      }

      this.relatedHouses = SAMPLE_HOUSES
        .filter(house => house.propertyType === this.house?.propertyType && house.id !== this.house?.id)
        .slice(0, 3);
    });
  }

  get bannerImage():string{
    if(!this.house) return '';
    return this.house.images[0]
  }
}
