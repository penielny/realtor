import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SAMPLE_HOUSES } from '../../../sample-data/sample-houses';
import { House } from '../../../interfaces/house';
import { GhsCurrencyPipe } from '../../pipes/ghs-currency.pipe';
import { ClientLayoutComponent } from "../../layouts/client-layout/client-layout.component";
import { HouseCardComponent } from '../../shared/components/house-card/house-card.component';
import { HomesService } from '../../admin/services/homes.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, FormsModule, GhsCurrencyPipe, HouseCardComponent, ClientLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomesService) { }

  featuredHouses: House[] = SAMPLE_HOUSES.slice(0, 6);
  homes: House[] = [];
  recentHomes: House[] = [];


  ngOnInit(): void {
    this.homeService.getFeaturedHouses().then((data: { sponsored: House[], recentHomes: House[] }) => {
      this.homes = data.sponsored;
      this.recentHomes = data.recentHomes;
    }).catch((err: Error) => {
      console.error('Error fetching featured houses:', err);
    });
  }


}
