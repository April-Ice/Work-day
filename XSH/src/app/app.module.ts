import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { FileUploadModule } from 'ng2-file-upload';

import { BridgeHelper } from '../helpers/bridge';
import { ErrorHelper } from '../helpers/error';


import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { ListPage } from '../pages/list/list';
import { Pages } from '../pages/index';
import { RouteConfig } from '../pages/route';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
	// HomePage,
	// LoginPage,
	// ListPage,
	Pages
  ],
  imports: [
	BrowserModule,
	FileUploadModule,
	IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,RouteConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	// HomePage,
	// LoginPage,
	// ListPage,
	Pages
  ],
  providers: [
    StatusBar,
	SplashScreen,
	BridgeHelper,
	// {provide: ErrorHandler, useClass: IonicErrorHandler}
	{ provide: ErrorHandler, useClass: ErrorHelper }
  ]
})
export class AppModule {}
