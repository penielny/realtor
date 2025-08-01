import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage: string | null = null;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loading = true;
    this.errorMessage = null;
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Invalid credentials.';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
