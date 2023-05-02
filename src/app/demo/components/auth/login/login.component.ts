import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    email: string = "";
    password: string = "";
    users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      { email: 'user3@example.com', password: 'password3' },
    ];
  
    constructor(private router: Router, public layoutService: LayoutService) {}
  
    login() {
      const user = this.users.find((user) => user.email === this.email && user.password === this.password);
      if (user) {
        // Redirect to the desired page
        this.router.navigate(['/user/dashboard']);
      } else {
        alert('Invalid email or password');
      }
    }


}
