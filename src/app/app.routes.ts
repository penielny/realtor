import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      renderMode: 'server' 
    }
  },
  {
    path: 'listings',
    loadComponent: () =>
      import('./pages/listings/listings.component').then(c => c.ListingsComponent),
    data: {
      renderMode: 'server' 
    }
  },
  {
    path: 'listings/:id',
    loadComponent: () =>
      import('./pages/listing-details/listing-details.component').then(c => c.ListingDetailsComponent),
    data: {
      renderMode: 'client' 
    }
  },
  {
    path: 'booking',
    loadComponent: () =>
      import('./pages/booking/booking.component').then(c => c.BookingComponent),
    data: {
      renderMode: 'server'
    }
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then(c => c.AboutComponent),
    data: {
      renderMode: 'server'
    }
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then(c => c.ContactComponent),
    data: {
      renderMode: 'server'
    }
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/login/login.component').then(c => c.LoginComponent),
    data: {
      renderMode: 'client'
    }
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    data: {
      renderMode: 'client' 
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./admin/pages/homes-page/homes-page.component').then(c => c.HomesPageComponent),
        data: {
          renderMode: 'client'
        }
      },
      {
        path: 'amenities',
        loadComponent: () =>
          import('./admin/pages/amenities/amenities.component').then(c => c.AmenitiesComponent),
        data: {
          renderMode: 'client'
        }
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('./admin/pages/bookings/bookings.component').then(c => c.BookingsComponent),
        data: {
          renderMode: 'client'
        }
      }
    ]
  }
];
