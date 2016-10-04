import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import {
  AppComponent,
  ShoppingListComponent,
  ListButtonComponent,
  HomeComponent,
  LoginComponent
} from './Components';

import {
  ListService,
  ComponentStateManagerService,
  LocalStorageService
} from './Services';

import { routing, routingProviders } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ListButtonComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [
    ListService,
    ComponentStateManagerService,
    LocalStorageService,
    routingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
