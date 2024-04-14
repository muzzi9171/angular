import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpBackend, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonsModule, ExpansionPanelModule, LibTabMenuModule, PreviewWindowModule, ProgressBarModule } from 'nextsapien-component-lib';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ConstituentDashboardComponent } from './constituent-dashboard/constituent-dashboard.component';
import { AppEffects } from './state/app.effects';
import { reducers } from './state/app.reducer';



export const httpLoaderFactory = (http: HttpBackend): TranslateHttpLoader => new TranslateHttpLoader(new HttpClient(http), './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent, ConstituentDashboardComponent, CardsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonsModule,
    RouterModule.forRoot([]),
    LibTabMenuModule,
    ProgressBarModule,
    PreviewWindowModule,
    ExpansionPanelModule,
    DragDropModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(
      reducers
    ),

  ],
  providers: [],
  bootstrap: [AppComponent, ConstituentDashboardComponent],
})
export class AppModule { }
