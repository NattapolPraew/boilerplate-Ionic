import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';
import { Mech } from '../../models/mech'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  soonList:Array<Mech>
  todayList:Array<Mech>
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.soonList = [new Mech(1),new Mech(2)];
    this.todayList = [new Mech(3),new Mech(4)];
  }

  itemSelected(item:Mech){
    this.navCtrl.push('MechPage', {selectedMech: item});
  }
}
