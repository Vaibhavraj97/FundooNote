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
  changecolorservice(reqData:any){
    console.log("inside the change color service")
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
  
    return this.httpService.postService('/notes/changesColorNotes',reqData, true,header)
  }

  Addlabelservice(reqData: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token

      })
    }
  
    return this.httpService.postService('/noteLabels',reqData, true,header)
  }
  deleteforever(reqData:any){

    let headers ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : this.token
      })
    }
return this.httpService.postService('/notes/deleteForeverNotes', reqData,true,headers)
  }

  getLabelList(){
  
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/noteLabels/getNoteLabelList', true, headers)
  
  
  }
  updateLabel(reqData:any){
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('/noteLabels/'+reqData.userId+'/updateNoteLabel',reqData, true, headers)
  
  }
  deleteLabel(reqData:any){
    this.token = localStorage.getItem('token')
    let headers = {
      headers: new HttpHeaders({
  
        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.deleteService('/noteLabels/'+reqData.id+'/deleteNoteLabel',reqData, true)
  }
  addlabelNoteService(reqData: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token

      })
    }
    return this.httpService.postService('/notes/'+reqData.noteId+'/addLabelToNotes/'+reqData.labelid+'/add',reqData, true,header)
  }
 }


 


    
  


