import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { MatDialog } from "@angular/material/dialog";
import { DataService } from "src/app/components/services/data.service";
@Component({
    selector: 'app-displaynotes',
    templateUrl: './displaynotes.component.html',
    styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
    
    @Input() notesArray: any
    @Output() noteUpdated = new EventEmitter<any>();
    @Output() displaytogetallnotes = new EventEmitter<string>()
    // sentmsg: any;
    constructor(public dialog: MatDialog,private DataService:DataService) { }
    filterString:any;
    ngOnInit(): void {
        console.log(this.notesArray,"notes are displayed")
        this.DataService.receiveData.subscribe((response:any)=>{
            console.log("Data received",response)
            this.filterString=response || this.notesArray;
          })
    }

    openDialog(note: any): void {
        console.log(note)
        const dialogRef = this.dialog.open(UpdatenotesComponent, {
            "width": "600px",
            data:  note
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log("The dialog was closed");
            this.noteUpdated.emit(result);
            console.log(result, "result display")
        });
    }
    callingiconstodisplaynotes($event: any) {
       
        this.displaytogetallnotes.emit( $event)
    
      }
}







