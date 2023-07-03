import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials} from 'src/app/interfaces/login-credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userCredentials: LoginCredentials = {};
  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: [this.userCredentials.email, [Validators.required]],
      password: [this.userCredentials.password, [Validators.required]],
    });
  }

  login() {
    this.userCredentials = this.loginForm.value;
    this.authService.signIn(this.userCredentials).subscribe(
      data => {
        alert(data.message)
        localStorage.setItem('credentials', JSON.stringify(data.data));
      }
    );
    const redirectUrl = this.authService.redirectUrl || '/';
    this.authService.redirectUrl = null;
    this.router.navigate([redirectUrl]);
  }
}
