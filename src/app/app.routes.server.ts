import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server },
  { path: 'listings', renderMode: RenderMode.Server },
  {
    path: 'listings/:id',
    renderMode: RenderMode.Client
  },
  { path: 'booking', renderMode: RenderMode.Server },
  { path: 'about', renderMode: RenderMode.Server },
  { path: 'contact', renderMode: RenderMode.Server },
  { path: 'auth', renderMode: RenderMode.Server },
  { path: 'admin/**', renderMode: RenderMode.Server },
];
