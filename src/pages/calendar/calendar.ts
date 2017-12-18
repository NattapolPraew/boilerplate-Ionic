import { Component, ViewChild, TemplateRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import { Mech } from '../../models/mech';
import { MechServiceProvider } from '../../providers/mech-service/mech-service'
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  @ViewChild(Content) content: Content;
  @ViewChild('templateMechList') mechListDom:TemplateRef<any>;
  mechList:Array<Mech> = [];
  eventSource:Array<any> = [];
  viewTitle:String
  calendar:any

  constructor(public navCtrl: NavController, public navParams: NavParams, private mechService: MechServiceProvider) {
    this.calendar = {
      currentDate: new Date(),
      locale: 'en-US',
      dateFormatter: {
        formatMonthViewDay: function(date:Date) {
            return date.getDate().toString();
        }            
      }
    }
    this.loadEvents();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loadEvents() {
    this.mechService.getScheduledMechineByMonth(new Date()).then(result => {
      this.eventSource = result.map(mech => {
        return {
          title:mech.id,
          startTime:mech.nextScheduleDate,
          endTime:new Date(Date.UTC(mech.nextScheduleDate.getFullYear(),mech.nextScheduleDate.getUTCMonth(),mech.nextScheduleDate.getUTCDate()+1)),
          allDay:true
        }
      })
      this.mechList = result;
    });
  }

  getMechByDate(input:Date) {
    let inputUTCDate =  input.toLocaleDateString();
    return this.mechList.filter(mech=>mech.nextScheduleDate.toLocaleDateString() == inputUTCDate)
  }


  createRandomEvents() {
    return new Promise<Array<Mech>>((resolve,reject)=>{
      var events = [];
      for (var i = 0; i < 100; i += 1) {
          events.push(new Mech(i))
      }
      resolve(events)
    })
  }

  itemSelected(item:Mech){
    this.navCtrl.push('MechPage', {selectedMech: item});
  }
}
