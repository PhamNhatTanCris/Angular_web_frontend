import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  onSubmit(form: NgForm){
    console.log(form);
  }
  userInfor =
    {
      userName: "",
      passWord: "",
      rememberMe: false
    };

    userNamePattern = /^[a-z]{6,32}$/i;
    passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

}
