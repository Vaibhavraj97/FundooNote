import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './components/services/httpservices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) { }

  takeNoteService(reqData: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token

      })
    }
    return this.httpService.postService('/notes/addNotes', reqData, true, header)


  }
  updatenoteservice(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log("noteupdated ", reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/updateNotes', reqData, true, header)
  }
}
