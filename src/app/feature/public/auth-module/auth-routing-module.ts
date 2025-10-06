import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants/routes.constant';
import { LoginComponent } from './components/login-component/login-component';
import { SignUpComponent } from './components/sign-up-component/sign-up-component';

const routes: Routes = [
  { path: '', redirectTo: ROUTE_PATHS.LOGIN, pathMatch: 'full' },
  {
    path: ROUTE_PATHS.LOGIN,
    component: LoginComponent,
  },
  {
    path: ROUTE_PATHS.SIGN_UP,
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
