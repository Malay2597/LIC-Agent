import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DueListComponent } from './pages/due-list/due-list.component';
import { PromptComponent } from './prompt/prompt.component';

import { LicApiService } from './services/lic-api.service';

import { AppMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PwaService } from './services/pwa.service';

const initializer = (pwaService: PwaService) => () => pwaService.initPwaPrompt();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DueListComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [LicApiService, {provide: APP_INITIALIZER, useFactory: initializer, deps: [PwaService], multi: true}],
  entryComponents: [
    PromptComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
