import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {APP_BASE_HREF} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), { provide: APP_BASE_HREF, useValue: '/tesla-configurator/' }]
};
