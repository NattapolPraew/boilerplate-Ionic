import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController} from 'ionic-angular';
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
  isEdit:boolean
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public modalCtrl: ModalController) {
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
    let modal = this.modalCtrl.create('ListReportPage', {tile:title,listReport:list});
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
            this.presentListReport("Check Up Reports",[])
          }
        },
        {
          text: 'Repair',
          handler: () => {
            this.presentListReport("Repair Reports",[])
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
            this.navCtrl.setRoot('CheckUpPage');
          }
        },
        {
          text: 'Repair',
          handler: () => {
            this.navCtrl.setRoot('RepairPage');
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
