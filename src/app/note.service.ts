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
  archivenoteservice(){
    console.log("inside the archive service");

    let header ={

      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getArchiveNotesList',true,header)
  }
trashnoteservice(){
    
    console.log("inside the trash noteservice");

    let header ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getTrashNotesList',true,header)
  }

  changecolorservice(reqData:any){
    console.log("color change service")
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
  
    return this.httpService.postService('/notes/changesColorNotes',reqData, true,header)
  }



 }



