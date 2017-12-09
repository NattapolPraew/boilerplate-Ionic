import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportRepairingPage } from './report-repairing';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ReportRepairingPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ReportRepairingPage),
  ],
})
export class ReportRepairingPageModule {}
