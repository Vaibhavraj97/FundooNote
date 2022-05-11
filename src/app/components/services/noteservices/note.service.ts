import { Injectable } from '@angular/core';
import {HttpHeaders  } from "@angular/common/http";
import { HttpService } from '../httpservices/http.service';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  
  
  token:any;

  constructor(private httpService:HttpService) { }


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
getNoteList(){
  
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getNotesList', true, headers)
  
  
  }
  updatenoteservice(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log("updated note", reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/updateNotes', reqData, true, header)
  }

}
    
  


