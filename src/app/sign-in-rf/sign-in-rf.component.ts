import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})
export class SignInRfComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(){
    
  }
  signinForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rememberme: new FormControl(false),
  })
}
