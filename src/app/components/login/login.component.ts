import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/userservices/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  submitted: boolean = false;
   users:any;
  constructor(private formbuilder: FormBuilder, public user: UserService, private router: Router) { }




  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     service:'advance'
    })



  }

  onSubmit() {
    this.submitted = true;
    let reqData = {
      email: this.loginForm.value.userName,
      password: this.loginForm.value.password,
      service:'advance'
    }
    this.user.login(reqData).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token',response.id)
      localStorage.setItem('userId',response.userId)
    },(error)=>{console.log(error)})
  }
}
