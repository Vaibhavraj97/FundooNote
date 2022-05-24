import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from "src/app/components/services/noteservices/note.service";
@Component({
  selector: 'app-addlabel',
  templateUrl: './addlabel.component.html',
  styleUrls: ['./addlabel.component.scss']
})
export class AddlabelComponent implements OnInit {
  labelList:any;
  label:any;
  noteId: any;
  isChecked = false;
  checked:any;
  constructor(private NoteService:NoteService,public dialogRef: MatDialogRef<AddlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {}
  //   this.getalllabels();
  // }
  // getalllabels() {
  //   this.NoteService.getLabelList().subscribe((response: any) => {
  //     console.log("getAlllabelsuccessfull", response.data);
  //     this.labelList=response.data.details;
      
  //      })
  //     }
  //     onClose() {
  //       this.dialogRef.close();
  //     }
  //     oncheckmark(){
       
  //       let req = {
  //         noteId: this.noteId
  //       }
  //       this.NoteService.addlabelNoteService(req).subscribe((response: any) => {
  //         console.log(response);
         
  //       })
        
  //   }
  //     }

  }