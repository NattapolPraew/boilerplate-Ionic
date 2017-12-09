import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController} from 'ionic-angular';
import { Mech } from '../../models/mech'
import { ReportServiceProvider } from '../../providers/report-service/report-service'
import { TypePage, TypeModal, ReportType } from '../../models/constants'
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
  isEdit:boolean
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController, public reportCtrl: ReportServiceProvider) {
    this.mech = navParams.get('selectedMech');
    this.isEdit = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechPage');
  }

  editMode(isEdit:boolean){
    console.log(isEdit)
    this.isEdit = isEdit;
  }

  presentListReport(title:string, list:Array<any>) {
    let modal = this.modalCtrl.create(TypeModal.ItemList, {title:title,list:list});
    modal.onDidDismiss(data => {
      switch(data.type) {
        case ReportType.Checkup:this.navCtrl.push(TypePage.ReportCheckup, {report:data.data});break;
        case ReportType.Repair:this.navCtrl.push(TypePage.ReportRepairing, {report:data.data});break;
      }
    });
    modal.present();
  }

  showReportActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Send Report',
      buttons: [
        {
          text: 'Check Up',
          role: 'destructive',
          handler: () => {
            
            this.presentListReport("Check Up Reports", this.reportCtrl.getCheckupReportWithFilter({}))
          }
        },
        {
          text: 'Repair',
          handler: () => {
            this.presentListReport("Repair Reports",this.reportCtrl.getRepairReportWithFilter({}))
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  sendReportActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Send Report',
      buttons: [
        {
          text: 'Check Up',
          role: 'destructive',
          handler: () => {
            this.navCtrl.push(TypePage.ReportCheckup,{mech:this.mech.id, report:this.reportCtrl.tranformCheckupReport({})});
          }
        },
        {
          text: 'Repair',
          handler: () => {
            this.navCtrl.push(TypePage.ReportRepairing);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}
