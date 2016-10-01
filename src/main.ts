import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// JIT Mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ShopioModule } from './app/shopio.module';

let platform = platformBrowserDynamic();
platform.bootstrapModule(ShopioModule);

// AOT
// First run `./node_modules/.bin/ngc -p ./src/`
/*
import {platformBrowser} from '@angular/platform-browser';
import {MaterialAppModuleNgFactory} from './aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
*/
