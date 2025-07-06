import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyType,ListingType } from '../../../interfaces/house';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();
  
  @Input() selectedType: PropertyType | '' = '';
  @Input() selectedSaleType: ListingType | '' = '';

  @Output() selectedTypeChange = new EventEmitter<PropertyType | ''>();
  @Output() selectedSaleTypeChange = new EventEmitter<ListingType | ''>();

  @Input() propertyTypes: PropertyType[] = [];
  @Input() propertySaleTypes: ListingType[] = [];
}
