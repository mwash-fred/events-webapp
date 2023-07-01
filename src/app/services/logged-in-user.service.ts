import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentUser } from '../interfaces/current-user';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {
  currentUser$ = new BehaviorSubject<
    CurrentUser | null | undefined
  >(undefined);

  constructor() { }

  setCurrentUser() {
    let user : string | null = localStorage.getItem('user');
    if (user) {
      this.currentUser$.next(JSON.parse(user) as CurrentUser);
    } else {
      this.currentUser$.next(null);
    }
  }
}
