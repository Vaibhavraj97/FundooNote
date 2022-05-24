import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArchivelistComponent } from '../archivelist/archivelist.component';
import { NoteService } from "../services/noteservices/note.service";
import { TrashlistComponent } from '../trashlist/trashlist.component';
import { ActivatedRoute } from "@angular/router";
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { AddlabelComponent } from "../../components/addlabel/addlabel.component";
import {MatDialog  } from "@angular/material/dialog";
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @Input() noteObject: any;
  
  noteCard: any;
  @Output() iconstodisplay = new EventEmitter<any>();
 

  colors = [
    {

      name: 'palegoldenrod', bgColorValue: '#EEE8AA'
    },
    {
      name: 'darkgray', bgColorValue: '#A9A9A9'

    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'lightpink', bgColorValue: '	#FFB6C1'
    },
    {
      name: 'coral', bgColorValue: '#FF7F50'
    }

  ];
   
 
  isTrashed: boolean = false;
  isArchived:boolean = false;
  noteId: any;
  labelList: any;
  label:any;
  data: any;
  
  
 


  constructor(private dialog:MatDialog,private NoteService: NoteService,private activatedroute: ActivatedRoute ) {

  }

  
 

  ngOnInit(): void {
    
      let comp = this.activatedroute.snapshot.component;
      if (comp == DisplaynotesComponent) {
      }
  
      if (comp == TrashlistComponent) {
        this.isTrashed = true;
  
      }
      if (comp == ArchivelistComponent) {
        this.isArchived = true;
      }
      this.getalllabels();
      console.log( this.noteObject)
      this.noteId=this.noteObject.id
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
      this.iconstodisplay.emit(res)
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
      this.iconstodisplay.emit(response)
    });
  }
  changeColor(noteColor: any) {
    console.log('color', noteColor);
    this.noteObject.color = noteColor
    let req = {
      color: noteColor,
      noteIdList: [this.noteObject.id],

    }
    console.log(req)
    this.NoteService.changecolorservice(req).subscribe((response: any) => {
      console.log("color change", response);
      this.iconstodisplay.emit(noteColor)


    })

}

ondeleteforever() {
  let req = {
    noteIdList: [this.noteObject.id],
    isDeleted: true
  }
    
  
  console.log('delete forever', req);
  this.NoteService.deleteforever(req).subscribe((response: any) => {
    console.log(response);
    this.iconstodisplay.emit(response);

  })
}
onunarchive() {
  
  let reqData = {
    noteIdList: [this.noteObject.id],
    isArchived: false
  }
  console.log('unarchieved', reqData);
  this.NoteService. archivenoteservice(reqData).subscribe((response: any) => {
    console.log(response);
    this.iconstodisplay.emit(response)

  })
}

onrestore() {
  this.noteObject.isDeleted =true;
  let reqData = {
    noteIdList: [this.noteObject.id],
    isDeleted: false,
  }
  this.NoteService.deletenoteservice(reqData).subscribe((response: any) => {

    console.log(response.data);
    this.iconstodisplay.emit(response);
  })
}
getalllabels() {
  this.NoteService.getLabelList().subscribe((response: any) => {
    console.log("getAlllabelsuccessfull", response.data);
    this.labelList=response.data.details;
    
     })
    }
oncheckmark(label:any){
  let req = {
    noteId: this.noteId,
    labelid:label.id
  }
  this.NoteService.addlabelNoteService(req).subscribe((response: any) => {
    console.log(response);
  })
  
}
onClose() {
  
}
}