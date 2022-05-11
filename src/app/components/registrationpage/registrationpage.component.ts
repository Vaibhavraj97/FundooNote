import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { UserService } from "../services/userservices/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.scss']
})

export class RegisterComponent implements OnInit {
  
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder, public user: UserService, public route: Router) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.nullValidator],
      
    })
  }

  
  onSubmit() {
    this.submitted = true;
      let reqData = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        
      }
      this.user.registrationpage(reqData).subscribe((response: any) => {
        console.log(response);
      })
    
  }
}


