import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NoteService}   from "src/app/components/services/noteservices/note.service";

@Component({
  selector: 'app-takeanote',
  templateUrl: './takeanote.component.html',
  styleUrls: ['./takeanote.component.scss']
})
export class TakeanoteComponent implements OnInit {

  Title: any;
  Description: any;
  panelOpenState = false;
  div1: boolean = true;
  div2: boolean = false;
  span1: boolean = false;
  token:any;



  constructor(private NoteService: NoteService,public router:Router,private activeRoute:ActivatedRoute) { 
  
  }

  ngOnInit(): void {
  }
 expansiondiv() {
    this.div1 = false;  
   this.span1 = true;
  this.div2 = true;
  }
  closeexpansiondiv() {
     this.div1 = true;
   this.span1 = false;
   }
  onclose() {
    this.span1 = false;
   this.panelOpenState = false;
   this.div1 = true;
    this.div2 = false;


    let reqData = {
      'title': this.Title,
      'description': this.Description
    }
    this.NoteService.takeNoteService(reqData).subscribe((response: any) => {

      console.log(response);
    });
  }
}
