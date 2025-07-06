import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SAMPLE_HOUSES } from '../../../sample-data/sample-houses';
import { House } from '../../../interfaces/house';
import { GhsCurrencyPipe } from '../../pipes/ghs-currency.pipe';
import { HouseCardComponent } from '../../shared/house-card/house-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule, GhsCurrencyPipe,HouseCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  featuredHouses: House[] = SAMPLE_HOUSES.slice(0, 6);
}
