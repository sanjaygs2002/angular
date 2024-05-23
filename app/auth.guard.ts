import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {  Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: any) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        return true;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
