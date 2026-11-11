import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { DefaultUrlSerializer, provideRouter, UrlSerializer, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { CustomUrlSerializerService } from './CustomUrlSerializerService';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),    
    //vvv De momento no funciona vvv
    { provide: UrlSerializer, useClass: CustomUrlSerializerService }
  ]
};
