import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportCheckupPage } from './report-checkup';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    ReportCheckupPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ReportCheckupPage),
  ],
})
export class ReportCheckupPageModule {}
