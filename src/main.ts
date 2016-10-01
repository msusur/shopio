import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ShopioSubAppAppComponent, environment } from './app/';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";


if (environment.production) {
  enableProdMode();
}

bootstrap(ShopioSubAppAppComponent);
