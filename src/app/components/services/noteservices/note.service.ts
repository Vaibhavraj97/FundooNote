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
 deletenoteservice(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log(reqData);

    let headers = {
      headers: new HttpHeaders({

        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/trashNotes', reqData, true, headers)
  }
  archivenoteservice(reqData:any){
    console.log("notes are archived",reqData)

    let headers ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('/notes/archiveNotes',reqData,true,headers)
  }
  getArchiveNotes(){
    console.log("archive service");

    let header ={

      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getArchiveNotesList',true,header)
  }
 
  getTrashNotes(){
    
    console.log("trash noteservice");

    let header ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getTrashNotesList',true,header)
  }



}


    
  


