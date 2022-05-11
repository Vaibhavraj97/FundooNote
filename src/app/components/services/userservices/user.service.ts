import { Injectable } from '@angular/core';
import { HttpService } from "../httpservices/http.service";
import { environment } from "../../../../environments/environment";
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  token: any;
  constructor(private httpService: HttpService) {
    this.token; localStorage.getItem("token")
  }
  baseUrl = environment.baseurl;

  registrationpage(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/userSignUp', reqdata, false, header)
  }
  login(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/login', reqdata, false, header)
  }

  forgotpassword(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/reset', reqdata, false, header)
  }


  resetpassword(reqdata: any, token: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': token
      })
    }
    return this.httpService.postService('/user/reset-password?access_token=' + token, reqdata, true, header)
  }
}

