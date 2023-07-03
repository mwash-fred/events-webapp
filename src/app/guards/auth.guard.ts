import { inject } from '@angular/core';
import { CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService =  inject(AuthService);
  const credentials = localStorage.getItem('credentials');
  if(credentials){
    return true;
  } else{
    authService.redirectUrl = state.url;
    router.navigate(['/auth/sign-in']);
    return false;
  }
}
