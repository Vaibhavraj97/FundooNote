import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from "../services/noteservices/note.service";

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteObject: any;
  noteCard: any;
 


  constructor(private NoteService: NoteService) {

  }


  ngOnInit(): void {

  }


  ondelete() {
    let req = {
      noteIdList: [this.noteObject.id],
      isDeleted: true
    }
    console.log("Note deleted", req)
    console.log("deleted", this.noteObject);
    this.NoteService.deletenoteservice(req).subscribe((res: any) => {
      console.log(res);
    });


  }
  onarchive() {
    let req = {
      noteIdList: [this.noteObject.id],
      isArchived: true,
    }
    console.log("note archived", this.noteObject);
    this.NoteService.archivenoteservice(req).subscribe((response: any) => {
      console.log(response);

    });
  }

}