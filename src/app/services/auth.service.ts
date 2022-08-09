import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import *as alertify from 'alertifyjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(){}

authUser(user:any){
  let UserArray=[];
  if (localStorage.getItem('Users')){
    UserArray=JSON.parse(localStorage.getItem('Users')|| '');
  }
  return UserArray.find((p:any)=>p.userName === user.userName && p.password===p.password);
}

}
