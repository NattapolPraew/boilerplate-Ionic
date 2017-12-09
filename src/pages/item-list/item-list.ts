import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  title:string
  list:Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.title = navParams.get("title")
    this.list = navParams.get("list")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

  select(report:any) {
    this.viewCtrl.dismiss(report)
  }

  cancel() {
    this.viewCtrl.dismiss()
  }
}
