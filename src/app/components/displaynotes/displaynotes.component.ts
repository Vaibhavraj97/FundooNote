import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';
import { MatDialog } from "@angular/material/dialog";
@Component({
    selector: 'app-displaynotes',
    templateUrl: './displaynotes.component.html',
    styleUrls: ['./displaynotes.component.scss']
})
export class DisplaynotesComponent implements OnInit {
    
    @Input() notesArray: any
    @Output() noteUpdated = new EventEmitter<any>();
    constructor(public dialog: MatDialog) { }

    ngOnInit(): void {
        console.log(this.notesArray, "Notes Array has displayed")
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
}







