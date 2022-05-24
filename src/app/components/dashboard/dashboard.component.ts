import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdatelabelnoteComponent } from 'src/app/updatelabelnote/updatelabelnote.component';
import {MatDialog  } from "@angular/material/dialog";
import { NoteService } from "src/app/components/services/noteservices/note.service"
import {DataService } from "src/app/components/services/data.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle=true;
  Label:any;
  label: any;
  updatedLabel: any;
  labelList: any;
  labeltext: boolean = false;
  textarea: boolean = true;
  userId: any;
  id: any;
  
  

  constructor(private router: Router,private dialog:MatDialog,private NoteService:NoteService, private DataService:DataService) { }

  ngOnInit(): void {
    this.getalllabels();
  }
  logout() {
    localStorage.removeItem('token');
   }

  onnote(){
this.router.navigateByUrl('/dashboard/getallnotes')
  }

  onarchive(){
this.router.navigateByUrl('/dashboard/archive')

  }
ontrash(){
  this.router.navigateByUrl('/dashboard/trash')

}
getalllabels() {
  this.NoteService.getLabelList().subscribe((response: any) => {
    console.log("getAlllabelsuccessfull", response.data);
    this.labelList=response.data.details;
    
     })
    }
openUserDialog(): void {
  console.log("dialog opened")
  const dialogRef = this.dialog.open(UpdatelabelnoteComponent, {
      height:'400px',
      width:'300px'
  });
  dialogRef.afterClosed().subscribe((result: any) => {
      console.log("The dialog was closed");
     
      console.log(result, "result display")
  });
}
searchNote(event:any){
 console.log(event.target.value)
    this.DataService.sendData(event.target.value)
  }
}



