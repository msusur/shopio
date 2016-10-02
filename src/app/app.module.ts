import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './Components/main-component/app.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ListService } from './Services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
