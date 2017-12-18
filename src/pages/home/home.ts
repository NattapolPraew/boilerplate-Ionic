import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';
import { Mech } from '../../models/mech';
import { MechServiceProvider } from '../../providers/mech-service/mech-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  soonList:Array<Mech>
  todayList:Array<Mech>
  
  constructor(public navCtrl: NavController, public navParams: NavParams, mechService: MechServiceProvider) {
    let today = new Date();
    today.setHours(0,0,0,0);
    mechService.getScheduledMechineByMonth(new Date).then(result => {
      this.todayList = result.filter(mech => mech.nextScheduleDate.toLocaleDateString() == today.toLocaleDateString());
      this.soonList = result.filter(mech => {
        let dateDiff = (mech.nextScheduleDate.getTime() - today.getTime())/(1000*60*60*24)
        return dateDiff <= 7 && dateDiff >= 1
      });
    })
    this.soonList = [new Mech(1),new Mech(2)];
    this.todayList = [new Mech(3),new Mech(4)];
  }

  itemSelected(item:Mech){
    this.navCtrl.push('MechPage', {selectedMech: item});
  }
}
