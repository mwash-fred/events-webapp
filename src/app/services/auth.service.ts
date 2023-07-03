import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  LoginCredentials,
  LoginResponse,
} from '../interfaces/login-credentials';
import { Observable } from 'rxjs';
import { ResponseTemplate } from '../interfaces/response-template';
import { User } from '../interfaces/user-registration.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl!: string | null;
  private baseUrl: string = `${environment.baseUrl + 'auth/'}`;

  constructor(private http: HttpClient) {}

  signIn(
    credentials: LoginCredentials
  ): Observable<ResponseTemplate<LoginResponse>> {
    return this.http.post<ResponseTemplate<LoginResponse>>(
      `${this.baseUrl + 'login'}`,
      credentials
    );
  }

  signUP(user: User): Observable<ResponseTemplate<User>> {
    return this.http.post<ResponseTemplate<User>>(
      `${this.baseUrl + 'register'}`,
      user
    );
  }
}
