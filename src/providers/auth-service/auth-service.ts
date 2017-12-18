import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user'

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  public currentUser: User;
  private mockUser: User = new User('Simon', 'saimon@devdactic.com',3,'mockToken',['mockRole']);
  private isLoggedIn = false;

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }
  
  public login() {
    return new Promise((resolve, reject) => {
      // if (credentials.email === null || credentials.password === null) {
      //   return reject("Please insert credentials");
      // } else {
      //   let body = { username: credentials.email, password: credentials.password }
      //   return this.http.post("http://localhost:8080/login/authenticate", body).toPromise().then(res=>{
      //     let expireDate = res['token'].split(':')[1];        
      //     this.currentUser = new User('Simon', 'saimon@devdactic.com',3,res["token"],res['roles']);
          
      //     localStorage.setItem('authToken', this.currentUser.token);
      //     localStorage.setItem('authExpire', expireDate);
      //     this.isLoggedIn = true;
          
      //     return resolve("Valid credentials")
      //   }, error => {
      //     return reject("Invalid credentials");
      //   });
      // }
      this.currentUser = this.mockUser;
      resolve("Valid credentials")
    });
  }

  public getAuthToken() {
    return localStorage.getItem('authToken');
  }
  public isLogIn() {
    return this.isLoggedIn;
  }

  public async checkAuthenticate() {
    return new Promise((resolve, reject)=> {
      // if(localStorage.getItem('authToken') === null){
      //   //Todo redirect to login page
      //   return reject(new Error("Please login"))
      // }else{
      //   if(parseInt(localStorage.getItem('authExpire')) > new Date().getTime()){
      //     //request user by token
      //     var headers = new HttpHeaders();
      //     headers = headers.append("x-auth-token", this.getAuthToken());
      //     return this.http.get("http://localhost:8080/login/getUserByToken",{headers}).toPromise().then(res => {
      //       this.currentUser = new User('Simon', 'saimon@devdactic.com',3,res["token"],res['roles']);
      //       this.isLoggedIn = true;
      //       resolve(true)
      //     });
      //   } else {
      //     //Todo redirect to login page
      //     return reject(new Error("Please login"));
      //   }
      // }

      this.currentUser = this.mockUser;
      resolve(true);
    });
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    var headers = new HttpHeaders();
    headers = headers.append("x-auth-token", this.getAuthToken());
    console.log(headers)
    // headers = headers.append("Access-Control-Allow-Credentials", "true");
    this.http.get("http://localhost:8080/greeting",{headers}).toPromise().then(result=>{console.log("==========>" + result)});
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
