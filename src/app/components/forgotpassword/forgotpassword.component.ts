import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userservices/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotpasswordForm!: any;
  submitted: boolean=false;

  constructor(private formbuilder: FormBuilder, public user:UserService,private router: Router) {
    
  }

  ngOnInit() {
    this.forgotpasswordForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      
    })
  }
  onSubmit() {
    this.submitted = true;
    let reqData = {
      email: this.forgotpasswordForm.value.email,
      
    
    }
   
      this.user.forgotpassword(reqData).subscribe((response: any) => {
        console.log(response);
     
    })
  }
  }



