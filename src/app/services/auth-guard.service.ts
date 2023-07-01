import { Injectable } from '@angular/core';
import { LoggedInUserService } from './logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(loggedIUser : LoggedInUserService) { }
}
