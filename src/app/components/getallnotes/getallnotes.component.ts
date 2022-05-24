import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/components/services/noteservices/note.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
 
  noteList: any;

  
  

  constructor(private noteService:NoteService ){}
    


  ngOnInit(): void {
this.getAllNotes();

  }
getAllNotes(){
this.noteService.getNoteList().subscribe((response:any)=>{
  console.log("getAllNotessuccessfull",response.data);
  this.noteList=response.data.data;
  this.noteList=this.noteList.filter((data:any)=>{
  console.log("notes ")
    return data.isArchived ==false && data.isDeleted == false;
  
  })
  this.noteList.reverse();
})

}
receiveMessage($event:any) {
  this.getAllNotes()
  console.log($event)

}
updatedData(value: any) {

  this.getAllNotes()
}
}



 



