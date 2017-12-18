import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mech } from '../../models/mech';
import { AuthServiceProvider } from '../auth-service/auth-service'
/*
  Generated class for the MechServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MechServiceProvider {
  mockMechs:Array<Mech> = []
  constructor(private http: HttpClient, private authService:AuthServiceProvider) {
    console.log('Hello MechServiceProvider Provider');
    this.mockMechs = this.createRandomMechine()
  }

  createRandomMechine() {
    // return new Promise<Array<Mech>>((resolve,reject)=>{
      var events = [];
      for (var i = 0; i < 100; i += 1) {
          events.push(new Mech(i))
      }
      return events
    //   resolve(events)
    // })
  }

  getMechineByID(id: number){
    return new Promise<Mech>((resolve,reject)=>{
      resolve(this.mockMechs.find(mech => mech.id == id));
    })
  }

  getMechineByFilter(filter: Mech){
    return new Promise<Array<Mech>>((resolve,reject)=>{
      resolve(this.mockMechs.filter(
        mech => 
        (filter.siteID && mech.siteID == filter.siteID)
      ));
    });
  }

  getScheduledMechineByMonth(selectedDate: Date){
    return new Promise<Array<Mech>>((resolve,reject)=>{
      resolve(this.mockMechs.filter(
        mech => 
        (mech.siteID == this.authService.currentUser.siteID)
      ));
    });
  }

}
