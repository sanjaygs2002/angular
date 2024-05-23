import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(),
    provideHttpClient(withFetch()) // Ensure `withFetch` is called as a function
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
