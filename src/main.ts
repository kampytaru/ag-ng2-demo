import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import { RouterProviders } from './app/app.routes';
import { ApiService, SessionService } from './app/services/index';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  RouterProviders,
  disableDeprecatedForms,
  provideForms,
  ApiService,
  SessionService
]).catch(err => console.error(err));
