import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user-service.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  constructor(private fb: FormBuilder, private userService: UserService, private alertify:AlertifyService) { }

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

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }


  get email(){
    return this.registrationForm.get('userEmail') as FormControl;
  }

  get password(){
    return this.registrationForm.get('userPassword') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('userConfirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('userMobile') as FormControl;
  }



  onSubmit(){
    console.log(this.registrationForm.value);
    //this.user= Object.assign(this.user,this.registrationForm.value);
    this.userService.addUser(this.userData());
    this.registrationForm.reset();
    this.alertify.success('Congrats, you are successfully registred');

  }

  userData(): User{
    return this.user={
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value

    }
  }

}
