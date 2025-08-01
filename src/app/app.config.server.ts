import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { serverRoutes } from './app.routes.server';
import { appConfig } from './app.config';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
