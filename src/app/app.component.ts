import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';

// import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';

  pages: Array<{title: string, component: string}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authService:AuthServiceProvider) {
    
    platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
      authService.checkAuthenticate().then(result => {
        statusBar.styleDefault();
        splashScreen.hide();
      });
    })

    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Reports', component: 'ReportPage' },
      { title: 'Profile', component: 'ProfilePage' },
      { title: 'Logout', component: 'LoginPage' },
      { title: 'Schedule', component: 'CalendarPage' }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

