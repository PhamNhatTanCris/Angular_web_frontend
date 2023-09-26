import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NoWhitespaceValidator } from '../shared/validators/no-white-space.validator';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})
export class SignInRfComponent implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    signinForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          // Validators.required,
          NoWhitespaceValidator(),
          Validators.minLength(6),
          // Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/),
        ]),
      ],
      rememberme: false,
    });

    // setTimeout(() => {
    //   this.signinForm.patchValue({
    //     username: 'admin',
    //     password: '123456',
    //     rememberme: true,
    //   });
    // }, 100);

  constructor(private fb: FormBuilder) { }


  onSubmit() {
    console.log(this.signinForm);
  }

//   }
//   signinForm = new FormGroup({
//     username: new FormControl(''),
//     password: new FormControl(''),
//     rememberme: new FormControl(false),
//   })
// }
}
