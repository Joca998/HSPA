import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:User){
    let users=[];
    if (localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users')!);
      users=[user]
    } else{
      users=[user];
    }
    localStorage.setItem('Users',JSON.stringify(user));
    console.log(users);
  }

}
