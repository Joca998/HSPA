import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user: any={};
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.registrationForm=new FormGroup({
    //   userName: new FormControl(null,Validators.required),
    //   userEmail: new FormControl(null,[Validators.required,Validators.email]),
    //   userPassword: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    //   userConfirmPassword: new FormControl(null,Validators.required),
    //   userMobile: new FormControl(null,[Validators.required,Validators.maxLength(10)])
    // });
    this.createRegistrationForm();
  }

  createRegistrationForm(){
    this.registrationForm=this.fb.group({
      userName: [null,Validators.required],
      userEmail:[null,[Validators.required,Validators.email]],
      userPassword: [null,[Validators.required,Validators.minLength(8)]],
      userConfirmPassword: [null,Validators.required],
      userMobile: [null,[Validators.required,Validators.maxLength(10)]]
    });
}

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password')!.value === fg.get('confirmPassword')!.value ? true : {notmached:false}

  }

  getUserName(){
    return this.registrationForm.get('userName') as FormControl;
  }


  getEmail(){
    return this.registrationForm.get('userEmail') as FormControl;
  }

  getPassword(){
    return this.registrationForm.get('userPassword') as FormControl;
  }

  getConfirmPassword(){
    return this.registrationForm.get('userConfirmPassword') as FormControl;
  }

  getMobile(){
    return this.registrationForm.get('userMobile') as FormControl;
  }



  onSubmit(){
    console.log(this.registrationForm.value);
    this.user= Object.assign(this.user,this.registrationForm.value);
    this.addUser(this.user);
  }

  addUser(user:any){
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
