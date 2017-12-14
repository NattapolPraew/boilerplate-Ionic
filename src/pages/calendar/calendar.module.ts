import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
import { ComponentsModule } from '../../components/components.module'
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  declarations: [
    CalendarPage
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(CalendarPage),
  ],
})
export class CalendarPageModule {}
