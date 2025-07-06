import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ListingDetailsComponent } from './pages/listing-details/listing-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'listings/:id', component: ListingDetailsComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
