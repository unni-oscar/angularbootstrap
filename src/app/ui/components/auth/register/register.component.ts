import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  submitted = false;

  constructor(private _auth: AuthService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(5)]],
      repassword: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  registerUser() {
    this.submitted = true;
   // console.log(this.registerForm);
    // this._auth.registerUser(this.registerForm).subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
    // )

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')
  }
}
