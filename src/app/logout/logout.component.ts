import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private router: Router) {}

  onLogout() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    this.router.navigate(['/home']);
  }
}
