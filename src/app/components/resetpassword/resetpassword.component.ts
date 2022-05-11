import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/userservices/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})


export class ResetpasswordComponent implements OnInit {
  

  
  resetpasswordForm: any;
  submitted: boolean=false;
  token: any;

  

  constructor(private formbuilder: FormBuilder, public user: UserService, public router: Router, private activeRoute: ActivatedRoute) { 
    this.token = this.activeRoute.snapshot.paramMap.get('token')
  }

  ngOnInit(){
    this.resetpasswordForm = this.formbuilder.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.nullValidator],
    service: "advance"
  })
}


onSubmit() {
    this.submitted = true;
    let reqData = {
      newPassword: this.resetpasswordForm.value.confirmPassword
    }
    this.user.resetpassword(reqData,this.token).subscribe((response: any) => {
      console.log(response);
    })
  }
}




