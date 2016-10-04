import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, HomeComponent } from './Components';
import { AuthenticationManager, AuthenticationService } from './Services';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationManager] },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export const routingProviders = [
  AuthenticationManager,
  AuthenticationService
];
