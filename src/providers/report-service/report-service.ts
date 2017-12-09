import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportType } from '../../models/constants';
import { CheckupReport } from '../../models/report-checkup';

/*
  Generated class for the ReportServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ReportServiceProvider Provider');
  }

  getCheckupReportWithFilter(condition:any) {
    let reports = [
      {title:new Date(),type:ReportType.Checkup, data: this.tranformCheckupReport({})},
      {title:new Date(), type:ReportType.Checkup, data:this.tranformCheckupReport({})},
      {title:new Date(), type:ReportType.Checkup, data:this.tranformCheckupReport({})}]
    return reports
  }

  getRepairReportWithFilter(condition:any) {
    let reports = [
      {title:new Date(),type:ReportType.Repair, data:{}},
      {title:new Date(), type:ReportType.Repair, data:{}},
      {title:new Date(), type:ReportType.Repair, data:{}}]
    return reports
  }

  tranformCheckupReport(input:any){
    let generate = {
      id: Math.random(),
      checkList: [
        {title:"V1.1",
        details:"Randomly inspect a subset of array – top glass inspection – look for spots, blemishes (cosmetic or not) signs of arcing in circuitry, bonding of frame to glass (where applicable), discoloration"},
        {title:"V1.2",
        details:"Randomly inspect a subset of array – backsheet inspection – look for spots, blisters, burn throughs, discoloration"},
        {title:"V1.3",
        details:"Randomly inspect module junction boxes on subset of array – look for issues with sealant/adhesives, wire management (tight radii on +/- connectors), MC connectors, etc"},
        {title:"V1.4",
        details:"Inspect module clamping methodology, looking in particular for loose fasteners; if in excess of 2% of fasteners determined to be not tightened fully, create ticket and note below for re-torquing of module fasteners"},
        {title:"V2.1",
        details:"Return with Manpower"},
        {title:"V2.2",
        details:"Create .pdf report for regional Director of Services where needed"},
        {title:"V2.3",
        details:"Create ticket with ROC for corrective activities"},
        {title:"V2.4",
        details:"None- Site 100% Operational"},
        {title:"V2.5",
        details:"Other (describe)"}
      ]
    };
    return new CheckupReport(generate)
  }
}
