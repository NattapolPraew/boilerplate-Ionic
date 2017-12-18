import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { ReportServiceProvider } from '../providers/report-service/report-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { registerLocaleData } from '@angular/common';
import localeEn from '@angular/common/locales/en';
import { MechServiceProvider } from '../providers/mech-service/mech-service';
import { SiteServiceProvider } from '../providers/site-service/site-service';
registerLocaleData(localeEn);


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'en-US'},
    ReportServiceProvider,
    AuthServiceProvider,
    MechServiceProvider,
    SiteServiceProvider,
  ]
})
export class AppModule {}
