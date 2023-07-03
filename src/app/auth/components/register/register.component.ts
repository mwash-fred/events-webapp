import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user-registration.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {};
  userRegistrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.userRegistrationForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      mobileNo: [this.user.mobileNo, Validators.required],
      password: [this.user.password, [Validators.required]],
      confirmPassword: ['', Validators.required],
    });
  }

  register() {
    if (
      this.userRegistrationForm.get('password')?.value !==
      this.userRegistrationForm.get('confirmPassword')?.value
    ) {
      alert('Passwords do not match');
      return;
    }
    this.user = this.userRegistrationForm.value;
    this.authService.signUP(this.user).subscribe((data) => {
      alert('User registered Sucessfully');
      this.router.navigate(['/auth/sign-in']);
    }, 
    error => {
      alert(`${'Error '+error}`);
    });
  }
}
