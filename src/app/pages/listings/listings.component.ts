import { Component } from '@angular/core';
import { SAMPLE_HOUSES } from '../../../sample-data/sample-houses';
import { House, ListingType, PropertyType } from '../../../interfaces/house';
import { HouseCardComponent } from '../../shared/house-card/house-card.component';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
@Component({
  selector: 'app-listings',
  imports: [HouseCardComponent,CommonModule,SearchBarComponent],
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.scss'
})
export class ListingsComponent {
  homes: House[] = SAMPLE_HOUSES

  searchTerm: string = '';
  selectedType: PropertyType | '' = '';
  selectedSaleType: ListingType | '' = '';
  propertySaleTypes:ListingType[]=["rent","sale"];
  propertyTypes: PropertyType[] = [
    'apartment', 'house', 'villa', 'townhouse', 'bungalow', 'studio', 'mansion', 'chalet', 'farmhouse', 'penthouse', 'loft', 'other'
  ];

  get filteredHouses(): House[] {
    const term = this.searchTerm.trim().toLowerCase();
    const selectedType = this.selectedType;
    const selectedSaleType = this.selectedSaleType;
  
    return this.homes.filter(house => {
      const matchesSearch =
        term === '' ||
        house.title.toLowerCase().includes(term) ||
        house.address.city.toLowerCase().includes(term);
  
      const matchesType = !selectedType || house.propertyType === selectedType;
      const matchesSaleType = !selectedSaleType || house.listingType === selectedSaleType;
  
      return matchesSearch && matchesType && matchesSaleType;
    });
  }
}
