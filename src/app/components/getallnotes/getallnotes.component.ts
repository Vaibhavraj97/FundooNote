import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/components/services/noteservices/note.service";
@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
 
  // notes: any ;
  // noteService: any;
  noteList: any;

  
  

  constructor(private noteService:NoteService ){}
    


  ngOnInit(): void {
this.getAllNotes();

  }
getAllNotes(){
this. noteService.getNoteList().subscribe((response:any)=>{
  console.log("getAllNotessuccessfull",response.data);
  this.noteList=response.data.data;
 
})

}
}



 



