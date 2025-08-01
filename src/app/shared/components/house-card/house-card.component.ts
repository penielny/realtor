import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GhsCurrencyPipe } from '../../../pipes/ghs-currency.pipe';
import { House } from '../../../../interfaces/house';


@Component({
  selector: 'app-house-card',
  imports: [RouterLink,CommonModule,GhsCurrencyPipe],
  templateUrl: './house-card.component.html',
  styleUrl: './house-card.component.scss'
})
export class HouseCardComponent {
  @Input() house: House | null = null;
}
