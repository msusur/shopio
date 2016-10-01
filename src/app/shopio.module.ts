import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ShopioMain }   from './shopio-main.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule.forRoot() ],
  declarations: [ ShopioMain ],
  bootstrap:    [ ShopioMain ]
})

export class ShopioModule { }
