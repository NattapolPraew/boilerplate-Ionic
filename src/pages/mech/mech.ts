import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mech } from '../../models/mech'
/**
 * Generated class for the MechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mech',
  templateUrl: 'mech.html',
})
export class MechPage {
  mech:Mech

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mech = navParams.get('selectedMech');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechPage');
  }

}
