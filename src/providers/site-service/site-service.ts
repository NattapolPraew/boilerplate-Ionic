import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Site } from '../../models/site';


/*
  Generated class for the SiteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SiteServiceProvider Provider');
  }

  getAllSite(){
    return new Promise<Array<Site>>((reslove,reject)=>{
      return Array(97).forEach((item,index)=>{new Site(index,index.toString())})
    })
  }

}
