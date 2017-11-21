import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { SubBreedsPageModule } from '../pages/sub-breeds/sub-breeds.module';
import { HomePageModule } from '../pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { SliderPageModule } from '../pages/slider/slider.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	HomePageModule,
	HttpClientModule,
	HomePageModule,
	SubBreedsPageModule,
	SliderPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
	MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
