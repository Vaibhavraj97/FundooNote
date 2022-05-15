import { Component, OnInit } from '@angular/core';
import { NoteService } from "src/app/components/services/noteservices/note.service";
@Component({
  selector: 'app-archivelist',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.scss']
})
export class ArchivelistComponent implements OnInit {
 archiveList: any;

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
this.getArchiveList();
  }
getArchiveList(){
  this.noteService. getArchiveNotes().subscribe((response:any)=>{
    console.log("get all archive", response);
    this.archiveList =response
    this.archiveList = this.archiveList.data.data
}
  )};
  }


