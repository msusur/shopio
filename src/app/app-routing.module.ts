import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent, AppComponent } from './Components';

const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ShopioSubAppRoutingModule { }
