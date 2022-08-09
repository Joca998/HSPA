import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){

  this.router.navigate(['']);

    //  console.log(loginForm.value);
  //  const user=this.authService.authUser(loginForm.value);
  //  if (user){
  //   this.alertify.success("Login successful");
  //  }
  //  else{
  //   this.alertify.error("Login not successfull")
  //  }
   }

}
