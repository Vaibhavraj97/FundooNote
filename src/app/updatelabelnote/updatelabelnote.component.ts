import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NoteService } from "src/app/components/services/noteservices/note.service";

@Component({
  selector: 'app-updatelabelnote',
  templateUrl: './updatelabelnote.component.html',
  styleUrls: ['./updatelabelnote.component.scss']
})
export class UpdatelabelnoteComponent implements OnInit {

  label: any;
  updatedLabel: any;
  labelList: any;
  labeltext: boolean = false;
  textarea: boolean = true;
  userId: any;
  id: any;
  constructor(private NoteService: NoteService, public dialogRef: MatDialogRef<UpdatelabelnoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getalllabels();
  }

  getalllabels() {
    this.NoteService.getLabelList().subscribe((response: any) => {
      console.log("getAlllabelsuccessfull", response.data);
      this.labelList=[];
      response.data.details.forEach((element: any) => {
        this.labelList.push({
          id: element.id,
          isDeleted: element.isDeleted,
          label: element.label,
          userId: element.userId,
          isUpdate: false
         
        })
      });
      console.log(this.labelList)
    })
  }

  onDone() {
    let req = {
      label: this.label,
      isDeleted: false,
      userId: localStorage.getItem('userId')
    }
    console.log(req)
    this.NoteService.Addlabelservice(req).subscribe((response: any) => {
      console.log(response);
      this.getalllabels()
    })
  }

  onClose() {
    this.dialogRef.close();
  }

  onUpdate(label:any){
    label.isUpdate=false;
      let req = {
        label: this.updatedLabel,
        isDeleted: false,
        id:label.id,
        userId: label.userId,
      }
      this.NoteService.updateLabel(req).subscribe((response: any) => {
        console.log(response);
        this.getalllabels()
        this.updatedLabel='';
      })
  }
  onDelete(label:any){
    
      let req = {
        label: this.updatedLabel,
        
        id:label.id,
       
      }
      this.NoteService.deleteLabel(req).subscribe((response: any) => {
        console.log(response);
       
      })
  }
}