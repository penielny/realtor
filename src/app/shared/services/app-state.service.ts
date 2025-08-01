import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { IAmenities } from '../../../interfaces/amenities';


@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  amenities: IAmenities[] = []
  constructor(private https: HttpClient) {
    this.getAmenities()
  }

  getAmenities() {
    this.https.get<IAmenities[]>('/api/features').pipe(take(1)).subscribe({
      next: (value) => {
        this.amenities = value
      },
      complete: () => {

      }
    })
  }
}
