import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// JIT Mode
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/';

platformBrowserDynamic().bootstrapModule(AppModule);


// AoT Compiled version
// run `./node_modules/.bin/ngc -p ./src/`
// import {platformBrowser} from '@angular/platform-browser';
// import {AppModuleNgFactory} from './aot/app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);