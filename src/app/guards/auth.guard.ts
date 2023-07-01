import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LoggedInUserService } from '../services/logged-in-user.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router: Router = inject(Router);
  return inject(LoggedInUserService).currentUser$.pipe(
    filter((currentUser) => currentUser !== undefined),
    map((currentUser) => {
      if (!currentUser) {
        router.navigateByUrl('/');
        return false;
      }
      return true;
    }))
}
