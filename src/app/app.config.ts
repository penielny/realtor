
import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor]), withFetch()),
    provideClientHydration(withEventReplay()),
  ]
};

// Prerendering configuration for hybrid rendering
export const prerenderConfig = {
  routes: [
    '/',
    '/listings',
    '/booking',
    '/about',
    '/contact'
  ],
  // Routes that should be client-side rendered
  clientRoutes: [
    '/listings/:id',
    '/auth',
    '/admin/*'
  ]
};
