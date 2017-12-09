import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckupReport } from '../../models/report-checkup';


/**
 * Generated class for the ReportCheckupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-checkup',
  templateUrl: 'report-checkup.html'
})
export class ReportCheckupPage {
  report: CheckupReport
  data:Array<any> = [];
  itemExpandHeight: number = 100;
  testSelect:any
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.report = navParams.get('report');
    this.testSelect = {showDetails:false,icon:'arrow-dropup'}
    for(let i = 0; i < 10; i++ ){
      this.data.push({
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'arrow-dropup',
          showDetails: false
        });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportCheckupPage');
  }

  send() {
    this.navCtrl.popToRoot()
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm send',
      message: 'Do you want send this report?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.send()
          }
        }
      ]
    });
    alert.present();
  }

  toggleDetails(data) {
    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'arrow-dropup';
    } else {
        data.showDetails = true;
        data.icon = 'arrow-dropdown';
    }
  }
}
