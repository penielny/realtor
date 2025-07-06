import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isDarkMode = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const saved = localStorage.getItem('theme');
      if (saved) {
        this.isDarkMode = saved === 'dark';
      } else {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.applyTheme();
    }
  }

  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    if (!this.isBrowser) return;
    const html = document.documentElement;
    if (this.isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
}
