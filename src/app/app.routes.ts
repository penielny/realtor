import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'listings',
    loadComponent: () => import('./pages/listings/listings.component').then(c => c.ListingsComponent),
  },
  {
    path: 'listings/:id',
    loadComponent: () => import('./pages/listing-details/listing-details.component').then(c => c.ListingDetailsComponent),
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking.component').then(c => c.BookingComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import('./admin/pages/homes-page/homes-page.component').then(c => c.HomesPageComponent),
      },
      {
        path: "amenities",
        loadComponent: () => import('./admin/pages/amenities/amenities.component').then(c => c.AmenitiesComponent),
      },
      {
        path: "bookings",
        loadComponent: () => import('./admin/pages/bookings/bookings.component').then(c => c.BookingsComponent),
      },
    ]
  }
];
