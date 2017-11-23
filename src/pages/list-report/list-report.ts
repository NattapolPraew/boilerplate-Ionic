import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ListReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-report',
  templateUrl: 'list-report.html',
})
export class ListReportPage {
  title:string
  listReport:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.title = navParams.get("title")
    this.listReport = navParams.get("listReport")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListReportPage');
  }

  selectReport(report:any) {
    this.viewCtrl.dismiss(report)
  }

  cancel() {
    this.viewCtrl.dismiss()
  }

}
