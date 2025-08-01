import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface LoginResponse {
  token: string;
  refresh_token: string;
  user: any;
}

interface User {
  id: string;
  email: string;
  user_metadata?: {
    full_name?: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isBrowser: boolean;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  initAuth(): void {
    if (this.hasToken()) {
      this.verifyToken().subscribe({
        next: () => {
          this.getCurrentUserFromAPI().subscribe({
            next: (user) => {
              this.currentUserSubject.next(user);
              this.isAuthenticatedSubject.next(true);
            },
            error: () => this.clearSession()
          });
        },
        error: () => {
          this.refreshToken().subscribe({
            next: (res) => {
              this.currentUserSubject.next(res.user);
              this.isAuthenticatedSubject.next(true);
            },
            error: () => this.clearSession()
          });
        }
      });
    } else {
      this.clearSession();
    }
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/api/auth/login', { email, password }).pipe(
      tap((res) => {
        if (this.isBrowser) {
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('refresh_token', res.refresh_token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(res.user);
      })
    );
  }

  register(email: string, password: string, full_name?: string): Observable<any> {
    return this.http.post('/api/auth/register', { email, password, full_name });
  }

  logout() {
    const refresh_token = this.getRefreshToken();
    if (refresh_token) {
      this.http.post('/api/auth/logout', { refresh_token }).subscribe({
        next: () => this.clearSession(),
        error: () => this.clearSession()
      });
    } else {
      this.clearSession();
    }
  }

  verifyToken(): Observable<any> {
    const token = this.getToken();
    if (!token) {
      return new Observable(subscriber => subscriber.error('No token found'));
    }
    return this.http.post('/api/auth/verify', { token });
  }

  refreshToken(): Observable<LoginResponse> {
    const refresh_token = this.getRefreshToken();
    if (!refresh_token) {
      return new Observable(subscriber => subscriber.error('No refresh token found'));
    }
    return this.http.post<LoginResponse>('/api/auth/refresh', { refresh_token }).pipe(
      tap((res) => {
        if (this.isBrowser) {
          localStorage.setItem('access_token', res.token);
          localStorage.setItem('refresh_token', res.refresh_token);
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
    );
  }

  getCurrentUserFromAPI(): Observable<any> {
    return this.http.get('/api/auth/me');
  }

  getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('access_token') : null;
  }

  getRefreshToken(): string | null {
    return this.isBrowser ? localStorage.getItem('refresh_token') : null;
  }

  private hasToken(): boolean {
    return this.isBrowser && !!localStorage.getItem('access_token');
  }

  private clearSession(): void {
    if (this.isBrowser) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    }
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth']);
  }
}
