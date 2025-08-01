import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth.service';

let isRefreshing = false;
const refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export function AuthInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const authService = inject(AuthService);

  // Add auth header for API requests
  if (request.url.includes('/api/') && !request.url.includes('/auth/login') && !request.url.includes('/auth/register')) {
    if (isPlatformBrowser(platformId)) {
      const token = localStorage.getItem('access_token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
  }

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && !request.url.includes('/auth/refresh')) {
        if (isRefreshing) {
          return refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap(() => next(request))
          );
        } else {
          isRefreshing = true;
          refreshTokenSubject.next(null);

          const refreshToken = isPlatformBrowser(platformId) ? localStorage.getItem('refresh_token') : null;
          
          if (refreshToken) {
            return authService.refreshToken().pipe(
              switchMap((response) => {
                isRefreshing = false;
                refreshTokenSubject.next(response.token);
                
                // Retry the original request with new token
                const newRequest = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.token}`
                  }
                });
                return next(newRequest);
              }),
              catchError((refreshError) => {
                isRefreshing = false;
                refreshTokenSubject.next(null);
                
                // Clear session and redirect to login
                if (isPlatformBrowser(platformId)) {
                  localStorage.removeItem('access_token');
                  localStorage.removeItem('refresh_token');
                  localStorage.removeItem('user');
                }
                router.navigate(['/auth']);
                return throwError(() => refreshError);
              })
            );
          } else {
            isRefreshing = false;
            refreshTokenSubject.next(null);
            
            // No refresh token, redirect to login
            if (isPlatformBrowser(platformId)) {
              localStorage.removeItem('access_token');
              localStorage.removeItem('refresh_token');
              localStorage.removeItem('user');
            }
            router.navigate(['/auth']);
            return throwError(() => error);
          }
        }
      }
      
      return throwError(() => error);
    })
  );
} 