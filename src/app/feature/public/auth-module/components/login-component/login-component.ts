import { Component } from '@angular/core';
import { ROUTE_PATHS } from '../../../../../core/constants/routes.constant';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  routes = ROUTE_PATHS;
}
