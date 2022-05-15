import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggle=true;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
