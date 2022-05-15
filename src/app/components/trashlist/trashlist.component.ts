import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/components/services/noteservices/note.service";
@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.component.html',
  styleUrls: ['./trashlist.component.scss']
})
export class TrashlistComponent implements OnInit {
trashList:any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.getTrashList()
  }
getTrashList(){
  this.noteService.getTrashNotes().subscribe((response:any)=>{
    console.log("note added to trashlist", response);
    this.trashList =response
    this.trashList = this.trashList.data.data
});
}
}