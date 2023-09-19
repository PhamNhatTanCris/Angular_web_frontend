import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  imports: [ReactiveFormsModule]
})
export class LoginFormComponent {
  name2 = new FormControl('Pham Nhat Tan');

  showName2(){
    alert(this.name2.value);
  }
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
  })
  showName3(){
    alert("Username: " + this.loginForm.value.username + "|" + "Password: "
    + this.loginForm.value.password)
  }

}
